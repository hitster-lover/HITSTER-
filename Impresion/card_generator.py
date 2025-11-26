import csv
import io
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.utils import ImageReader

# --- Librerías para QR ---
import qrcode
from PIL import Image

# --- CONFIGURACIÓN DE ESTILO ---
# Colores inspirados en la estética HITSTER (valores entre 0 y 1 para RGB)
NEON_PINK = (1, 0.05, 0.58)       # #FF0DA8
NEON_BLUE = (0.05, 0.9, 1)        # #0DE5FF
DARK_GRAY = (0.1, 0.1, 0.12)      # #1A1A1F
WHITE_TEXT = (0.95, 0.95, 0.95)

# --- CONFIGURACIÓN DEL ARCHIVO ---
CSV_FILE = 'binder_ESP.csv' 
OUTPUT_PDF = 'imprimir_v00.pdf'

# --- DIMENSIONES ---
PAGE_WIDTH, PAGE_HEIGHT = A4
CARD_WIDTH, CARD_HEIGHT = 7 * cm, 7 * cm
CARDS_PER_ROW = 2
CARDS_PER_COL = 4
CARDS_PER_PAGE = CARDS_PER_ROW * CARDS_PER_COL
MARGIN_X = (PAGE_WIDTH - CARDS_PER_ROW * CARD_WIDTH) / 2
MARGIN_Y = (PAGE_HEIGHT - CARDS_PER_COL * CARD_HEIGHT) / 2

# --- ESTILOS DE TEXTO ---
styles = getSampleStyleSheet()

style_front_number = ParagraphStyle(
    name='FrontNumber', fontName='Helvetica-Bold', fontSize=80, leading=85,
    alignment=TA_CENTER, textColor=NEON_PINK
)
style_back_year = ParagraphStyle(
    name='BackYear', fontName='Helvetica-Bold', fontSize=48, leading=50,
    alignment=TA_CENTER, textColor=WHITE_TEXT
)
style_back_title = ParagraphStyle(
    name='BackTitle', fontName='Helvetica-Bold', fontSize=10, leading=12,
    alignment=TA_CENTER, textColor=NEON_PINK
)
style_back_artist = ParagraphStyle(
    name='BackArtist', fontName='Helvetica', fontSize=9, leading=11,
    alignment=TA_CENTER, textColor=WHITE_TEXT,
)

def leer_canciones(filename):
    """Lee el CSV y prepara los datos, incluyendo la URI para el QR."""
    canciones = []
    try:
        # Usamos 'utf-8-sig' para evitar problemas con caracteres invisibles (BOM) al inicio
        with open(filename, mode='r', encoding='utf-8-sig') as infile:
            # ¡CLAVE! Le decimos al lector que use punto y coma como separador
            reader = csv.DictReader(infile, delimiter=';') 
            
            for row in reader:
                # Mapeamos los nombres de columna EXACTOS de tu archivo
                canciones.append({
                    'numero': row['n'],           # <-- CAMBIADO: ahora lee la columna 'n'
                    'titulo': row['Track'],
                    'artista': row['Artist'],
                    'ano': row['Release Year'],
                    'uri': row['Track URI']
                })
        print(f"✅ Se han procesado {len(canciones)} canciones de '{filename}'.")
        return canciones
    except FileNotFoundError:
        print(f"❌ ERROR: No se encontró el archivo '{filename}'.")
        return None
    except KeyError as e:
        # Mensaje de error más específico
        print(f"❌ ERROR: Falta la columna {e} en el CSV. Revisa que los encabezados del archivo sean exactamente: 'Track URI', 'n', 'Track', 'Artist', 'Release Year'")
        return None

def generar_qr_code(data):
    """Genera una imagen de código QR en memoria."""
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=2,
    )
    qr.add_data(data)
    qr.make(fit=True)
    
    # --- LA CORRECCIÓN ESTÁ AQUÍ ---
    # Convertir el color de formato reportlab (float 0-1) a formato Pillow (int 0-255)
    qr_fill_color = tuple(int(c * 255) for c in DARK_GRAY)
    
    # Crea la imagen con el color correcto (entero) para Pillow
    img = qr.make_image(fill_color=qr_fill_color, back_color="white").convert('RGBA')
    # --- FIN DE LA CORRECCIÓN ---
    
    # Hacemos el fondo blanco transparente
    datas = img.getdata()
    newData = []
    for item in datas:
        if item[0] == 255 and item[1] == 255 and item[2] == 255:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)

    # Guarda la imagen en un buffer de memoria para que reportlab la lea
    img_buffer = io.BytesIO()
    img.save(img_buffer, format='PNG')
    img_buffer.seek(0)
    return ImageReader(img_buffer)

def dibujar_fondo_tarjeta(c, x, y):
    """Dibuja el fondo oscuro y el borde de neón simulado."""
    c.saveState()
    # Capa exterior (azul) - simula el resplandor
    c.setFillColorRGB(*NEON_BLUE)
    c.roundRect(x - 2, y - 2, CARD_WIDTH + 4, CARD_HEIGHT + 4, radius=3, stroke=0, fill=1)
    # Capa interior (rosa)
    c.setFillColorRGB(*NEON_PINK)
    c.roundRect(x - 1, y - 1, CARD_WIDTH + 2, CARD_HEIGHT + 2, radius=2, stroke=0, fill=1)
    # Fondo principal de la tarjeta
    c.setFillColorRGB(*DARK_GRAY)
    c.roundRect(x, y, CARD_WIDTH, CARD_HEIGHT, radius=1, stroke=0, fill=1)
    c.restoreState()

def dibujar_pagina(c, chunk_canciones, es_frontal):
    """Dibuja una página completa (frontal o anverso)."""
    for i, cancion in enumerate(chunk_canciones):
        row, col = divmod(i, CARDS_PER_ROW)
        
        # Invertir columnas para el anverso (clave para doble cara)
        draw_col = CARDS_PER_ROW - 1 - col if not es_frontal else col
        
        x = MARGIN_X + draw_col * CARD_WIDTH
        y = PAGE_HEIGHT - MARGIN_Y - (row + 1) * CARD_HEIGHT
        
        # 1. Dibujar fondo y borde
        dibujar_fondo_tarjeta(c, x, y)
        
        if es_frontal:
            # --- DIBUJAR FRONTAL ---
            p = Paragraph(cancion['numero'], style_front_number)
            w, h = p.wrapOn(c, CARD_WIDTH, CARD_HEIGHT)
            p.drawOn(c, x, y + (CARD_HEIGHT - h) / 2)
        else:
            # --- DIBUJAR ANVERSO ---
            # Año en la parte superior
            p_ano = Paragraph(cancion['ano'], style_back_year)
            w_ano, h_ano = p_ano.wrapOn(c, CARD_WIDTH, CARD_HEIGHT)
            p_ano.drawOn(c, x, y + CARD_HEIGHT - h_ano - 0.8 * cm)

            # Código QR en el centro
            qr_size = 2.5 * cm
            qr_img = generar_qr_code(cancion['uri'])
            c.drawImage(qr_img, x + (CARD_WIDTH - qr_size) / 2, y + (CARD_HEIGHT - qr_size) / 2 - 0.2*cm,
                        width=qr_size, height=qr_size, mask='auto')

            # Título y Artista en la parte inferior
            p_titulo = Paragraph(cancion['titulo'], style_back_title)
            p_artista = Paragraph(cancion['artista'], style_back_artist)
            w_t, h_t = p_titulo.wrapOn(c, CARD_WIDTH * 0.9, CARD_HEIGHT)
            w_a, h_a = p_artista.wrapOn(c, CARD_WIDTH * 0.9, CARD_HEIGHT)

            p_titulo.drawOn(c, x + (CARD_WIDTH - w_t)/2, y + 1.2 * cm)
            p_artista.drawOn(c, x + (CARD_WIDTH - w_a)/2, y + 0.7 * cm)

def generar_pdf():
    """Función principal que orquesta la creación del PDF."""
    canciones = leer_canciones(CSV_FILE)
    if not canciones: return

    c = canvas.Canvas(OUTPUT_PDF, pagesize=A4)
    c.setTitle("Tarjetas Musicales HITSTER")

    for i in range(0, len(canciones), CARDS_PER_PAGE):
        chunk = canciones[i:i + CARDS_PER_PAGE]
        
        print(f"Generando página frontal {c.getPageNumber()}...")
        dibujar_pagina(c, chunk, es_frontal=True)
        c.showPage()

        print(f"Generando página de anversos {c.getPageNumber()}...")
        dibujar_pagina(c, chunk, es_frontal=False)
        c.showPage()

    c.save()
    print(f"\n🎉 ¡PDF '{OUTPUT_PDF}' generado con éxito!")
    print("¡Listo para imprimir a doble cara (volteando por el borde corto)!")

if __name__ == "__main__":
    generar_pdf()