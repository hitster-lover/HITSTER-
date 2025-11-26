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
# Añadimos el amarillo neón
NEON_PINK = (1, 0.05, 0.58)       # #FF0DA8
NEON_BLUE = (0.05, 0.9, 1)        # #0DE5FF
NEON_YELLOW = (1, 1, 0.2)         # #FFFF33
DARK_GRAY = (0.1, 0.1, 0.12)      # #1A1A1F
WHITE_TEXT = (0.95, 0.95, 0.95)

# --- CONFIGURACIÓN DEL ARCHIVO ---
CSV_FILE = 'binder_ESP.csv' 
OUTPUT_PDF = 'imprimir_v01.pdf'

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

# Un único estilo para el contenido del anverso, centrado
style_back_content = ParagraphStyle(
    name='BackContent', fontName='Helvetica', fontSize=12, # Tamaño base
    leading=16, alignment=TA_CENTER, textColor=WHITE_TEXT
)

def leer_canciones(filename):
    """Lee el CSV y prepara los datos."""
    canciones = []
    try:
        with open(filename, mode='r', encoding='utf-8-sig') as infile:
            reader = csv.DictReader(infile, delimiter=';')
            for row in reader:
                canciones.append({
                    'numero': row['n'], 'titulo': row['Track'],
                    'artista': row['Artist'], 'ano': row['Release Year']
                })
        print(f"✅ Se han procesado {len(canciones)} canciones de '{filename}'.")
        return canciones
    except FileNotFoundError:
        print(f"❌ ERROR: No se encontró el archivo '{filename}'.")
        return None
    except KeyError as e:
        print(f"❌ ERROR: Falta la columna {e} en el CSV.")
        return None

def dibujar_fondo_tarjeta(c, x, y):
    """Dibuja el fondo oscuro y un borde de neón GRUESO de 3 colores."""
    c.saveState()
    # Grosor del borde en puntos (1 cm ≈ 28.3 puntos)
    grosor_total = 6 
    
    # Capa exterior (Amarillo)
    c.setFillColorRGB(*NEON_YELLOW)
    c.roundRect(x - grosor_total, y - grosor_total, CARD_WIDTH + 2*grosor_total, CARD_HEIGHT + 2*grosor_total, radius=8, stroke=0, fill=1)
    
    # Capa intermedia (Azul)
    c.setFillColorRGB(*NEON_BLUE)
    c.roundRect(x - grosor_total/2, y - grosor_total/2, CARD_WIDTH + grosor_total, CARD_HEIGHT + grosor_total, radius=6, stroke=0, fill=1)

    # Capa interior (Rosa)
    c.setFillColorRGB(*NEON_PINK)
    c.roundRect(x - grosor_total/4, y - grosor_total/4, CARD_WIDTH + grosor_total/2, CARD_HEIGHT + grosor_total/2, radius=4, stroke=0, fill=1)

    # Fondo principal de la tarjeta
    c.setFillColorRGB(*DARK_GRAY)
    c.roundRect(x, y, CARD_WIDTH, CARD_HEIGHT, radius=2, stroke=0, fill=1)
    c.restoreState()

def dibujar_pagina(c, chunk_canciones, es_frontal):
    """Dibuja una página completa (frontal o anverso)."""
    for i, cancion in enumerate(chunk_canciones):
        row, col = divmod(i, CARDS_PER_ROW)
        draw_col = CARDS_PER_ROW - 1 - col if not es_frontal else col
        x = MARGIN_X + draw_col * CARD_WIDTH
        y = PAGE_HEIGHT - MARGIN_Y - (row + 1) * CARD_HEIGHT
        
        dibujar_fondo_tarjeta(c, x, y)
        
        if es_frontal:
            # --- DIBUJAR FRONTAL ---
            p = Paragraph(cancion['numero'], style_front_number)
            w, h = p.wrapOn(c, CARD_WIDTH, CARD_HEIGHT)
            p.drawOn(c, x, y + (CARD_HEIGHT - h) / 2)
        else:
            # --- DIBUJAR ANVERSO REDISEÑADO ---
            # Usamos tags HTML para formatear todo en un solo bloque de texto
            # Aumentamos el tamaño de fuente para título (18) y artista (14)
            texto = f"""
                <font size=52><b>{cancion['ano']}</b></font>
                <br/><br/><br/>
                <font name="Helvetica-Bold" size=18 color="{','.join(map(str, NEON_PINK))}">{cancion['titulo']}</font>
                <br/><br/>
                <font size=14><i>{cancion['artista']}</i></font>
            """
            
            p_contenido = Paragraph(texto, style_back_content)
            
            # Envolvemos y centramos todo el bloque de texto en la tarjeta
            w, h = p_contenido.wrapOn(c, CARD_WIDTH * 0.9, CARD_HEIGHT * 0.9) # 90% del ancho
            x_offset = (CARD_WIDTH - w) / 2
            y_offset = (CARD_HEIGHT - h) / 2
            p_contenido.drawOn(c, x + x_offset, y + y_offset)

def generar_pdf():
    """Función principal que orquesta la creación del PDF."""
    canciones = leer_canciones(CSV_FILE)
    if not canciones: return
    
    c = canvas.Canvas(OUTPUT_PDF, pagesize=A4)
    c.setTitle("Tarjetas Musicales HITSTER Rediseñadas")
    
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