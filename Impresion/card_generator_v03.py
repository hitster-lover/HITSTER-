import csv
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_CENTER
# ¡Importante! Añadimos la clase Color para manejar la transparencia
from reportlab.lib.colors import Color 

# --- CONFIGURACIÓN DE ESTILO ---
NEON_PINK = (1, 0.05, 0.58)
NEON_BLUE = (0.05, 0.9, 1)
NEON_YELLOW = (1, 1, 0.2)
# CORRECCIÓN: Definimos el color del resplandor usando el objeto Color con alpha
NEON_GLOW_COLOR = Color(0.7, 0.95, 1, alpha=0.6)
DARK_GRAY = (0.1, 0.1, 0.12)
WHITE_TEXT = (0.95, 0.95, 0.95)

# --- CONFIGURACIÓN DEL ARCHIVO ---
CSV_FILE = 'binder_ESP.csv'
OUTPUT_PDF = 'imprimir_v03.pdf' # Nuevo nombre para la versión final

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
    alignment=TA_CENTER, textColor=Color(*NEON_PINK) # Usar objeto Color
)
style_back_year = ParagraphStyle(
    name='BackYear', fontName='Helvetica-Bold', fontSize=52, leading=55,
    alignment=TA_CENTER, textColor=Color(*WHITE_TEXT)
)
style_back_details = ParagraphStyle(
    name='BackDetails', fontName='Helvetica', fontSize=12,
    leading=16, alignment=TA_CENTER, textColor=Color(*WHITE_TEXT)
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

def dibujar_fondo_tarjeta(c, x, y, es_grueso=False):
    """Dibuja el fondo y el borde. Si es_grueso es True, el borde es más ancho."""
    c.saveState()
    
    # MEJORA: El grosor del borde depende de si es la tarjeta frontal
    grosor_total = 12 if es_grueso else 6
    
    c.setFillColorRGB(*NEON_YELLOW)
    c.roundRect(x - grosor_total, y - grosor_total, CARD_WIDTH + 2*grosor_total, CARD_HEIGHT + 2*grosor_total, radius=8, stroke=0, fill=1)
    c.setFillColorRGB(*NEON_BLUE)
    c.roundRect(x - grosor_total/2, y - grosor_total/2, CARD_WIDTH + grosor_total, CARD_HEIGHT + grosor_total, radius=6, stroke=0, fill=1)
    c.setFillColorRGB(*NEON_PINK)
    c.roundRect(x - grosor_total/4, y - grosor_total/4, CARD_WIDTH + grosor_total/2, CARD_HEIGHT + grosor_total/2, radius=4, stroke=0, fill=1)
    c.setFillColorRGB(*DARK_GRAY)
    c.roundRect(x, y, CARD_WIDTH, CARD_HEIGHT, radius=2, stroke=0, fill=1)
    c.restoreState()

def draw_neon_text(c, text, x_card, y_card, style, glow_color):
    """Dibuja un texto con un efecto de resplandor de neón."""
    c.saveState()
    p_main = Paragraph(text, style)
    w, h = p_main.wrapOn(c, CARD_WIDTH, CARD_HEIGHT)
    x_pos = x_card + (CARD_WIDTH - w) / 2
    y_pos = y_card + (CARD_HEIGHT - h) / 2
    
    glow_style = style.clone('glow', textColor=glow_color)
    p_glow = Paragraph(text, glow_style)
    p_glow.wrapOn(c, CARD_WIDTH, CARD_HEIGHT) # Esto era lo que faltaba en el error anterior
    
    glow_size = 0.8
    offsets = [(-glow_size, -glow_size), (glow_size, -glow_size), (-glow_size, glow_size), (glow_size, glow_size)]
    for dx, dy in offsets:
        p_glow.drawOn(c, x_pos + dx, y_pos + dy)
    p_main.drawOn(c, x_pos, y_pos)
    c.restoreState()
    
def dibujar_pagina(c, chunk_canciones, es_frontal):
    """Dibuja una página completa (frontal o anverso)."""
    for i, cancion in enumerate(chunk_canciones):
        row, col = divmod(i, CARDS_PER_ROW)
        draw_col = CARDS_PER_ROW - 1 - col if not es_frontal else col
        x = MARGIN_X + draw_col * CARD_WIDTH
        y = PAGE_HEIGHT - MARGIN_Y - (row + 1) * CARD_HEIGHT
        
        # MEJORA: Pasamos el flag 'es_frontal' para decidir el grosor del borde
        dibujar_fondo_tarjeta(c, x, y, es_grueso=es_frontal)
        
        if es_frontal:
            draw_neon_text(c, cancion['numero'], x, y, style_front_number, NEON_GLOW_COLOR)
        else:
            # Reutilizamos la función de neón para el año, queda más limpio
            draw_neon_text(c, cancion['ano'], x, y - 2.5*cm, style_back_year, NEON_GLOW_COLOR)

            texto_detalles = f"""
                <font name="Helvetica-Bold" size=15 color="{','.join(map(str, NEON_PINK))}">{cancion['titulo']}</font>
                <br/>
                <font size=13><i>{cancion['artista']}</i></font>
            """
            p_detalles = Paragraph(texto_detalles, style_back_details)
            w_det, h_det = p_detalles.wrapOn(c, CARD_WIDTH * 0.9, CARD_HEIGHT)
            y_detalles = y + 1.2 * cm
            p_detalles.drawOn(c, x + (CARD_WIDTH - w_det)/2, y_detalles)

def generar_pdf():
    """Función principal que orquesta la creación del PDF."""
    canciones = leer_canciones(CSV_FILE)
    if not canciones: return
    
    c = canvas.Canvas(OUTPUT_PDF, pagesize=A4)
    c.setTitle("Tarjetas Musicales HITSTER NEON")
    
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