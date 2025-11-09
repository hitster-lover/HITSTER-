// script.js

// 1. LA BASE DE DATOS
// Pega aquí tu lista de 1000 canciones convertida a formato JSON.
// Por ahora, usamos un ejemplo corto.
const canciones = [
  {
    "Número": 1,
    "Título": "La Gata Bajo la Lluvia",
    "Artista": "Rocío Dúrcal",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/7aOFPde65u12EJmh1dr7uL"
  },
  {
    "Número": 2,
    "Título": "Me Olvidé De Vivir",
    "Artista": "Julio Iglesias",
    "Año": 1978,
    "Enlace": "https://open.spotify.com/intl-es/track/0XPt3eOkEIzhDCyFhfRaUh"
  },
  {
    "Número": 3,
    "Título": "Rufino",
    "Artista": "Luz Casal",
    "Año": 1985,
    "Enlace": "https://open.spotify.com/intl-es/track/1uaJUd68rBoPYNvafL8ymh"
  },
  {
    "Número": 4,
    "Título": "Corazón de neón",
    "Artista": "Orquesta Mondragon",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/5zAnoLd8d4ssifVCnSDrwG"
  },
  {
    "Número": 5,
    "Título": "Eres",
    "Artista": "Massiel",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/0CqSDMvzIOxdJRbCwwCIkM"
  },
  {
    "Número": 6,
    "Título": "Gloria",
    "Artista": "Umberto Tozzi",
    "Año": 1979,
    "Enlace": "https://open.spotify.com/intl-es/track/4wMGxH3cJ8oDr6lG3bBrGL"
  },
  {
    "Número": 7,
    "Título": "Tú",
    "Artista": "Umberto Tozzi",
    "Año": 1978,
    "Enlace": "https://open.spotify.com/intl-es/track/6Gbc24EJdvZgpY0b5pNxhA"
  },
  {
    "Número": 8,
    "Título": "¿Por qué te vas?",
    "Artista": "Janette",
    "Año": 1974,
    "Enlace": "https://open.spotify.com/intl-es/track/11rsK9GDZ9UdWsxtDqnMmN"
  },
  {
    "Número": 9,
    "Título": "Una calle de París",
    "Artista": "Duncan Dhu",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/1nLOdVT581H7SA0ttCZRF9"
  },
  {
    "Número": 10,
    "Título": "El calor del amor en un bar",
    "Artista": "Gabinete Caligari",
    "Año": 1986,
    "Enlace": "https://open.spotify.com/intl-es/track/0AFJOoRQFlo10Vm1p6BRjg"
  },
  {
    "Número": 11,
    "Título": "Embrujada",
    "Artista": "Tino Casal",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/6udZus2RwDVhD3zateRfFy"
  },
  {
    "Número": 12,
    "Título": "Eloise",
    "Artista": "Tino Casal",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/16k0xwujtU1eoSLEfofWQ8"
  },
  {
    "Número": 13,
    "Título": "Ni tú ni nadie",
    "Artista": "Alaska y Dinarama",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/7LpS82vPDLgZAHWRtWBBRj"
  },
  {
    "Número": 14,
    "Título": "Aquí no hay playa",
    "Artista": "The Refrescos",
    "Año": 1989,
    "Enlace": "https://open.spotify.com/intl-es/track/4PRJD9T23GQKQYKhJQcGGY"
  },
  {
    "Número": 15,
    "Título": "Rock and Roll Star",
    "Artista": "Loquillo",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/2MPWdzsLs7owJCpNS1Eq8Y"
  },
  {
    "Número": 16,
    "Título": "Hormigón, mujeres y alcohol",
    "Artista": "Ramoncin",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/2kdcgSLw6FzxdL0gkhAT16"
  },
  {
    "Número": 17,
    "Título": "Yo no soy esa",
    "Artista": "Mari Trini",
    "Año": 1971,
    "Enlace": "https://open.spotify.com/intl-es/track/6mpJrtlX03lQd5UdsdjXOz"
  },
  {
    "Número": 18,
    "Título": "La chica de ayer",
    "Artista": "Nacho Pop",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/1aZc9YBrZpKCE1YqSMV5Vg"
  },
  {
    "Número": 19,
    "Título": "Cien Gaviotas",
    "Artista": "Duncan Dhu",
    "Año": 1986,
    "Enlace": "https://open.spotify.com/intl-es/track/5i07tC6hV5AtYTr0tsP0Uy"
  },
  {
    "Número": 20,
    "Título": "Solo Le Pido a Dios - En Directo",
    "Artista": "Antonio Flores",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/38EKqFChMuL8oGCj1YnBRa"
  },
  {
    "Número": 21,
    "Título": "Un Beso Y Una Flor",
    "Artista": "Nino Bravo",
    "Año": 1972,
    "Enlace": "https://open.spotify.com/intl-es/track/5IU4JO2cpa0wPK8oQWFfCr"
  },
  {
    "Número": 22,
    "Título": "Acordes",
    "Artista": "Pecos",
    "Año": 1979,
    "Enlace": "https://open.spotify.com/intl-es/track/3MLnZadhoFpkGWibabX98d"
  },
  {
    "Número": 23,
    "Título": "Gavilán o Paloma",
    "Artista": "Pablo Abraira",
    "Año": 1977,
    "Enlace": "https://open.spotify.com/intl-es/track/43wyXbukLasmkQGkquqMHs"
  },
  {
    "Número": 24,
    "Título": "Si Tu Fueras Mi Mujer",
    "Artista": "Lorenzo Santamaría",
    "Año": 1975,
    "Enlace": "https://open.spotify.com/intl-es/track/1ZxWjK1wqkHEwYBt9ayplF"
  },
  {
    "Número": 25,
    "Título": "Mamma Maria",
    "Artista": "Ricchi E Poveri",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/7tVEeTbzEJkHP0EqUu6rmf"
  },
  {
    "Número": 26,
    "Título": "L'italiano",
    "Artista": "Toto Cutugno",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/2S7RApTsKT0CtYojYq2cKz"
  },
  {
    "Número": 27,
    "Título": "Yo no Te Pido la Luna",
    "Artista": "Fiordaliso",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/5Wrs4ChK5nx9g4fTGNpDIf"
  },
  {
    "Número": 28,
    "Título": "Pedro Navaja",
    "Artista": "Rubén Blades",
    "Año": 1978,
    "Enlace": "https://open.spotify.com/intl-es/track/09PGyODYYlVsL49N7TR914"
  },
  {
    "Número": 29,
    "Título": "Cuando Brille el Sol",
    "Artista": "La Guardia",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0lFMpSl7fU4FU1ZfVWY7He"
  },
  {
    "Número": 30,
    "Título": "Vivir Así Es Morir de Amor",
    "Artista": "Camilo Sesto",
    "Año": 1978,
    "Enlace": "https://open.spotify.com/intl-es/track/3yzHIAzk3zVE1WgspS8W21"
  },
  {
    "Número": 31,
    "Título": "A quién le importa",
    "Artista": "Alaska Y Dinarama",
    "Año": 1986,
    "Enlace": "https://open.spotify.com/intl-es/track/7Eb5AYiiGWItBNddlmxvnh"
  },
  {
    "Número": 32,
    "Título": "Mi gran noche",
    "Artista": "Raphael",
    "Año": 1967,
    "Enlace": "https://open.spotify.com/intl-es/track/6Tnnk7MAnZiDx67DJN2hnx"
  },
  {
    "Número": 33,
    "Título": "¡Chas! Y aparezco a tu lado",
    "Artista": "Alex Y Christina",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/1eRgClFGphd2MgpyIBsbfS"
  },
  {
    "Número": 34,
    "Título": "Eva Maria",
    "Artista": "Formula V",
    "Año": 1973,
    "Enlace": "https://open.spotify.com/intl-es/track/5fc3XWSpJo6jTlbjnhGOJQ"
  },
  {
    "Número": 35,
    "Título": "Enamorado de la moda juvenil",
    "Artista": "Radio Futura",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/6dC0U0ZJrmSw05sdnjDpGJ"
  },
  {
    "Número": 36,
    "Título": "Viaje con nosotros",
    "Artista": "Orquesta Mondragon",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/4YYd1oPidpG7rVu4OLjPG7"
  },
  {
    "Número": 37,
    "Título": "Hoy No Me Puedo Levantar",
    "Artista": "Mecano",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/4oHDiaCilM1xWIr55LjxO0"
  },
  {
    "Número": 38,
    "Título": "Don Diablo",
    "Artista": "Miguel Bosé",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/2yNkRWz9x7x3halzGPnYqn"
  },
  {
    "Número": 39,
    "Título": "Yo no te pido la luna (Non voglio mica la luna)",
    "Artista": "Daniela Romo",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/09uE7kHv2ESkvtInKugpGM"
  },
  {
    "Número": 40,
    "Título": "Me Colé en una Fiesta",
    "Artista": "Mecano",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/7zteNrLJJwjGa8e2IodVOp"
  },
  {
    "Número": 41,
    "Título": "Bailando",
    "Artista": "Alaska Y Los Pegamoides",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/0OteyYh6inrfcil1XGwC3r"
  },
  {
    "Número": 42,
    "Título": "Te Estoy Amando Locamente",
    "Artista": "Las Grecas",
    "Año": 1974,
    "Enlace": "https://open.spotify.com/intl-es/track/5QfmCmdL4qnzqMz5Z0gvzV"
  },
  {
    "Número": 43,
    "Título": "Cadillac solitario - Live",
    "Artista": "Loquillo Y Los Trogloditas",
    "Año": 1989,
    "Enlace": "https://open.spotify.com/intl-es/track/3GHgLIY5drnms1MPKcMlmi"
  },
  {
    "Número": 44,
    "Título": "Adiós papá",
    "Artista": "Los Ronaldos",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/29OKK8URiORBpRsimvzsmm"
  },
  {
    "Número": 45,
    "Título": "Bailaré sobre tu tumba",
    "Artista": "Siniestro Total",
    "Año": 1985,
    "Enlace": "https://open.spotify.com/intl-es/track/36PL1fiYUnX7pJQRY1qwVw"
  },
  {
    "Número": 46,
    "Título": "El Pistolero",
    "Artista": "Pistones",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/5d0M8iFSNn4fonHyRT8yeq"
  },
  {
    "Número": 47,
    "Título": "El Limite",
    "Artista": "La Frontera",
    "Año": 1989,
    "Enlace": "https://open.spotify.com/intl-es/track/0NFcUhw2uKzX0zqH81tWOu"
  },
  {
    "Número": 48,
    "Título": "Maneras de Vivir (Single Estudio)",
    "Artista": "Leño",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/7kCiAaismDVaCjpyGF3YJB"
  },
  {
    "Número": 49,
    "Título": "Veneno en la Piel",
    "Artista": "Radio Futura",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/3RDMd9JiKdVik8zjGhZ0wJ"
  },
  {
    "Número": 50,
    "Título": "No Mires a los Ojos de la Gente",
    "Artista": "Golpes Bajos",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/1KH2PcBCAaHRL6F5ZZgY1S"
  },
  {
    "Número": 51,
    "Título": "Quiero tener tu presencia",
    "Artista": "Seguridad Social",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/3f2k0XTc2ZXG17jEMDu8pp"
  },
  {
    "Número": 52,
    "Título": "Un rayo de sol (Fernando) - 2015 Remastered Version",
    "Artista": "Los Diablos",
    "Año": 1970,
    "Enlace": "https://open.spotify.com/intl-es/track/5juAYZUZPMEWJlzwoa9nOO"
  },
  {
    "Número": 53,
    "Título": "¿Y cómo es él?",
    "Artista": "José Luis Perales",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/0UUJju7jtTViPCdauXKVZ1"
  },
  {
    "Número": 54,
    "Título": "Digan lo que digan",
    "Artista": "Raphael",
    "Año": 1967,
    "Enlace": "https://open.spotify.com/intl-es/track/3JclUL96MU6SWZCPb1wzih"
  },
  {
    "Número": 55,
    "Título": "Noelia",
    "Artista": "Nino Bravo",
    "Año": 1975,
    "Enlace": "https://open.spotify.com/intl-es/track/2H6pXO5yKat03sbr1ERzZv"
  },
  {
    "Número": 56,
    "Título": "Sabor de amor",
    "Artista": "Danza Invisible",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/2UC0OxMpQeSYft4pRswyEX"
  },
  {
    "Número": 57,
    "Título": "Solo Se Vive una Vez",
    "Artista": "Azucar Moreno",
    "Año": 1989,
    "Enlace": "https://open.spotify.com/intl-es/track/0ATzislS5SvAp69hjHczej"
  },
  {
    "Número": 58,
    "Título": "Follow the Leader \"Sigue al lider",
    "Artista": "Sol Habana",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/6G5GbFe5jWUWqZ3WmXiew5"
  },
  {
    "Número": 59,
    "Título": "Y Nos Dieron las Diez",
    "Artista": "Joaquín Sabina",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/1eCie6lwjb4crxeAvkRaSi"
  },
  {
    "Número": 60,
    "Título": "Amante Bandido",
    "Artista": "Miguel Bosé",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/1hj6nYHeGclSY0VNTHMi27"
  },
  {
    "Número": 61,
    "Título": "Salta!!!",
    "Artista": "Tequila",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/0M2tanh26PWePnaGVV3h3y"
  },
  {
    "Número": 62,
    "Título": "19 Dias y 500 Noches",
    "Artista": "Joaquín Sabina",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/4Kii4OhkRIezu0KjOiFq0G"
  },
  {
    "Número": 63,
    "Título": "Mediterraneo",
    "Artista": "Los Rebeldes",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/6QBLmxP1tU6lw1dhKQulau"
  },
  {
    "Número": 64,
    "Título": "Siete Vidas",
    "Artista": "Antonio Flores",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/1gh0aMZmO6o30LS12lEJWQ"
  },
  {
    "Número": 65,
    "Título": "Penelope",
    "Artista": "Joan Manuel Serrat",
    "Año": 1969,
    "Enlace": "https://open.spotify.com/intl-es/track/5sfy5t9U4Uhp6jPKvq2muQ"
  },
  {
    "Número": 66,
    "Título": "Resistiré",
    "Artista": "Duo Dinamico",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2oI6d7XcMz1AMTQhDopV5J"
  },
  {
    "Número": 67,
    "Título": "El 28",
    "Artista": "La Oreja de Van Gogh",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/4aNYsOVFqueCQrDeluqp0H"
  },
  {
    "Número": 68,
    "Título": "Macarena",
    "Artista": "Los Del Rio",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/4Y6cDd4EPHcEbiUKdyvNwM"
  },
  {
    "Número": 69,
    "Título": "La Carretera",
    "Artista": "Julio Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/7pjtYZml30McGVL6Lk5bMh"
  },
  {
    "Número": 70,
    "Título": "Cannabis",
    "Artista": "Ska-P",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0DjSa6czo5ywsf6iCtZW5A"
  },
  {
    "Número": 71,
    "Título": "El Gato Lopez",
    "Artista": "Ska-P",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/6oytv9amMEx3pxSw9UmEtv"
  },
  {
    "Número": 72,
    "Título": "Fiesta",
    "Artista": "Joan Manuel Serrat",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/3uczGVEmktxNt15VoBALL6"
  },
  {
    "Número": 73,
    "Título": "Carbón y Ramas Secas",
    "Artista": "Manolo Garcia",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/0fmASfcJJ6N8hTvGTa8Hhi"
  },
  {
    "Número": 74,
    "Título": "Bamboléo",
    "Artista": "Gipsy Kings",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/3qzVJh6INW1CzSDVR9MRgS"
  },
  {
    "Número": 75,
    "Título": "Bajo la Luz de la Luna",
    "Artista": "Los Rebeldes",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2hfv8QRES8BwT49kO0Hhmd"
  },
  {
    "Número": 76,
    "Título": "No Controles",
    "Artista": "Ole Ole",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/1suKCYjsR9rZKnFYM5uK1k"
  },
  {
    "Número": 77,
    "Título": "La Quiero A Morir",
    "Artista": "Manzanita",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/0loxOLrtuQBxkqdoTKTIj2"
  },
  {
    "Número": 78,
    "Título": "El Hombre del Piano",
    "Artista": "Ana Belén",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/61ccRl3FBtLs3U5HuBtP6e"
  },
  {
    "Número": 79,
    "Título": "Sorprendente",
    "Artista": "Leño",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/6Xueg8DmwhkU4xf0Q3xlWN"
  },
  {
    "Número": 80,
    "Título": "Olvídame y Pega la Vuelta",
    "Artista": "Pimpinela",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/4FdwRmlzP5KGM7OewGBYiu"
  },
  {
    "Número": 81,
    "Título": "Baron Rojo",
    "Artista": "Barón Rojo",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/3ja1qnawwz4yqGETFEVLL0"
  },
  {
    "Número": 82,
    "Título": "El Toro Guapo",
    "Artista": "El Fary",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/6D3YqQ9dUA9LBOLw4CEUj1"
  },
  {
    "Número": 83,
    "Título": "Amor Eterno",
    "Artista": "Rocío Dúrcal",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/2TC4v9YiuQYk3Tk8RH7fV4"
  },
  {
    "Número": 84,
    "Título": "Un Ramito de Violetas",
    "Artista": "Manzanita",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/02PROe7elhI6Cyu6KJONhX"
  },
  {
    "Número": 85,
    "Título": "Trátame Suavemente - Remasterizado 2007",
    "Artista": "Soda Stereo",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/65DBZofI0b79kfHTcWWDuU"
  },
  {
    "Número": 86,
    "Título": "Como una Ola",
    "Artista": "Rocío Jurado",
    "Año": 1981,
    "Enlace": "https://open.spotify.com/intl-es/track/1gNXYvLc14OmqK6gSJKLUM"
  },
  {
    "Número": 87,
    "Título": "Señora",
    "Artista": "Rocío Jurado",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/6XSYNsvSOtDzmH3lFUJnQl"
  },
  {
    "Número": 88,
    "Título": "Rock And Roll en la Plaza del Pueblo",
    "Artista": "Tequila",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/5fCYRuYxc1ox7yWKcKD6tf"
  },
  {
    "Número": 89,
    "Título": "Que Difícil Es Hacer El Amor En Un Simca 1000",
    "Artista": "Los Inhumanos",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/5sh52OSkS9OoEBJSI2CVxr"
  },
  {
    "Número": 90,
    "Título": "Escuela de Calor",
    "Artista": "Radio Futura",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/7J0niAY0FLzGiCVJUREl88"
  },
  {
    "Número": 91,
    "Título": "Asi Fue",
    "Artista": "Isabel Pantoja",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/419FFiitGchOUaIMEY7Dqi"
  },
  {
    "Número": 92,
    "Título": "Agradecido",
    "Artista": "Rosendo",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/7F5AYZAPcNE9rIpCCHFEeh"
  },
  {
    "Número": 93,
    "Título": "Volare (Nel Blu di Pinto di Blu)",
    "Artista": "Gipsy Kings",
    "Año": 1986,
    "Enlace": "https://open.spotify.com/intl-es/track/5QrHfu4q83HjcFcRi2WlS3"
  },
  {
    "Número": 94,
    "Título": "Loco por Incordiar",
    "Artista": "Rosendo",
    "Año": 1989,
    "Enlace": "https://open.spotify.com/intl-es/track/6VuRx5yyACleleSGXzkrqG"
  },
  {
    "Número": 95,
    "Título": "Como Yo Te Amo - Remasterizado",
    "Artista": "Rocío Jurado",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/3pBmaSZCoLF0drPRuf85O5"
  },
  {
    "Número": 96,
    "Título": "Hoy Quiero Confesarme",
    "Artista": "Isabel Pantoja",
    "Año": 1985,
    "Enlace": "https://open.spotify.com/intl-es/track/5wI6PpGIGw25jewhrbnxWG"
  },
  {
    "Número": 97,
    "Título": "El Mundo Tras el Cristal",
    "Artista": "La Guardia",
    "Año": 1985,
    "Enlace": "https://open.spotify.com/intl-es/track/1VHM7HjNxtZkApy2EabI4e"
  },
  {
    "Número": 98,
    "Título": "La Cosa Mas Bella",
    "Artista": "Eros Ramazzotti",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/1EZypwk0xcj64ZLAglhLs2"
  },
  {
    "Número": 99,
    "Título": "Por Ella",
    "Artista": "José Manuel Soto",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/3OLADK5y0rOTjyuQ6cPn7t"
  },
  {
    "Número": 100,
    "Título": "Lija Y Terciopelo",
    "Artista": "Marea",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/58psRexxWVZNbcUK5BU1d4"
  },
  {
    "Número": 101,
    "Título": "Ese Hombre",
    "Artista": "Rocío Jurado",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/47WTpJKUjZ4hxNECGMAVhS"
  },
  {
    "Número": 102,
    "Título": "Libertad Sin Ira",
    "Artista": "Jarcha",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/63ZPDjygXPMtqmpcoJUVk5"
  },
  {
    "Número": 103,
    "Título": "All My Loving",
    "Artista": "Los Manolos",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/2x3MxkdvKiWvLor7yNeLWB"
  },
  {
    "Número": 104,
    "Título": "Escándalo",
    "Artista": "Raphael",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/3xbymP6jIcdN0O2PB420bz"
  },
  {
    "Número": 105,
    "Título": "Cuéntame al Oido",
    "Artista": "La Oreja de Van Gogh",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/75QcWSFMIh8wkbGHdVQoju"
  },
  {
    "Número": 106,
    "Título": "A Mi Manera (Comme D'Habitude)",
    "Artista": "Gipsy Kings",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2RPNwpCcxVBhwhNUrJIiyG"
  },
  {
    "Número": 107,
    "Título": "Garlochi",
    "Artista": "Isabel Pantoja",
    "Año": 1982,
    "Enlace": "https://open.spotify.com/intl-es/track/6rVZRbWjALEyy1i6noyQ6j"
  },
  {
    "Número": 108,
    "Título": "Alba",
    "Artista": "Antonio Flores",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/6uojMoKuVkIVEeqH4JCBAr"
  },
  {
    "Número": 109,
    "Título": "El Vals del Obrero",
    "Artista": "Ska-P",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/4UjqoyfmarLo3Ub3LE19eC"
  },
  {
    "Número": 110,
    "Título": "Pantera en Libertad",
    "Artista": "Monica Naranjo",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/6BEhC3j62wIpe9m7zPL4Tx"
  },
  {
    "Número": 111,
    "Título": "Vino Tinto",
    "Artista": "Estopa",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/15m2Op4d1ZtX0ScPaDNKcd"
  },
  {
    "Número": 112,
    "Título": "Cacho a Cacho",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/6VVBXRsXAuN5UvqKNw7j0l"
  },
  {
    "Número": 113,
    "Título": "Me Gustas Mucho",
    "Artista": "Rocío Dúrcal",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/2i7SlECYIAsT72FpLUU1Uj"
  },
  {
    "Número": 114,
    "Título": "Amor de Hombre (De \"La Leyenda del Beso\")",
    "Artista": "Mocedades",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/2XOuNjvWYgPmdtTwjQTd23"
  },
  {
    "Número": 115,
    "Título": "Solo Se Vive una Vez",
    "Artista": "Monica Naranjo",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/2e7mL0M7mvjYVANfWPUjCH"
  },
  {
    "Número": 116,
    "Título": "La Puerta de Alcalá",
    "Artista": "Ana Belén",
    "Año": 1986,
    "Enlace": "https://open.spotify.com/intl-es/track/29opVIw8I1BOZntEn3Un2I"
  },
  {
    "Número": 117,
    "Título": "Tocar Madera",
    "Artista": "Manolo Tena",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/3Cdlb91oUTuN2hOVNdhfQT"
  },
  {
    "Número": 118,
    "Título": "Las Campanas del Amor",
    "Artista": "Monica Naranjo",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/6BOdOiwlrChSQkyO9CQnYQ"
  },
  {
    "Número": 119,
    "Título": "Te Estoy Queriendo Tanto",
    "Artista": "Siempre Asi",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/1Nr7Sj9d0dVZ6xJdvoS5yE"
  },
  {
    "Número": 120,
    "Título": "El del Medio de los Chichos",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/4UMCpYrmgZv9CsyLvrws4F"
  },
  {
    "Número": 121,
    "Título": "Sarà perché ti amo",
    "Artista": "Ricchi E Poveri",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/7037bX3jdaUWUAXL12CHGy"
  },
  {
    "Número": 122,
    "Título": "Corazón Contento",
    "Artista": "Marisol",
    "Año": 1968,
    "Enlace": "https://open.spotify.com/intl-es/track/5r5hCjNjWdmQTHtHBZ7ghy"
  },
  {
    "Número": 123,
    "Título": "Estando Contigo",
    "Artista": "Marisol",
    "Año": 1961,
    "Enlace": "https://open.spotify.com/intl-es/track/1daUAcGgT52l7KevC8gw3p"
  },
  {
    "Número": 124,
    "Título": "Cerrado por Derribo",
    "Artista": "Joaquín Sabina",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2LmQV8kR5L6ooO1hTokgwa"
  },
  {
    "Número": 125,
    "Título": "La Ultima Carta",
    "Artista": "Los Cucas",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0snvfum1KpU3X8DdAvV9bo"
  },
  {
    "Número": 126,
    "Título": "Marea",
    "Artista": "Marea",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/4TUYhTFCrUoJCONLmcZ3Zg"
  },
  {
    "Número": 127,
    "Título": "Cumpleaños Total",
    "Artista": "Los Planetas",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/5QJhfu8ajjVuJetRxw1B4K"
  },
  {
    "Número": 128,
    "Título": "Aprendiz",
    "Artista": "Malú",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/6IDgYT1p1n0M5kQVjLQozC"
  },
  {
    "Número": 129,
    "Título": "Bandido",
    "Artista": "Azucar Moreno",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/2rHhKu1hW8uqyr7LSrRn8E"
  },
  {
    "Número": 130,
    "Título": "Sabor, Sabor",
    "Artista": "Rosario",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/4zMJYmYSTZBNn1YdZVznSS"
  },
  {
    "Número": 131,
    "Título": "Punto De Partida (with Monica Naranjo)",
    "Artista": "Rocío Jurado",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/75cWbqIqhfEfX8uOHlgWZV"
  },
  {
    "Número": 132,
    "Título": "Corazón de Tiza",
    "Artista": "Radio Futura",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/1qKxd0wZWIBR2D3dqFJbVD"
  },
  {
    "Número": 133,
    "Título": "Camino de la cama",
    "Artista": "Siniestro Total",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/4V9rNbT5b0TTZrGAEgteDi"
  },
  {
    "Número": 134,
    "Título": "Los Chicos Con las Chicas",
    "Artista": "Los Bravos",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/1k4kMMTPN5Yc0KdMxtMTuj"
  },
  {
    "Número": 135,
    "Título": "Salir",
    "Artista": "Extremoduro",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4z2EeFUp5Lhai9qhHtA6IF"
  },
  {
    "Número": 136,
    "Título": "20 de abril",
    "Artista": "Celtas Cortos",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/7ifOnwJC0oH7cfbJQbUye1"
  },
  {
    "Número": 137,
    "Título": "Llamando a la tierra - Serenade From the Stars",
    "Artista": "M-Clan",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/7M65iLprqQ9UJNqer4g6AM"
  },
  {
    "Número": 138,
    "Título": "La flaca",
    "Artista": "Jarabe De Palo",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/1MrZ8hGkUWMmT816wPaMgE"
  },
  {
    "Número": 139,
    "Título": "A fuego lento",
    "Artista": "Rosana",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/7nK3q1GgJDxlWfCwtiLV5a"
  },
  {
    "Número": 140,
    "Título": "¡Que Bonito!",
    "Artista": "Rosario",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/1MO5KuLnSaY1dlkWGDjHkT"
  },
  {
    "Número": 141,
    "Título": "Noches de bohemia - Radio Edit",
    "Artista": "Navajita Platea",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/1JpZMDDAkfhnrO6nXIQZ2g"
  },
  {
    "Número": 142,
    "Título": "Flaca",
    "Artista": "Andrés Calamaro",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/1p7m9H4H8s0Y7SgRm7j3ED"
  },
  {
    "Número": 143,
    "Título": "La Lola",
    "Artista": "Café Quijano",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/5hyq5k3Do9gW3HGvDg5ZEJ"
  },
  {
    "Número": 144,
    "Título": "El sitio de mi recreo",
    "Artista": "Antonio Vega",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2tkMVjFwDzUCG3ulmz3fCb"
  },
  {
    "Número": 145,
    "Título": "Pajaros de Barro",
    "Artista": "Manolo Garcia",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/4B6ko7lt1sUtyFzBDF4yfK"
  },
  {
    "Número": 146,
    "Título": "Como un burro amarrado en la puerta del baile",
    "Artista": "El Último De La Fila",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/0IUFjvwlh18TWiTi6kO5pP"
  },
  {
    "Número": 147,
    "Título": "Por verte sonreír",
    "Artista": "La Fuga",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/6tGUkobti5ztrb9aQ0UDEx"
  },
  {
    "Número": 148,
    "Título": "A San Fernando un Ratito a Pie y Otro Caminando",
    "Artista": "Manolo Garcia",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/740Rh302Wm6uHRsYTa4KDQ"
  },
  {
    "Número": 149,
    "Título": "Grita",
    "Artista": "Jarabe De Palo",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/0wmYFlVkmGVUtfcY1r0SrP"
  },
  {
    "Número": 150,
    "Título": "Estoy Aquí",
    "Artista": "Shakira",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/4M1lEbqPzlEw1JYWB6aE7K"
  },
  {
    "Número": 151,
    "Título": "Entre dos tierras",
    "Artista": "Heroes Del Silencio",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/7BYqVvoXpQFhs4jJ0qqNZt"
  },
  {
    "Número": 152,
    "Título": "Vivo per lei",
    "Artista": "Andrea Bocelli",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/6cPLCU7hKjgjvLWzCevl7R"
  },
  {
    "Número": 153,
    "Título": "So payaso",
    "Artista": "Extremoduro",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/5HSpMRUC4m3L3q48to2Kmu"
  },
  {
    "Número": 154,
    "Título": "Rojitas las orejas",
    "Artista": "Fito y Fitipaldis",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/42R5irny7qThOYUThAL7VW"
  },
  {
    "Número": 155,
    "Título": "Mar antiguo",
    "Artista": "El Último De La Fila",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/3tduKvstqxOddo4CCq4FK1"
  },
  {
    "Número": 156,
    "Título": "Al Amanecer",
    "Artista": "Los Fresones Rebeldes",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/7qhuaYIafvH285FtQT71oQ"
  },
  {
    "Número": 157,
    "Título": "La senda del tiempo",
    "Artista": "Celtas Cortos",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/6dMKB6nyxcg8hllDzPCvRc"
  },
  {
    "Número": 158,
    "Título": "Promesas que no valen nada",
    "Artista": "Los Piratas",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/37f6dBsGwi5V9OOXI1KYe7"
  },
  {
    "Número": 159,
    "Título": "Serenade",
    "Artista": "Dover",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/4tzi4VV1vCTZsT4SEKQIKJ"
  },
  {
    "Número": 160,
    "Título": "El roce de tu cuerpo",
    "Artista": "Platero Y Tu",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/3EPd9riN2R8Zjl6GkrxxGl"
  },
  {
    "Número": 161,
    "Título": "Cosas de la Edad",
    "Artista": "Modestia Aparte",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/0wkQHjULGZeZC15hOl9jl4"
  },
  {
    "Número": 162,
    "Título": "Tu Calorro",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0DXI6c9tNWsI4tvUftkQN8"
  },
  {
    "Número": 163,
    "Título": "Te echaré de menos (feat. Sole Gimenez)",
    "Artista": "Los Piratas",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/2UNsLrBr6NXkIDtfMc4Vbw"
  },
  {
    "Número": 164,
    "Título": "Chiquilla",
    "Artista": "Seguridad Social",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4eJikwHYHJ3yMg1tvS1Mom"
  },
  {
    "Número": 165,
    "Título": "Quedate a dormir",
    "Artista": "M-Clan",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0UQitarNPDgB7ObJCj47kn"
  },
  {
    "Número": 166,
    "Título": "Como Te Mueves",
    "Artista": "Modestia Aparte",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/3eSxyGVZawSoh1JUEEoVDD"
  },
  {
    "Número": 167,
    "Título": "Por la Raja de Tu Falda",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/5OaqffbeQyVVqtnA71Ci7K"
  },
  {
    "Número": 168,
    "Título": "Dolores se llamaba Lola",
    "Artista": "Los Suaves",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/5kQb5n1sMy5CmYTSoB5p6M"
  },
  {
    "Número": 169,
    "Título": "Eldorado",
    "Artista": "Revolver",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/5z4bBpoquaB0xHvXZH9L2w"
  },
  {
    "Número": 170,
    "Título": "Papá Cuéntame Otra Vez",
    "Artista": "Ismael Serrano",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/5lg2cApHn9zCVkJcwou0iN"
  },
  {
    "Número": 171,
    "Título": "Una Rosa Es una Rosa",
    "Artista": "Mecano",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4t4JJ0RG2KWhrTVdSrp7O9"
  },
  {
    "Número": 172,
    "Título": "En Blanco Y Negro",
    "Artista": "Barricada",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0FJBWXOa9tYcJCxv1YxP9H"
  },
  {
    "Número": 173,
    "Título": "Tras la barra",
    "Artista": "Platero Y Tu",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/0fN93Sc6gJCkHbh9bqlLX7"
  },
  {
    "Número": 174,
    "Título": "Depende",
    "Artista": "Jarabe De Palo",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/6aaPUBUFw9KEW1p1inVQv9"
  },
  {
    "Número": 175,
    "Título": "Lagrimas De Amor",
    "Artista": "Camela",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/7wjQF9XTCrjvQZLeZBGMWs"
  },
  {
    "Número": 176,
    "Título": "Voy en un coche",
    "Artista": "Christina y Los Subterraneos",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/4SnU0W6LY2CD4iH5vb4kgQ"
  },
  {
    "Número": 177,
    "Título": "Ya No Quiero Tu Querer",
    "Artista": "José El Francés",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/4ZWU1yATGjEQQz2FCnmX3b"
  },
  {
    "Número": 178,
    "Título": "Clavado en Un Bar",
    "Artista": "Maná",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/78DVpEWwmJFC25KGz8fJuE"
  },
  {
    "Número": 179,
    "Título": "Si es tan solo amor",
    "Artista": "Revolver",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/02MahX3ZEDqQI8akhisqOc"
  },
  {
    "Número": 180,
    "Título": "Hay poco rock'n'roll",
    "Artista": "Platero Y Tu",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/36j2mLDy4nPQRnvst4moR4"
  },
  {
    "Número": 181,
    "Título": "Mucho mejor (feat. Coque Malla)",
    "Artista": "Los Rodriguez",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/06xLo8Oa53wmBMdWcIsqPL"
  },
  {
    "Número": 182,
    "Título": "Ciega, Sordomuda",
    "Artista": "Shakira",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/7jxHeJLVpnP7S08JFF4GBi"
  },
  {
    "Número": 183,
    "Título": "Amigos para Siempre",
    "Artista": "Los Manolos",
    "Año": 1992,
    "Enlace": "https://open.spotify.com/intl-es/track/6PfQB3xEbIlky1dXOb3Yyh"
  },
  {
    "Número": 184,
    "Título": "El ritmo del mar",
    "Artista": "Celtas Cortos",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4wzMQBLGXFoZkbEwNP2QJu"
  },
  {
    "Número": 185,
    "Título": "Sin documentos",
    "Artista": "Los Rodriguez",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/6eOT73H5zfEwTCe1Y0FDCc"
  },
  {
    "Número": 186,
    "Título": "Kalikeno - Rumba",
    "Artista": "Ketama",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/4LxFbjtxUtV1h6DNIqRBIK"
  },
  {
    "Número": 187,
    "Título": "No Puedo Vivir Sin Ti",
    "Artista": "El Canto Del Loco",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/3K8BeABgLXZ3JHhdM3rZBx"
  },
  {
    "Número": 188,
    "Título": "El Secreto de las Tortugas",
    "Artista": "Maldita Nerea",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/1sMgCr1RH0HfAazVZt9xmZ"
  },
  {
    "Número": 189,
    "Título": "Zapatillas",
    "Artista": "El Canto Del Loco",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/42VgiRyg0YjtRVLiPFNxPJ"
  },
  {
    "Número": 190,
    "Título": "Como Camarón",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/1VB4sadHjFcFklHcZuoROi"
  },
  {
    "Número": 191,
    "Título": "Princesas",
    "Artista": "Pereza",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/3hlWUNjAlbZ6nOjAbrivBv"
  },
  {
    "Número": 192,
    "Título": "Rosas",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/4waqcUQWdj0yH26STWl2Rq"
  },
  {
    "Número": 193,
    "Título": "Volvera",
    "Artista": "El Canto Del Loco",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/4QBrx05HrLnohYaS1cPGHO"
  },
  {
    "Número": 194,
    "Título": "Con La Luna Llena",
    "Artista": "Melendi",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/0XJAzR3E4lq5aNGGDh8HUT"
  },
  {
    "Número": 195,
    "Título": "Son de Amores",
    "Artista": "Andy & Lucas",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/7cC1xYRITIkGKAGCSyqCAv"
  },
  {
    "Número": 196,
    "Título": "Me Muero",
    "Artista": "La Quinta Estacion",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/3ri9fLG89OdSpjxheYxU7S"
  },
  {
    "Número": 197,
    "Título": "Se Fue",
    "Artista": "Rauw Alejandro",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/1uFW6czrHk5PsK3s6gOI7C"
  },
  {
    "Número": 198,
    "Título": "SI ELLA SUPIERA",
    "Artista": "India Martinez",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/0quM3iWAOKw9OGIMBsppSC"
  },
  {
    "Número": 199,
    "Título": "El Polvo de los Días Raros",
    "Artista": "Leiva",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/6z98CyBiVapgBCecH98y4d"
  },
  {
    "Número": 200,
    "Título": "Puede Ser (with Amaia Montero)",
    "Artista": "El Canto Del Loco",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/1TtwCkFbGv89XmuUNmoINt"
  },
  {
    "Número": 201,
    "Título": "Carpe Diem",
    "Artista": "Dani Martín",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/4l7qXzZrZnr2RUgSVSKtnD"
  },
  {
    "Número": 202,
    "Título": "Hoy no me siento bien",
    "Artista": "Alejandro Sanz",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/5xKUXB7fsIEpDYc6mBfSwT"
  },
  {
    "Número": 203,
    "Título": "La Salvación",
    "Artista": "Arde Bogotá",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/6XY4Zaf0AoE5movPc2FfaZ"
  },
  {
    "Número": 204,
    "Título": "Dolce Vita",
    "Artista": "Amaral",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/5zyxGztIuOp27VhkVf1hMZ"
  },
  {
    "Número": 205,
    "Título": "Pop",
    "Artista": "Vicco",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/51VLqRIxEjfT6guWSxEElY"
  },
  {
    "Número": 206,
    "Título": "PLAN DE HOY [QUIERO VERTE]",
    "Artista": "Abraham Mateo",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/7bM39j41perIVseatvugg3"
  },
  {
    "Número": 207,
    "Título": "HOY TENGO GANAS DE TI",
    "Artista": "Abraham Mateo",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/27AycGPhBPGCc6YnTZTaSh"
  },
  {
    "Número": 208,
    "Título": "Viento de Cara",
    "Artista": "Supersubmarina",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/5sKdpvvNyRJifUmYLNiYys"
  },
  {
    "Número": 209,
    "Título": "La Razón",
    "Artista": "Ana Mena",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/3CmSv76KDKsvtiyrdgHZHH"
  },
  {
    "Número": 210,
    "Título": "Me Acuerdo De Ti",
    "Artista": "Abraham Mateo",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/4bPxqFfAt9EaFqdIDTxczw"
  },
  {
    "Número": 211,
    "Título": "Futuros amantes",
    "Artista": "Guitarricadelafuente",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/6o8AfVju660AZb5XL5rzzP"
  },
  {
    "Número": 212,
    "Título": "Bailarina",
    "Artista": "Abraham Mateo",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/3MTzCXM4r6yTOLhiuIaRfh"
  },
  {
    "Número": 213,
    "Título": "Tormenta Perfecta",
    "Artista": "Amaia Montero",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/1RG4xMoRobbuqGYHaF4nRp"
  },
  {
    "Número": 214,
    "Título": "EL PANTALON - RUMBAS",
    "Artista": "Omar Montes",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/7CsOowK8aWlxgjuZLW7pXA"
  },
  {
    "Número": 215,
    "Título": "Clavaito",
    "Artista": "Chanel",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/26V1bLUk0SBYkLEwl4caPR"
  },
  {
    "Número": 216,
    "Título": "Madrid City",
    "Artista": "Ana Mena",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/6KHxe3Yj8W8oq3zviUvJRe"
  },
  {
    "Número": 217,
    "Título": "Besos",
    "Artista": "El Canto Del Loco",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/7MKO7rUZzjw8p87zdZDgqa"
  },
  {
    "Número": 218,
    "Título": "Nunca Volverás",
    "Artista": "Vicco",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/1b9sYsa4aFiBv7mqOKvwsM"
  },
  {
    "Número": 219,
    "Título": "ENGATUSAO =^.^=",
    "Artista": "Vicco",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/00MEN35cUoB4rp00iZuiFV"
  },
  {
    "Número": 220,
    "Título": "BABIECA!",
    "Artista": "Guitarricadelafuente",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/45VlOHY7pEd6IC3plYeKZ3"
  },
  {
    "Número": 221,
    "Título": "Palmeras en el jardín",
    "Artista": "Alejandro Sanz",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/5MMEQLCzl9GsknyH42xFOX"
  },
  {
    "Número": 222,
    "Título": "El Último Día de Nuestras Vidas",
    "Artista": "Dani Martín",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/6vYVTjrP8Nd6nsdjCrabM5"
  },
  {
    "Número": 223,
    "Título": "Comiendote a Besos",
    "Artista": "Rozalén",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/02FKjeU8CrA2ckppBa5RJg"
  },
  {
    "Número": 224,
    "Título": "Tienes Que Saber",
    "Artista": "Abraham Mateo",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/2Y9xXXMWqETUfonJjXP25k"
  },
  {
    "Número": 225,
    "Título": "LAS 12",
    "Artista": "Ana Mena",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/0EpdLuptraYGFZ6J7HNSLc"
  },
  {
    "Número": 226,
    "Título": "Falsos Recuerdos",
    "Artista": "Abraham Mateo",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/4snJ71Uz5KvX1CW0SaUiZY"
  },
  {
    "Número": 227,
    "Título": "Titiritar",
    "Artista": "Pol Granch",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/7cJDcvC6nSbkx4quEn7vTk"
  },
  {
    "Número": 228,
    "Título": "A carta cabal",
    "Artista": "Guitarricadelafuente",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/3asOJIkC0NT24zR2S20azY"
  },
  {
    "Número": 229,
    "Título": "LLYLM",
    "Artista": "ROSALÍA",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/2SiAcexM2p1yX6joESbehd"
  },
  {
    "Número": 230,
    "Título": "solo x ti",
    "Artista": "Pol Granch",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/1uUVwLyzKnU8ft18H3QDu9"
  },
  {
    "Número": 231,
    "Título": "No, No Vuelve",
    "Artista": "Dani Martín",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/0ALmQwK6LPYk8dkZozCGd9"
  },
  {
    "Número": 232,
    "Título": "La Culpa (feat. Canelita)",
    "Artista": "C. Tangana",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/60e6OnYOu0h7LLhYXgINma"
  },
  {
    "Número": 233,
    "Título": "La increíble historia entre tú y yo",
    "Artista": "Maldita Nerea",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/1MAbXU7OMsOSEH9RoGT5Rs"
  },
  {
    "Número": 234,
    "Título": "Gigante",
    "Artista": "Leiva",
    "Año": 2025,
    "Enlace": "https://open.spotify.com/intl-es/track/34vh6JPA1veSYpM0hkNCSE"
  },
  {
    "Número": 235,
    "Título": "TE PIENSO A CADA HORA",
    "Artista": "Dvicio",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/1J9wWlo3oI3HjPnp48L3XL"
  },
  {
    "Número": 236,
    "Título": "Ké Más Nos Da",
    "Artista": "Estopa",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/1JurgyjeCTcDyZErghSV0y"
  },
  {
    "Número": 237,
    "Título": "Nochentera",
    "Artista": "Vicco",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/20CozgjF6bshBw8cLhN23B"
  },
  {
    "Número": 238,
    "Título": "XQ Sigues Pasando :(",
    "Artista": "Abraham Mateo",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/60WnyQpJMxndoCwfo3TbuE"
  },
  {
    "Número": 239,
    "Título": "La Musiquita",
    "Artista": "Daviles de Novelda",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/5LNJHJJd8aBY0aW9CgSgbz"
  },
  {
    "Número": 240,
    "Título": "Ester Expósito",
    "Artista": "Dani Martín",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/4GKjSwmowWO082NGn11wNj"
  },
  {
    "Número": 241,
    "Título": "Lentamente",
    "Artista": "Ana Mena",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/7GJVqqE79WOl8ncT7Y4z0L"
  },
  {
    "Número": 242,
    "Título": "Pon Que Dale",
    "Artista": "Niña Pastori",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/7nIwaCJSx1QHK82f5HlRDe"
  },
  {
    "Número": 243,
    "Título": "Cómo Me Gustaría Contarte",
    "Artista": "Dani Martín",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/21AH6D2xxBxjduEbZHh7i5"
  },
  {
    "Número": 244,
    "Título": "Ateo",
    "Artista": "C. Tangana",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/5xiAfKzE3mbxYbOkUZPR11"
  },
  {
    "Número": 245,
    "Título": "La Tortura (feat. Alejandro Sanz)",
    "Artista": "Shakira",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/5BSclXJTa9B0iURhUjZo50"
  },
  {
    "Número": 246,
    "Título": "Kriño",
    "Artista": "Pol Granch",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/53y5byq0942aVeWaxU6mPa"
  },
  {
    "Número": 247,
    "Título": "Como Si Fueras a Morir Mañana",
    "Artista": "Leiva",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/4aAfLSx9IthpC3Pw5pNk3E"
  },
  {
    "Número": 248,
    "Título": "La Noria (with Amaral)",
    "Artista": "Pereza",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/3CY6JuDw7bEHRmryKvTuoe"
  },
  {
    "Número": 249,
    "Título": "Me He Pillao x Ti",
    "Artista": "Ana Mena",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/07TRc0Glkk8wDVq3eC5f2Z"
  },
  {
    "Número": 250,
    "Título": "pa",
    "Artista": "TINI",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/490e7PHsxkzMot8qCO36Bt"
  },
  {
    "Número": 251,
    "Título": "CANDY",
    "Artista": "ROSALÍA",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/70AYiGbc4mWZGEqiipBBDb"
  },
  {
    "Número": 252,
    "Título": "Nena",
    "Artista": "Pol Granch",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/53dfoY17ZWSnG92lrBCqMg"
  },
  {
    "Número": 253,
    "Título": "Risueña",
    "Artista": "Omar Montes",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/277ia0CBOO47RhG7XSLj4b"
  },
  {
    "Número": 254,
    "Título": "90 Minutos",
    "Artista": "India Martinez",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/4hO4Y9WR9NL5L7XnqtbTyE"
  },
  {
    "Número": 255,
    "Título": "Loca (feat. El Cata)",
    "Artista": "Shakira",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/42k1KeBehAd83lrGt1okiC"
  },
  {
    "Número": 256,
    "Título": "Pienso en Aquella Tarde - Nueva Versión",
    "Artista": "Pereza",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/2VTaauLbYR0VxWaT9rlQFi"
  },
  {
    "Número": 257,
    "Título": "Convénceme",
    "Artista": "India Martinez",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/12oFSoib1tf0r2rd1Fgsfe"
  },
  {
    "Número": 258,
    "Título": "La Madre",
    "Artista": "Víctor Manuel",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/4eUhX5KmmQp537lxDJpmQK"
  },
  {
    "Número": 259,
    "Título": "Portales",
    "Artista": "Dani Martín",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/0Wn489VvZ0b5MRm62LMmUM"
  },
  {
    "Número": 260,
    "Título": "Cómo Quieres Que Te Quiera",
    "Artista": "Rosario",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0JKUSybmsE4rU1MpImJn0j"
  },
  {
    "Número": 261,
    "Título": "5 Sentidos",
    "Artista": "Dvicio",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/7chjOPhoxbpRYSrO1rvdnu"
  },
  {
    "Número": 262,
    "Título": "Terriblemente Cruel",
    "Artista": "Leiva",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/0XPayKZFFZA2PwSRNi1pVU"
  },
  {
    "Número": 263,
    "Título": "Siete Vidas",
    "Artista": "Antonio Flores",
    "Año": 1994,
    "Enlace": "https://open.spotify.com/intl-es/track/7oZpaS7DDMyl3U7RnHsPKp"
  },
  {
    "Número": 264,
    "Título": "Millonario",
    "Artista": "Pol Granch",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/0j6eJIII2AucQBgCGxPrFx"
  },
  {
    "Número": 265,
    "Título": "Mi Pequeño Chernóbil",
    "Artista": "Leiva",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/4uctPC0cRfw3vOmK2YF4xR"
  },
  {
    "Número": 266,
    "Título": "Un último vals",
    "Artista": "Joaquín Sabina",
    "Año": 2024,
    "Enlace": "https://open.spotify.com/intl-es/track/4CiY69daQtmIl2RNqsYCtp"
  },
  {
    "Número": 267,
    "Título": "Este Tren",
    "Artista": "Rozalén",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/4zSpfYHyf6bN2jJVO0so03"
  },
  {
    "Número": 268,
    "Título": "Nuestro Tiempo",
    "Artista": "Amaral",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/4BOSdVvfw3b5EAhIK5EIVX"
  },
  {
    "Número": 269,
    "Título": "Dejaría Todo",
    "Artista": "Chayanne",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/5YT1NfgHvrJUhgoHrvD9h7"
  },
  {
    "Número": 270,
    "Título": "En el Mundo Genial de las Cosas Que Dices",
    "Artista": "Maldita Nerea",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/0JXRA6bYdnwkHYAlIwEWb8"
  },
  {
    "Número": 271,
    "Título": "A Contracorriente",
    "Artista": "El Canto Del Loco",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/4fYAcwdEtW2VCZe5Xoe7iC"
  },
  {
    "Número": 272,
    "Título": "Dieciocho",
    "Artista": "Dani Martín",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/3nN5n70vM1tAMWBDZaRbxS"
  },
  {
    "Número": 273,
    "Título": "Arráncame la Piel",
    "Artista": "Pol Granch",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/3uyXupf90Zy56shfjUj7AB"
  },
  {
    "Número": 274,
    "Título": "Si Quieres Bailamos (with Quique Gonzalez)",
    "Artista": "Pereza",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/6wfadwumj3jluiqFxqvIl0"
  },
  {
    "Número": 275,
    "Título": "Sobreviviré",
    "Artista": "Monica Naranjo",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/3xGon93gcCARQ4VgYgoirk"
  },
  {
    "Número": 276,
    "Título": "Sobrenatural (feat. FARIANA)",
    "Artista": "Dvicio",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/46MznfUnpFS7qEhTpNJl9t"
  },
  {
    "Número": 277,
    "Título": "Dolerme",
    "Artista": "ROSALÍA",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/2reL9PAUza4PUtbjqW1fRf"
  },
  {
    "Número": 278,
    "Título": "Empiezo a Recordarte",
    "Artista": "Monica Naranjo",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/5qtcm02ln28nPGfFonT9ZH"
  },
  {
    "Número": 279,
    "Título": "Enamorate",
    "Artista": "Dvicio",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/4VRP8DfxO2qQOZrnbaj324"
  },
  {
    "Número": 280,
    "Título": "Superpoderes",
    "Artista": "Leiva",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/3by1RwAsoZ6nNoMOCy11LM"
  },
  {
    "Número": 281,
    "Título": "Guerra Fria",
    "Artista": "Malú",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/1G0mTAZcpoU1vKcLO8lb0n"
  },
  {
    "Número": 282,
    "Título": "Valio la Pena",
    "Artista": "Marc Anthony",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/3Ll4D5HXvICXck8KmOjytI"
  },
  {
    "Número": 283,
    "Título": "Quiero Ser (feat. Amaia Montero)",
    "Artista": "Jorge Celedón",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/2SxtZcr9RPVvKnVPqUmiPe"
  },
  {
    "Número": 284,
    "Título": "Déjala Que Baile (with Alejandro Sanz & Arkano)",
    "Artista": "Melendi",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/2KK9N6iBAisA0booTu3bGd"
  },
  {
    "Número": 285,
    "Título": "París",
    "Artista": "Dani Martín",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/7A6vqBPkt4rbwXsKhrl7B1"
  },
  {
    "Número": 286,
    "Título": "Lady Madrid",
    "Artista": "Pereza",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/5GGUa4ms6gjj9gvPl6kl3r"
  },
  {
    "Número": 287,
    "Título": "Sueños Rotos",
    "Artista": "La Quinta Estacion",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/0LeJMPgBIlWMxdRtjF7Qj1"
  },
  {
    "Número": 288,
    "Título": "Yo x Ti, Tu x Mi",
    "Artista": "ROSALÍA",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/7BlBVFwvbWvcwNcUarQmjk"
  },
  {
    "Número": 289,
    "Título": "Estrella Polar (with Juan Aguirre)",
    "Artista": "Pereza",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/5NV19rJlAYrAAFXQTZVC55"
  },
  {
    "Número": 290,
    "Título": "Torero",
    "Artista": "Chayanne",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/709CndJJB3GTUhQD0LLFse"
  },
  {
    "Número": 291,
    "Título": "Rosa de Alejandría",
    "Artista": "Manolo Garcia",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/5GwSE4jH72NzlLRAWuwRqL"
  },
  {
    "Número": 292,
    "Título": "No Voy a Cambiar",
    "Artista": "Malú",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/5RJRcCng40cAECYiXkOM6Z"
  },
  {
    "Número": 293,
    "Título": "Vente Pa' Ca (feat. Maluma)",
    "Artista": "Ricky Martin",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/7DM4BPaS7uofFul3ywMe46"
  },
  {
    "Número": 294,
    "Título": "La Mentira (feat. Joaquín Sabina)",
    "Artista": "Dani Martín",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/6b230QKlluW1wgkexEAjBa"
  },
  {
    "Número": 295,
    "Título": "Es por Ti",
    "Artista": "Cómplices",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/2vcj4d4TpiyWqMbdRu4j6u"
  },
  {
    "Número": 296,
    "Título": "Fuego",
    "Artista": "Estopa",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/6ye25NazQfUWrCTdCH3cXX"
  },
  {
    "Número": 297,
    "Título": "No Dudaria",
    "Artista": "Antonio Flores",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/6djqlcjQPGhxuZ6HERSgWw"
  },
  {
    "Número": 298,
    "Título": "Cai",
    "Artista": "Niña Pastori",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/6XZFGX36EFljIGj7p2Ht6l"
  },
  {
    "Número": 299,
    "Título": "El Universo Sobre Mi - En Directo",
    "Artista": "Amaral",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/5NO0xkDUbMDeBUKr4CVJOX"
  },
  {
    "Número": 300,
    "Título": "Ahora Tu",
    "Artista": "Malú",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/7z9IbN0D245JG5iokzkbDk"
  },
  {
    "Número": 301,
    "Título": "La Puerta Violeta",
    "Artista": "Rozalén",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/42ZASSKlh3UtYCgwZb8lBS"
  },
  {
    "Número": 302,
    "Título": "Fan de Ti",
    "Artista": "Sidecars",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/72wP8pJImrhxGA6f6F91gk"
  },
  {
    "Número": 303,
    "Título": "Buscando El Sol",
    "Artista": "David Otero",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/3eoZdfIaTawNFYSBuLdlTG"
  },
  {
    "Número": 304,
    "Título": "Paraíso",
    "Artista": "Dvicio",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/6y63IkVtjr2RnPVvK8BqEj"
  },
  {
    "Número": 305,
    "Título": "Ojos Así",
    "Artista": "Shakira",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/4EDfdYJ7mqXRoWAqzF1PVO"
  },
  {
    "Número": 306,
    "Título": "Puedes Contar Conmigo",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/1hbWtHgRDG25DkmxE4I28V"
  },
  {
    "Número": 307,
    "Título": "Contigo",
    "Artista": "El Canto Del Loco",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/5DCBEzZM5rSVWZBYWKknv4"
  },
  {
    "Número": 308,
    "Título": "Muñeca de Trapo",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/1YtZ6sHC4TalQbK4c37bqJ"
  },
  {
    "Número": 309,
    "Título": "Insoportable",
    "Artista": "El Canto Del Loco",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/6FstWkgRdHagqJ6qjDbiK0"
  },
  {
    "Número": 310,
    "Título": "Todo",
    "Artista": "Pereza",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/09QG9D1BI4TRvGq64NghRg"
  },
  {
    "Número": 311,
    "Título": "MALAMENTE - Cap.1: Augurio",
    "Artista": "ROSALÍA",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/5zOAudPQIs5U8zP6LQGHmH"
  },
  {
    "Número": 312,
    "Título": "A Prueba de Ti",
    "Artista": "Malú",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/2fF6Kma5cZBvDCyEKq30tb"
  },
  {
    "Número": 313,
    "Título": "Los Charcos",
    "Artista": "Dani Martín",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/6XPOXobXwTz9Bh8p9u0QXW"
  },
  {
    "Número": 314,
    "Título": "Hijos de un Mismo Dios",
    "Artista": "Macaco",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/5y4g8rBf30P8Tc0pibVUnX"
  },
  {
    "Número": 315,
    "Título": "Peter Pan",
    "Artista": "El Canto Del Loco",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/1gkBsKxTpVHIn1nLf05CUo"
  },
  {
    "Número": 316,
    "Título": "Eres para Mí",
    "Artista": "Julieta Venegas",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/4m3vLNZkFAjm30XxPXf7E3"
  },
  {
    "Número": 317,
    "Título": "Y en Tu Ventana",
    "Artista": "Andy & Lucas",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1aTQjtfI3EapNrDGu4iu5T"
  },
  {
    "Número": 318,
    "Título": "¡Que Bonito!",
    "Artista": "Rosario",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/1MO5KuLnSaY1dlkWGDjHkT"
  },
  {
    "Número": 319,
    "Título": "Una Foto en Blanco y Negro",
    "Artista": "El Canto Del Loco",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1LuW4h5s9ZumBbMh7qhDDj"
  },
  {
    "Número": 320,
    "Título": "Justo Ahora",
    "Artista": "Dvicio",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/3lgiC0OSZbPcyeO0HdTwz2"
  },
  {
    "Número": 321,
    "Título": "Vestido Azul",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/0GyksGKFXH50Lx737ahxIq"
  },
  {
    "Número": 322,
    "Título": "La Llamada",
    "Artista": "Leiva",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/5ZCamgcqvkckdf2FdfYuth"
  },
  {
    "Número": 323,
    "Título": "Darte Mi Vida",
    "Artista": "Amaia Montero",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/6uUg2lTd67oC4372G210uw"
  },
  {
    "Número": 324,
    "Título": "Desátame",
    "Artista": "Monica Naranjo",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/2a7Ufmq13NRMavrBYUN5Ex"
  },
  {
    "Número": 325,
    "Título": "Bailamos",
    "Artista": "Enrique Iglesias",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2bbeNsFmjZqdoDhjLsKNWe"
  },
  {
    "Número": 326,
    "Título": "Te Miro A La Cara",
    "Artista": "Daviles de Novelda",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/7hlPoVZ1uz7FiQagPTVbQG"
  },
  {
    "Número": 327,
    "Título": "La Bicicleta",
    "Artista": "Carlos Vives",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/0Gx4VrHzS7pZOEAGrmXXBH"
  },
  {
    "Número": 328,
    "Título": "María",
    "Artista": "Ricky Martin",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0QQHPRbgLJJ5XNzJV1l9BW"
  },
  {
    "Número": 329,
    "Título": "Celos",
    "Artista": "Andy & Lucas",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/0NYWDlaBz5ejU8N8g8GRFV"
  },
  {
    "Número": 330,
    "Título": "La Bomba",
    "Artista": "Ricky Martin",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2IAtnd4UG52HQP9Rwart5h"
  },
  {
    "Número": 331,
    "Título": "Ahí Estás Tú",
    "Artista": "Chambao",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/3Av9wr1MflgPnAkxmOblKJ"
  },
  {
    "Número": 332,
    "Título": "Todo No Es Casualidad - Versión Radio",
    "Artista": "India Martinez",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/7hJ50qGogxnnOto7kISbSQ"
  },
  {
    "Número": 333,
    "Título": "Dímelo",
    "Artista": "Marc Anthony",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0SzNJxel0NMpA4xM2COhO4"
  },
  {
    "Número": 334,
    "Título": "Eras Tu",
    "Artista": "Merche",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/1ayLQcNwISmhnjLHOtUYrM"
  },
  {
    "Número": 335,
    "Título": "Me Duele La Cara De Ser Tan Guapo",
    "Artista": "Los Inhumanos",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/4ClSC5MEC4gFOFrxiSIHak"
  },
  {
    "Número": 336,
    "Título": "Nada Fue Un Error - Live In Spain / 2005",
    "Artista": "Coti",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/7GO6pBFbieZ30NjGIp2LP5"
  },
  {
    "Número": 337,
    "Título": "Carolina - En directo 2000",
    "Artista": "M-Clan",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/4UtREbGYnd1nZLckEb5y8J"
  },
  {
    "Número": 338,
    "Título": "Sin ti no soy nada",
    "Artista": "Amaral",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/3tORVJDKoY6zLrskPvouaL"
  },
  {
    "Número": 339,
    "Título": "Son Sueños",
    "Artista": "El Canto Del Loco",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0Gb0HHBCpDL3lYqaabpVu8"
  },
  {
    "Número": 340,
    "Título": "Me Falta el Aliento",
    "Artista": "Estopa",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/7Lgarpf1OqaXsUTjKZ34mK"
  },
  {
    "Número": 341,
    "Título": "Un Planeta Llamado Nosotros",
    "Artista": "Maldita Nerea",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/29UkXUrWYGoPsxEesEH3qZ"
  },
  {
    "Número": 342,
    "Título": "Deseos de Cosas Imposibles",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/6CIDsqMEEsBJf5Cv6RbuGw"
  },
  {
    "Número": 343,
    "Título": "Días de verano",
    "Artista": "Amaral",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/3JhllUTyXy2ceSTzNSErBC"
  },
  {
    "Número": 344,
    "Título": "Pisando fuerte",
    "Artista": "Alejandro Sanz",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/0VqXrOSgbq1ukARLV4uGU0"
  },
  {
    "Número": 345,
    "Título": "Supersubmarina",
    "Artista": "Supersubmarina",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/7ixB1UqUrV87IvACFJayXy"
  },
  {
    "Número": 346,
    "Título": "La Camisa Negra",
    "Artista": "Juanes",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/5jW8veZpHmgrGz6qcimuRu"
  },
  {
    "Número": 347,
    "Título": "Amor de San Juan",
    "Artista": "Niña Pastori",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/7kbdwklxm48OgpCrC3r5ot"
  },
  {
    "Número": 348,
    "Título": "Malo",
    "Artista": "Bebe",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/3JFFnk9XQ9PKNd6ueBc2RK"
  },
  {
    "Número": 349,
    "Título": "Tu Mirada Me Hace Grande",
    "Artista": "Maldita Nerea",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/2O7w4VYV2eScxtZr9EZ3Iu"
  },
  {
    "Número": 350,
    "Título": "Cuando Me Vaya (feat. Natalia Jiménez)",
    "Artista": "Melocos",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/1mazkL64KQ7h6UZoaxxS46"
  },
  {
    "Número": 351,
    "Título": "Marta, Sebas, Guille y los demás",
    "Artista": "Amaral",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/30ddpolNHwXlrS5XO8MiiO"
  },
  {
    "Número": 352,
    "Título": "Dos Hombres Y Un Destino",
    "Artista": "Bustamante",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/4twmehYjvXshw3ViIypIrn"
  },
  {
    "Número": 353,
    "Título": "Devuelveme la Vida (with Antonio Orozco)",
    "Artista": "Malú",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/3F6QDKtaBlaEfI6TLjLIQw"
  },
  {
    "Número": 354,
    "Título": "La Madre de Jose",
    "Artista": "El Canto Del Loco",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/3l8Ennt1PqShViwh0tkWuc"
  },
  {
    "Número": 355,
    "Título": "Limón y Sal",
    "Artista": "Julieta Venegas",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/7dITAq1YP5e0kTcaDq4YWI"
  },
  {
    "Número": 356,
    "Título": "Polvora",
    "Artista": "Leiva",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/4sVBWe5oHOvJh4k1HhD0J8"
  },
  {
    "Número": 357,
    "Título": "Ya No Me Acuerdo",
    "Artista": "Estopa",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/1vHY8bEVI7Sg85xNMTDxXM"
  },
  {
    "Número": 358,
    "Título": "Por Mi Tripa",
    "Artista": "Pereza",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/0DBFnvrWi43WO354NvL15A"
  },
  {
    "Número": 359,
    "Título": "Y Sin Embargo - En Directo",
    "Artista": "Joaquín Sabina",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/2PwlT72CyKMN2WzgCS4yUR"
  },
  {
    "Número": 360,
    "Título": "Color Esperanza",
    "Artista": "Diego Torres",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/1tOm6gSUcfZihFZCRPeWB5"
  },
  {
    "Número": 361,
    "Título": "Partiendo la Pana",
    "Artista": "Estopa",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/4BtggpHp17Ak3RP0LITrue"
  },
  {
    "Número": 362,
    "Título": "Esa Chica Es Mía",
    "Artista": "Sergio Dalma",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4M9LB0kuKlZvk2yL26EGve"
  },
  {
    "Número": 363,
    "Título": "Atrévete-Te-Te",
    "Artista": "Calle 13",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/6TTudSWfeluwJ0KTPaRd5g"
  },
  {
    "Número": 364,
    "Título": "Las de la Intuición",
    "Artista": "Shakira",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/3uU6dqBjVKRTPis0RrTaT4"
  },
  {
    "Número": 365,
    "Título": "La Suerte de Mi Vida",
    "Artista": "El Canto Del Loco",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/3t7xKj2YWeiFm92ApJ2FAt"
  },
  {
    "Número": 366,
    "Título": "Me Dediqué a Perderte",
    "Artista": "Alejandro Fernández",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/3YR2oJx3iA5ThPlepS4LzY"
  },
  {
    "Número": 367,
    "Título": "Corazon Espinado (feat. Mana)",
    "Artista": "Santana",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2WoqgtWEBbbBKMDN6Becs7"
  },
  {
    "Número": 368,
    "Título": "Y Cómo Es El",
    "Artista": "Marc Anthony",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/3h8KGJn9UFX2cfjN78iMVF"
  },
  {
    "Número": 369,
    "Título": "Livin' la Vida Loca - Spanish Version",
    "Artista": "Ricky Martin",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/05A6IM6n3liq04Ql03qfmz"
  },
  {
    "Número": 370,
    "Título": "Vente Pa' Ca (feat. Wendy)",
    "Artista": "Ricky Martin",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/0XyMfNTiNv2w73L7USXzv3"
  },
  {
    "Número": 371,
    "Título": "DUELE EL CORAZON (feat. Arcángel & Javada) - Remix",
    "Artista": "Enrique Iglesias",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/7CnDrJ3mlKBEcAUVAlzUQE"
  },
  {
    "Número": 372,
    "Título": "Algo Contigo",
    "Artista": "Gente De Zona",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/5l390fUPNwGSi6ECobpc20"
  },
  {
    "Número": 373,
    "Título": "Traidora (feat. Marc Anthony)",
    "Artista": "Gente De Zona",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/7Fl3wSxRqBljyQH8dJSz9c"
  },
  {
    "Número": 374,
    "Título": "Vente Pa' Ca (feat. Maluma) - Urban Remix",
    "Artista": "Ricky Martin",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/3pI6VigoXHkcL3VYLJfBhq"
  },
  {
    "Número": 375,
    "Título": "La Isla del Amor (feat. Maki)",
    "Artista": "Demarco Flamenco",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/0Gw9QC3RqHmTdGqHIWLHb6"
  },
  {
    "Número": 376,
    "Título": "Vivir Mi Vida",
    "Artista": "Marc Anthony",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/3QHMxEOAGD51PDlbFPHLyJ"
  },
  {
    "Número": 377,
    "Título": "EL BAÑO",
    "Artista": "Enrique Iglesias",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/2vvdTrdryjsl8DmPIMDWZU"
  },
  {
    "Número": 378,
    "Título": "Colgando en tus manos (con Marta Sánchez)",
    "Artista": "Carlos Baute",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/3UI9I3e1g1y5T3SMfdgfGO"
  },
  {
    "Número": 379,
    "Título": "Despacito",
    "Artista": "Luis Fonsi",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/6habFhsOp2NvshLv26DqMb"
  },
  {
    "Número": 380,
    "Título": "La Gozadera (feat. Marc Anthony)",
    "Artista": "Gente De Zona",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/0OMRAvrtLWE2TvcXorRiB9"
  },
  {
    "Número": 381,
    "Título": "A Dios Le Pido",
    "Artista": "Juanes",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/129lYDVKnWtlJc2PZJviuA"
  },
  {
    "Número": 382,
    "Título": "El Perdón (with Enrique Iglesias)",
    "Artista": "Nicky Jam",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/7qCAVkHWZkF44OzOUKf8Cr"
  },
  {
    "Número": 383,
    "Título": "El Perdedor",
    "Artista": "Enrique Iglesias",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/6DwD0v5OaaYFjQ7EeOOLKW"
  },
  {
    "Número": 384,
    "Título": "Si No Te Hubieras Ido",
    "Artista": "Marco Antonio Solís",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2gn1qBdbf5OoMTwYbVKC77"
  },
  {
    "Número": 385,
    "Título": "Si Te Pudiera Mentir",
    "Artista": "Marco Antonio Solís",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0thTVPvkfFVAUYp9tQ0GAX"
  },
  {
    "Número": 386,
    "Título": "O Me Voy O Te Vas",
    "Artista": "Marco Antonio Solís",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/4GBYzI0HixQ2z6gPGtNGin"
  },
  {
    "Número": 387,
    "Título": "¿A Dónde Vamos A Parar?",
    "Artista": "Marco Antonio Solís",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/2OmOhZj2fxGgBpTsVc18x4"
  },
  {
    "Número": 388,
    "Título": "Loco",
    "Artista": "Enrique Iglesias",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/5fLCM7IRYHKnxZslen6btz"
  },
  {
    "Número": 389,
    "Título": "Ayer",
    "Artista": "Enrique Iglesias",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/1uo7VyAScB7RjscEyA7yc7"
  },
  {
    "Número": 390,
    "Título": "Bailando - Spanish Version",
    "Artista": "Enrique Iglesias",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/75EveQXAVJzwuEO9gjfyGZ"
  },
  {
    "Número": 391,
    "Título": "Inventame",
    "Artista": "Marco Antonio Solís",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/5RJuWtHaZqnHRCVzk1z1uS"
  },
  {
    "Número": 392,
    "Título": "Quizás",
    "Artista": "Enrique Iglesias",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/1iC6iDolyChCB8wTBujAff"
  },
  {
    "Número": 393,
    "Título": "Mentiroso",
    "Artista": "Enrique Iglesias",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/2pOkvQHdkBmIicUQNKMH8A"
  },
  {
    "Número": 394,
    "Título": "Me Enamora",
    "Artista": "Juanes",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/5BY0p2EH4EznNZ0MFD9mjt"
  },
  {
    "Número": 395,
    "Título": "Fruta Fresca",
    "Artista": "Carlos Vives",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/1lcaG7worZLgdGuniOfGje"
  },
  {
    "Número": 396,
    "Título": "Carito",
    "Artista": "Carlos Vives",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/5czkBkWogUvTf2jleGyHaQ"
  },
  {
    "Número": 397,
    "Título": "Corazón partío",
    "Artista": "Alejandro Sanz",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/0wQCKR9OFjYu5Kzrk7WivJ"
  },
  {
    "Número": 398,
    "Título": "Volví a Nacer",
    "Artista": "Carlos Vives",
    "Año": 2012,
    "Enlace": "https://open.spotify.com/intl-es/track/6Al0Kpd4VrRZ0Z4kTThNPa"
  },
  {
    "Número": 399,
    "Título": "Madre Tierra (Oye)",
    "Artista": "Chayanne",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/2wlptOJ1g5fvLdu6ruKCKU"
  },
  {
    "Número": 400,
    "Título": "La Cartera",
    "Artista": "Carlos Vives",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0JC81ojQymAE7l1KuJpNCq"
  },
  {
    "Número": 401,
    "Título": "Corazón En La Maleta",
    "Artista": "Luis Fonsi",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/3ljr9ATeLs2BY9gNp7vm62"
  },
  {
    "Número": 402,
    "Título": "Volverte A Ver",
    "Artista": "Juanes",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/2ZqFfDwNjKvPu3USx3onhO"
  },
  {
    "Número": 403,
    "Título": "Bailar Contigo",
    "Artista": "Carlos Vives",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/1KbX1VuFIgsRa9JjnQtRYA"
  },
  {
    "Número": 404,
    "Título": "Tu Amor Me Hace Bien - Salsa Version",
    "Artista": "Marc Anthony",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/12H7K15h3aC5vRCaca65el"
  },
  {
    "Número": 405,
    "Título": "Robarte un Beso",
    "Artista": "Carlos Vives",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/0JcNysfWVWaMS7R6vzGB2k"
  },
  {
    "Número": 406,
    "Título": "Llegaste Tú",
    "Artista": "Luis Fonsi",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/609SDGj0txmlAXRrpwee9Y"
  },
  {
    "Número": 407,
    "Título": "Si Me Das Tu Amor",
    "Artista": "Carlos Vives",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/1O34fFJyV7djSqRtOuRSVh"
  },
  {
    "Número": 408,
    "Título": "Te regalo",
    "Artista": "Carlos Baute",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/0fmgOwkb9AwgzXhYVSZRDs"
  },
  {
    "Número": 409,
    "Título": "Voy A Olvidarme De Mi",
    "Artista": "Carlos Vives",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/2s66rxdujHHVhNNnJfgL2D"
  },
  {
    "Número": 410,
    "Título": "Qué Me Has Hecho (feat. Wisin)",
    "Artista": "Chayanne",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/3nUNwSYEUv9bmUc3de0Owv"
  },
  {
    "Número": 411,
    "Título": "SUBEME LA RADIO",
    "Artista": "Enrique Iglesias",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/7nKBxz47S9SD79N086fuhn"
  },
  {
    "Número": 412,
    "Título": "Yo Contigo, Tú Conmigo - The Gong Gong Song / El Tema De La Película \"Gru 3 Mi Villano Favorito",
    "Artista": "Morat",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/12HWO1YYMV9HEqQpava5zm"
  },
  {
    "Número": 413,
    "Título": "Cuando Me Enamoro",
    "Artista": "Enrique Iglesias",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/4PHX6bpHDxiR9RGzAKWcyk"
  },
  {
    "Número": 414,
    "Título": "DUELE EL CORAZON (feat. Wisin)",
    "Artista": "Enrique Iglesias",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/6YZdkObH88npeKrrkb8Ggf"
  },
  {
    "Número": 415,
    "Título": "Ando buscando (feat. Piso 21)",
    "Artista": "Carlos Baute",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/4bd65mDKdhgKngKlF4Q1pZ"
  },
  {
    "Número": 416,
    "Título": "Te sigo pensando",
    "Artista": "Carlos Baute",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/5D5UwU5aFtcqxkqlCh1qKs"
  },
  {
    "Número": 417,
    "Título": "La Bomba",
    "Artista": "Ricky Martin",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2IAtnd4UG52HQP9Rwart5h"
  },
  {
    "Número": 418,
    "Título": "María",
    "Artista": "Ricky Martin",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0QQHPRbgLJJ5XNzJV1l9BW"
  },
  {
    "Número": 419,
    "Título": "Torero",
    "Artista": "Chayanne",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/709CndJJB3GTUhQD0LLFse"
  },
  {
    "Número": 420,
    "Título": "She Bangs - Spanish Version",
    "Artista": "Ricky Martin",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/4ti5pZ0zs1PDf1eQswskFB"
  },
  {
    "Número": 421,
    "Título": "When I Dream at Night",
    "Artista": "Marc Anthony",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/1XYwlFvi9yPNruCanSJ3WP"
  },
  {
    "Número": 422,
    "Título": "La Copa Rota",
    "Artista": "Marc Anthony",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/0jMU9W1kcLyxXYloMHCt2i"
  },
  {
    "Número": 423,
    "Título": "La Última Noche",
    "Artista": "Diego Torres",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/0kc6sK1HPC5fqj2dQsEraZ"
  },
  {
    "Número": 424,
    "Título": "Y, ¿Si fuera ella?",
    "Artista": "Alejandro Sanz",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/1DmlUpnkg4N1VWquSoffF1"
  },
  {
    "Número": 425,
    "Título": "Abrázame Muy Fuerte",
    "Artista": "Marc Anthony",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/4gTxKZH5RERMhX9H8EnPAX"
  },
  {
    "Número": 426,
    "Título": "Volver a Comenzar",
    "Artista": "Marc Anthony",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/4rB9Ji4iw2CKDjuaU3djPd"
  },
  {
    "Número": 427,
    "Título": "A Quién Quiero Mentirle",
    "Artista": "Marc Anthony",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/6ngLct6z0pCqJcevM11HDH"
  },
  {
    "Número": 428,
    "Título": "Private Emotion (feat. Meja)",
    "Artista": "Ricky Martin",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/1rjHJSGgt10GAtgLrDtHTM"
  },
  {
    "Número": 429,
    "Título": "Un Zombie A La Intemperie",
    "Artista": "Alejandro Sanz",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/64cQ79mesIAszcHRGS6px7"
  },
  {
    "Número": 430,
    "Título": "Come with Me - Spanglish Version",
    "Artista": "Ricky Martin",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/5yjA8BscTvoceGWY2P1I8F"
  },
  {
    "Número": 431,
    "Título": "Flor Pálida",
    "Artista": "Marc Anthony",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/47TyfLrGhYHHyyQWk64d0M"
  },
  {
    "Número": 432,
    "Título": "Girasoles",
    "Artista": "Luis Fonsi",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/4LdtAljggvH4qzlxNxo559"
  },
  {
    "Número": 433,
    "Título": "Apaga La Luz",
    "Artista": "Luis Fonsi",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/4v4pC1y5UI5oHdcluJIJs8"
  },
  {
    "Número": 434,
    "Título": "Sola",
    "Artista": "Luis Fonsi",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/0BOm90PDLRJpTSqqd6z52E"
  },
  {
    "Número": 435,
    "Título": "Despacito - Remix",
    "Artista": "Luis Fonsi",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/5CtI0qwDJkDQGwXD1H1cLb"
  },
  {
    "Número": 436,
    "Título": "Bailando - Spanish Version",
    "Artista": "Enrique Iglesias",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/32lm3769IRfcnrQV11LO4E"
  },
  {
    "Número": 437,
    "Título": "Escape",
    "Artista": "Enrique Iglesias",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/59FYUvlodY7NCZGHk7yJt1"
  },
  {
    "Número": 438,
    "Título": "¿Dónde Están Corazón?",
    "Artista": "Enrique Iglesias",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2iIZl5EIhmoxX7j3xXv467"
  },
  {
    "Número": 439,
    "Título": "Tonight (I'm Fuckin' You)",
    "Artista": "Enrique Iglesias",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/35Vle8dEPRW22MGQsqj0vq"
  },
  {
    "Número": 440,
    "Título": "Cuando Me Enamoro",
    "Artista": "Enrique Iglesias",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/79gkHjNTSyGPXEyGkNQ8zH"
  },
  {
    "Número": 441,
    "Título": "No Me Digas Que No",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/436EpHvGoKO3DgaSeD9lW8"
  },
  {
    "Número": 442,
    "Título": "Ay Haiti!",
    "Artista": "Alejandro Sanz",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/3FifroUyur8j5mTM78WuXQ"
  },
  {
    "Número": 443,
    "Título": "Es Por Ti",
    "Artista": "Juanes",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/3b1IQflSLrgzYQPGFzI9cl"
  },
  {
    "Número": 444,
    "Título": "Mala Gente",
    "Artista": "Juanes",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/4QLPUyOsRUTnoW8h7HFbZX"
  },
  {
    "Número": 445,
    "Título": "Una Flor",
    "Artista": "Juanes",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/18sWPBeCwhEDv87OnY43gV"
  },
  {
    "Número": 446,
    "Título": "Me Enamoré de Ti",
    "Artista": "Chayanne",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/1sJFu2pvYJhtEOo9oVe1TZ"
  },
  {
    "Número": 447,
    "Título": "No Me Doy Por Vencido",
    "Artista": "Luis Fonsi",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/4lerOTNr2tFWJCAmmhymhi"
  },
  {
    "Número": 448,
    "Título": "Heroe",
    "Artista": "Enrique Iglesias",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/4AkrkORGjiz7c90mwxAvdW"
  },
  {
    "Número": 449,
    "Título": "Dímelo",
    "Artista": "Enrique Iglesias",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/2z0z5ddJS3K7qvhp4PH0Aa"
  },
  {
    "Número": 450,
    "Título": "Valió la Pena - Salsa Version",
    "Artista": "Marc Anthony",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/4pUmQqaZklcCOB3rFdWc7g"
  },
  {
    "Número": 451,
    "Título": "Caballero",
    "Artista": "Alejandro Fernández",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/5DL6BDuqhnQw8HfIvUYkm9"
  },
  {
    "Número": 452,
    "Título": "Qué Precio Tiene el Cielo - Salsa Version",
    "Artista": "Marc Anthony",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/2MnKininlD8bY9ggRNSJ37"
  },
  {
    "Número": 453,
    "Título": "Como un atleta",
    "Artista": "Carlos Baute",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/2aVPVddEvqcN9Kodu9ugJi"
  },
  {
    "Número": 454,
    "Título": "Desde Brasil",
    "Artista": "Café Quijano",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/7H0PDJwUMTdwQEBb3gXMeI"
  },
  {
    "Número": 455,
    "Título": "La taberna del Buda",
    "Artista": "Café Quijano",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/40A11dg6RXzfDrwMrw5sED"
  },
  {
    "Número": 456,
    "Título": "Lola",
    "Artista": "Café Quijano",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/2ECP3nWC88LaFz4oQzTo3Z"
  },
  {
    "Número": 457,
    "Título": "Cerrando bares",
    "Artista": "Café Quijano",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1MR7kwtUMcTKHwPCmRHGJn"
  },
  {
    "Número": 458,
    "Título": "20 de Enero",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/4XdePl1vOF1cYjTBYeYU9j"
  },
  {
    "Número": 459,
    "Título": "El Ultimo Vals",
    "Artista": "La Oreja de Van Gogh",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/4uofaK0hnyZQFDAepvPNl6"
  },
  {
    "Número": 460,
    "Título": "Bailar Pegados",
    "Artista": "Sergio Dalma",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/4QkQmdvFjEVvjc1ONi6t6N"
  },
  {
    "Número": 461,
    "Título": "En algún lugar",
    "Artista": "Duncan Dhu",
    "Año": 1987,
    "Enlace": "https://open.spotify.com/intl-es/track/3UIENhLRdFIOuRan92cAQu"
  },
  {
    "Número": 462,
    "Título": "Es por ti",
    "Artista": "Cómplices",
    "Año": 1990,
    "Enlace": "https://open.spotify.com/intl-es/track/4910k16mQrBB1YHwDU4XHJ"
  },
  {
    "Número": 463,
    "Título": "Mil Calles Llevan Hacia Tí",
    "Artista": "La Guardia",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/6Eftf3XLMULjwKItj0sNwe"
  },
  {
    "Número": 464,
    "Título": "Sueño su Boca - Radio Latin Dance",
    "Artista": "Raul",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/0otMuzDjTkpJFizLiHTAhE"
  },
  {
    "Número": 465,
    "Título": "I Need to Know",
    "Artista": "Marc Anthony",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/7ffwRz8lZyDOE4Vj58Lo72"
  },
  {
    "Número": 466,
    "Título": "Lo Que Te Di",
    "Artista": "Marc Anthony",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/0W8NvcMsIuygeFnfNz2KnC"
  },
  {
    "Número": 467,
    "Título": "Parecen Viernes",
    "Artista": "Marc Anthony",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/0dqfl4l45vqw2TnNrnbsy0"
  },
  {
    "Número": 468,
    "Título": "Alguien Soy Yo",
    "Artista": "Enrique Iglesias",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/1WmbJDE80IrPTt2zC416Fp"
  },
  {
    "Número": 469,
    "Título": "Se Me Va La Voz",
    "Artista": "Alejandro Fernández",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/4QubLlsaYXoQH3CxGxuTry"
  },
  {
    "Número": 470,
    "Título": "Con la mano levantá",
    "Artista": "Macaco",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/3wp08WucxF6qX77ONqflOX"
  },
  {
    "Número": 471,
    "Título": "Reina de los angelotes",
    "Artista": "Huecco",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/4hMCHkjf1BkWWmWcV1mSTP"
  },
  {
    "Número": 472,
    "Título": "Más",
    "Artista": "Ricky Martin",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/16IT9SCs4vy4qmCfuujX7M"
  },
  {
    "Número": 473,
    "Título": "Tu Amor Eterno",
    "Artista": "Carlos Vives",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/0HB3gmAMC46FIPFoebTbk5"
  },
  {
    "Número": 474,
    "Título": "Un Siglo Sin Ti",
    "Artista": "Chayanne",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/5NSJ0qoxwbO26tVvqpL4N2"
  },
  {
    "Número": 475,
    "Título": "Despacito",
    "Artista": "Luis Fonsi",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/36NOKjPLZVSqVJSC7iOHIm"
  },
  {
    "Número": 476,
    "Título": "Amor y dolor",
    "Artista": "Carlos Baute",
    "Año": 2016,
    "Enlace": "https://open.spotify.com/intl-es/track/5AQLjavd2v3c0zomyWupm7"
  },
  {
    "Número": 477,
    "Título": "Humanos a Marte",
    "Artista": "Chayanne",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/7lOzUJzsELALh5FQsPKTEn"
  },
  {
    "Número": 478,
    "Título": "La Mordidita (feat. Yotuel)",
    "Artista": "Ricky Martin",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/00i0O74dXdaKKdCrqHnfXm"
  },
  {
    "Número": 479,
    "Título": "Bailamos - From \"Wild Wild West",
    "Artista": "Enrique Iglesias",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/1ySwd43oWXbrytN2BD0Mhb"
  },
  {
    "Número": 480,
    "Título": "Noche Y De Dia",
    "Artista": "Enrique Iglesias",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/1lD3UtE3IVQGpSw7JL11BZ"
  },
  {
    "Número": 481,
    "Título": "Al Filo de Tu Amor",
    "Artista": "Carlos Vives",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/5yJCrSdwrLFzboxg0z9xMd"
  },
  {
    "Número": 482,
    "Título": "Dejame Entrar",
    "Artista": "Carlos Vives",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/2jNqxXMkVVpEvjvvwvUDDD"
  },
  {
    "Número": 483,
    "Título": "Tu Vida en la Mía",
    "Artista": "Marc Anthony",
    "Año": 2019,
    "Enlace": "https://open.spotify.com/intl-es/track/4jzPGm9YsNvFvpL5as5DVc"
  },
  {
    "Número": 484,
    "Título": "Cambio de Piel",
    "Artista": "Marc Anthony",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/3AjxOdecZ2eKDL0aOtcYsJ"
  },
  {
    "Número": 485,
    "Título": "BAGDAD - Cap.7: Liturgia",
    "Artista": "ROSALÍA",
    "Año": 2018,
    "Enlace": "https://open.spotify.com/intl-es/track/1zZ7vl1amOLI4GE5oUn0YB"
  },
  {
    "Número": 486,
    "Título": "Tu Amor Me Hace Bien",
    "Artista": "Marc Anthony",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/7FGZKu8VjGu1EImHbYgsS3"
  },
  {
    "Número": 487,
    "Título": "Mátalas",
    "Artista": "Alejandro Fernández",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1TojBnaen0BzIoZfVccGng"
  },
  {
    "Número": 488,
    "Título": "Más Que Tu Amigo",
    "Artista": "Marco Antonio Solís",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1Vy7WUJubV9JEoebuJ9dfe"
  },
  {
    "Número": 489,
    "Título": "Como Ronea (15 Aniversario)",
    "Artista": "Las Chuches",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/2xIKTgmlZ8vZCwaWoSqwK2"
  },
  {
    "Número": 490,
    "Título": "Baila Morena",
    "Artista": "Julio Iglesias",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/02U7Zu0vuIMMx4uioqjFiZ"
  },
  {
    "Número": 491,
    "Título": "Loco",
    "Artista": "Enrique Iglesias",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/3dTNsND92V406EcxZo59tT"
  },
  {
    "Número": 492,
    "Título": "¿Dónde Están Corazón?",
    "Artista": "Coti",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/2oYZsClkTMOsCp41t4VW71"
  },
  {
    "Número": 493,
    "Título": "Quién te quiere como yo",
    "Artista": "Carlos Baute",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/6gOvclmBqBdMOSbgHe8grM"
  },
  {
    "Número": 494,
    "Título": "Experiencia Religiosa",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0dReCfBuhZmrqMv4WBc8od"
  },
  {
    "Número": 495,
    "Título": "Invéntame",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/7v1fwFN26GH5Rq2VDMLDCc"
  },
  {
    "Número": 496,
    "Título": "Barrer a Casa",
    "Artista": "Sofia Ellar",
    "Año": 2021,
    "Enlace": "https://open.spotify.com/intl-es/track/6H2P5S8Aa3an5LNuhd1DqI"
  },
  {
    "Número": 497,
    "Título": "Lo Mejor de Mi Vida Eres Tú (feat. Natalia Jiménez)",
    "Artista": "Ricky Martin",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/2uhaDVmfG7pT94VO5jl2r4"
  },
  {
    "Número": 498,
    "Título": "El Ultimo Adiós - Varios Artistas Version",
    "Artista": "Ricky Martin",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/0tzixmHNQfE6S6SirSToxW"
  },
  {
    "Número": 499,
    "Título": "Nada Valgo Sin Tu Amor",
    "Artista": "Juanes",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/6QdwofpqDvvNxX88C9A0iQ"
  },
  {
    "Número": 500,
    "Título": "Gotas De Agua Dulce",
    "Artista": "Juanes",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/0Xn1VqBjoL4PAGxyatEO0Z"
  },
  {
    "Número": 501,
    "Título": "Si Tú Te Vas",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/1s7ZnNtzQfqdZ8bpgb95WG"
  },
  {
    "Número": 502,
    "Título": "Bailamos - Wild Wild West/Soundtrack Version",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/2oqqW9HR3UBdzwH5lKwPmA"
  },
  {
    "Número": 503,
    "Título": "Heroe",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/0Y2YwEOLosoXG72vI1tAF7"
  },
  {
    "Número": 504,
    "Título": "Cuando nadie me ve",
    "Artista": "Alejandro Sanz",
    "Año": 2000,
    "Enlace": "https://open.spotify.com/intl-es/track/0bfPmBR6iN2cyJQJUUQOG0"
  },
  {
    "Número": 505,
    "Título": "No Me Doy Por Vencido",
    "Artista": "Luis Fonsi",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/6ztMOMCtWcKZgMTiNfP9bC"
  },
  {
    "Número": 506,
    "Título": "Nada Es Para Siempre",
    "Artista": "Luis Fonsi",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/5ToI5oXnUmX5Nsmg8enL1N"
  },
  {
    "Número": 507,
    "Título": "Aqui Estoy Yo",
    "Artista": "Luis Fonsi",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/5DgsWDhgoploQACccB83Z8"
  },
  {
    "Número": 508,
    "Título": "Asignatura Pendiente",
    "Artista": "Ricky Martin",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/4nYE8K5ozd9HNfB2RC8o2c"
  },
  {
    "Número": 509,
    "Título": "Tal Vez",
    "Artista": "Ricky Martin",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/2VspVkHity8i4H9jammhhR"
  },
  {
    "Número": 510,
    "Título": "¿Quién Te Dijo Eso?",
    "Artista": "Luis Fonsi",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/159yUhKZg2ZAdt0HknTqDr"
  },
  {
    "Número": 511,
    "Título": "La Gota Fría",
    "Artista": "Carlos Vives",
    "Año": 1993,
    "Enlace": "https://open.spotify.com/intl-es/track/5ZaTqcL7zIreaVNeVy89Iu"
  },
  {
    "Número": 512,
    "Título": "La Tierra del Olvido (feat. Fanny Lu, Fonseca, Maluma, Andrea Echeverri, Cholo Valderrama, Coral Group & Herencia de Timbiquí) - 2015",
    "Artista": "Carlos Vives",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/5BIQR6Ibumf2WHKlKOJKJY"
  },
  {
    "Número": 513,
    "Título": "La Foto de los Dos",
    "Artista": "Carlos Vives",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/2VL0W9x83RwQOBGbfphBqW"
  },
  {
    "Número": 514,
    "Título": "Comeme (feat. Mario Diaz) - Directo Perito Moreno",
    "Artista": "Chambao",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/49Pgj28xm0VB2bDJP8sTwK"
  },
  {
    "Número": 515,
    "Título": "Duende del Sur",
    "Artista": "Chambao",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/41lhBc9EfGaO3IuU8nRXez"
  },
  {
    "Número": 516,
    "Título": "Ahí Estás Tú",
    "Artista": "Chambao",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/1dgFSrqG37FpmlZCmlKmP7"
  },
  {
    "Número": 517,
    "Título": "Papeles Mojados",
    "Artista": "Chambao",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/0S0cwed8nKU6bKRe9zaBfS"
  },
  {
    "Número": 518,
    "Título": "Camino Interior",
    "Artista": "Chambao",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/22ncPtijr5wH7yI9thKH2r"
  },
  {
    "Número": 519,
    "Título": "Rosa Maria",
    "Artista": "Chambao",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/5APS9osGIdLVezCDGRObvQ"
  },
  {
    "Número": 520,
    "Título": "No Tengas Miedo",
    "Artista": "El Canijo de Jerez",
    "Año": 2020,
    "Enlace": "https://open.spotify.com/intl-es/track/2SnqYwrwTZBdlDXlcOialK"
  },
  {
    "Número": 521,
    "Título": "Pokito a Poko",
    "Artista": "Chambao",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/7LrM28pPWCpJYmbnaxHBmu"
  },
  {
    "Número": 522,
    "Título": "Flowers",
    "Artista": "Miley Cyrus",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/7DSAEUvxU8FajXtRloy8M0"
  },
  {
    "Número": 523,
    "Título": "Sin Ti",
    "Artista": "Donato Y Estefano",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/6u0YdyiFdnCSDNid9YfRio"
  },
  {
    "Número": 524,
    "Título": "Por Amarte",
    "Artista": "Enrique Iglesias",
    "Año": 1996,
    "Enlace": "https://open.spotify.com/intl-es/track/2YZP4RIRbim5Aj3TNn1Q1s"
  },
  {
    "Número": 525,
    "Título": "Quizás",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/2KcfNuKNxdOG1dWqLbaBBu"
  },
  {
    "Número": 526,
    "Título": "ASI ES LA VIDA",
    "Artista": "Enrique Iglesias",
    "Año": 2023,
    "Enlace": "https://open.spotify.com/intl-es/track/0Me3GyNuLOa1YTIxhJPyCn"
  },
  {
    "Número": 527,
    "Título": "No Llores Por Mi",
    "Artista": "Enrique Iglesias",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/39eGhKvqaMB3bP2AYME4RW"
  },
  {
    "Número": 528,
    "Título": "Amárrame",
    "Artista": "Mon Laferte",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/3EK4tGkSiO5xvvB5sM4tln"
  },
  {
    "Número": 529,
    "Título": 506,
    "Artista": "Morat",
    "Año": 2022,
    "Enlace": "https://open.spotify.com/intl-es/track/4Q1oBLFPK9R4eUHkNlihlF"
  },
  {
    "Número": 530,
    "Título": "Yerbatero",
    "Artista": "Juanes",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/7jUwaYkoy1koPCjXlov21Y"
  },
  {
    "Número": 531,
    "Título": "Lo Que Me Gusta A Mi",
    "Artista": "Juanes",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/722QPOI0pGJJ0Y0P6ETzgE"
  },
  {
    "Número": 532,
    "Título": "Luna",
    "Artista": "Juanes",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/7sCu8xWNkxfzjoZU6aQSf1"
  },
  {
    "Número": 533,
    "Título": "Cómo Te Echo de Menos",
    "Artista": "Maria Del Monte",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/0VKZN2aoPi3MOskTrgEGBs"
  },
  {
    "Número": 534,
    "Título": "Caravana Rociera",
    "Artista": "Jose Manuel El Mani",
    "Año": 1997,
    "Enlace": "https://open.spotify.com/intl-es/track/28k9JZryrfnbP9p8fs4pgh"
  },
  {
    "Número": 535,
    "Título": "Nuevo día",
    "Artista": "Lole Y Manuel",
    "Año": 1975,
    "Enlace": "https://open.spotify.com/intl-es/track/4bFaDjWTSbudJdO9J0fp71"
  },
  {
    "Número": 536,
    "Título": "San Bernardino",
    "Artista": "Los Mismos",
    "Año": 1970,
    "Enlace": "https://open.spotify.com/intl-es/track/55SVZNGmaGEAOWFAEgQxt5"
  },
  {
    "Número": 537,
    "Título": "Cara de Gitana",
    "Artista": "Daniel Magal",
    "Año": 1977,
    "Enlace": "https://open.spotify.com/intl-es/track/6HJz946SNeoMZFcUjLf3j4"
  },
  {
    "Número": 538,
    "Título": "Infinity 2008 - Klaas Vocal Edit",
    "Artista": "Guru Josh Project",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/3aQz0z86zrKjd1mcZlonxE"
  },
  {
    "Número": 539,
    "Título": "Juntos",
    "Artista": "Paloma San Basilio",
    "Año": 2014,
    "Enlace": "https://open.spotify.com/intl-es/track/33aRBtGFUITyz7fYwSRe7O"
  },
  {
    "Número": 540,
    "Título": "No me hables - 2012 Remastered Version",
    "Artista": "Juan Pardo",
    "Año": 2012,
    "Enlace": "https://open.spotify.com/intl-es/track/5X7HaYdvc9Slc3D75kkkbl"
  },
  {
    "Número": 541,
    "Título": "Vivimos siempre juntos",
    "Artista": "Nacho Cano",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/17DrqnUASfxDK5OsHed5Jp"
  },
  {
    "Número": 542,
    "Título": "Gloria",
    "Artista": "Umberto Tozzi",
    "Año": 2009,
    "Enlace": "https://open.spotify.com/intl-es/track/4wMGxH3cJ8oDr6lG3bBrGL"
  },
  {
    "Número": 543,
    "Título": "Sera Porque Te Amo",
    "Artista": "Ricchi E Poveri",
    "Año": 2010,
    "Enlace": "https://open.spotify.com/intl-es/track/04Xdk7F9HgyHBcAwO7KE3F"
  },
  {
    "Número": 544,
    "Título": "Tú - Spanish Version",
    "Artista": "Umberto Tozzi",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/6H22ty6uyBfgyZHYgigunQ"
  },
  {
    "Número": 545,
    "Título": "Enseñame a Cantar",
    "Artista": "Micky",
    "Año": 2006,
    "Enlace": "https://open.spotify.com/intl-es/track/0U44GbCt9x8s7KW5VEVSV6"
  },
  {
    "Número": 546,
    "Título": "Agapimu",
    "Artista": "Ana Belén",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/1PseJZ9Iay7mpeonyxPBn3"
  },
  {
    "Número": 547,
    "Título": "Una de Dos",
    "Artista": "Luis Eduardo Aute",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/3HuUNpNC8x8FftKavzpd23"
  },
  {
    "Número": 548,
    "Título": "Mi Historia Entre Tus Dedos",
    "Artista": "Gianluca Grignani",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/6SatWYCXTZ2n7HDjWE1Voh"
  },
  {
    "Número": 549,
    "Título": "Black betty",
    "Artista": "Ram Jam",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/0DzwkXawqzpt0k7jxjfdEf"
  },
  {
    "Número": 550,
    "Título": "Ojos de hielo",
    "Artista": "Modestia Aparte",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/20oIUOyQioTLIs7s8fvSZP"
  },
  {
    "Número": 551,
    "Título": "El calor del amor en un bar",
    "Artista": "Gabinete Caligari",
    "Año": 2007,
    "Enlace": "https://open.spotify.com/intl-es/track/4k12blydLbcePLvuVSrSgE"
  },
  {
    "Número": 552,
    "Título": "Aire - Remastered",
    "Artista": "Pedro Marin",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/3QiRtWfWlZtLz43VbJRiEm"
  },
  {
    "Número": 553,
    "Título": "Este amor ya no se toca",
    "Artista": "Yuri",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/2v6CEhx4RpMSr8EXZYro7M"
  },
  {
    "Número": 554,
    "Título": "Aqui No Hay Playa",
    "Artista": "The Refrescos",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/7Ja3xxyLa5mdvAOlzBPXd2"
  },
  {
    "Número": 555,
    "Título": "Guardalo",
    "Artista": "Los Ronaldos",
    "Año": 2005,
    "Enlace": "https://open.spotify.com/intl-es/track/7gboHLP5Cyl957IdJRxoYj"
  },
  {
    "Número": 556,
    "Título": "Cuéntame un cuento",
    "Artista": "Celtas Cortos",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/7uou7DWqEQSNfxcfipxyIu"
  },
  {
    "Número": 557,
    "Título": "El rey del Glam",
    "Artista": "Alaska Y Dinarama",
    "Año": 1983,
    "Enlace": "https://open.spotify.com/intl-es/track/5p6FNeBGfW9oPdBOH8e161"
  },
  {
    "Número": 558,
    "Título": "Fantastico Amor",
    "Artista": "Eros Ramazzotti",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/4MpLgm6cxPZ1CTywsbMcoe"
  },
  {
    "Número": 559,
    "Título": "Cuando Brille el Sol",
    "Artista": "La Guardia",
    "Año": 1988,
    "Enlace": "https://open.spotify.com/intl-es/track/3BNy8c9gYaL63nL5DKHFMU"
  },
  {
    "Número": 560,
    "Título": "Perdóname",
    "Artista": "Camilo Sesto",
    "Año": 1980,
    "Enlace": "https://open.spotify.com/intl-es/track/3gO8mvkxIcyF9N7Vd1WM2i"
  },
  {
    "Número": 561,
    "Título": "Te Amo",
    "Artista": "Franco De Vita",
    "Año": 2011,
    "Enlace": "https://open.spotify.com/intl-es/track/4WtO0pdIHTuVwQAVFmfIHQ"
  },
  {
    "Número": 562,
    "Título": "Groenlandia",
    "Artista": "Zombies",
    "Año": 2008,
    "Enlace": "https://open.spotify.com/intl-es/track/4fecwWpiLBXPEt4h5g0M0n"
  },
  {
    "Número": 563,
    "Título": "Voy a mil",
    "Artista": "Ole Ole",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/43jXcwbCZJqEEZRkIXT8mJ"
  },
  {
    "Número": 564,
    "Título": "Todos los Negritos Tienen Hambre (Y Frío) - Vivo 1984",
    "Artista": "Glutamato Ye Ye",
    "Año": 2013,
    "Enlace": "https://open.spotify.com/intl-es/track/6xsvRkIKGEnMkMSKruiabe"
  },
  {
    "Número": 565,
    "Título": "Grita",
    "Artista": "Melon Diesel",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/0OvZ39UskFDLzbeatm0rbh"
  },
  {
    "Número": 566,
    "Título": "Aunque tú no lo sepas",
    "Artista": "Enrique Urquijo y Los problemas",
    "Año": 1998,
    "Enlace": "https://open.spotify.com/intl-es/track/2VybHZvsshGs8GpOaB0wS1"
  },
  {
    "Número": 567,
    "Título": "Pero a tu lado",
    "Artista": "Los Secretos",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/3JOXwHPhtdRU3kYKcf64Gj"
  },
  {
    "Número": 568,
    "Título": "Lo Mejor De Nuestra Vida - Remastered 2015",
    "Artista": "Antonio Vega",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/2JkWGgmz6LWJJmYT6lKjDY"
  },
  {
    "Número": 569,
    "Título": "Por el bulevar de los sueños rotos - 2017 Remaster",
    "Artista": "Los Secretos",
    "Año": 2017,
    "Enlace": "https://open.spotify.com/intl-es/track/633Z9EGuNeZ6fXvjD1gnN6"
  },
  {
    "Número": 570,
    "Título": "Se Dejaba Llevar Por Ti",
    "Artista": "Antonio Vega",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/0nLeNYebvsmLRDbFlgioSb"
  },
  {
    "Número": 571,
    "Título": "Insurreccion (En Directo)",
    "Artista": "El Último De La Fila",
    "Año": 2015,
    "Enlace": "https://open.spotify.com/intl-es/track/4SafR3a8senZ2r65hZWMKN"
  },
  {
    "Número": 572,
    "Título": "Vamos a la playa",
    "Artista": "Righeira",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/27nfrOYTDXfhzDd8Qcy2aj"
  },
  {
    "Número": 573,
    "Título": "No tengo dinero",
    "Artista": "Righeira",
    "Año": 2002,
    "Enlace": "https://open.spotify.com/intl-es/track/0TvVLMp0xt1CbXndXHilcg"
  },
  {
    "Número": 574,
    "Título": "Eloise",
    "Artista": "Tino Casal",
    "Año": 2003,
    "Enlace": "https://open.spotify.com/intl-es/track/3sLnj87dflDnVYDmSFWNGG"
  },
  {
    "Número": 575,
    "Título": "Ni tú ni nadie - Re-Mix",
    "Artista": "Alaska Y Dinarama",
    "Año": 2004,
    "Enlace": "https://open.spotify.com/intl-es/track/6Tv0aLcRRxgbK8ZNeSbFEw"
  },
  {
    "Número": 576,
    "Título": "Yo soy aquél",
    "Artista": "Raphael",
    "Año": 1967,
    "Enlace": "https://open.spotify.com/intl-es/track/4H71d1kJ8DB8J4atO8fbBl"
  },
  {
    "Número": 577,
    "Título": "Vamos Muy Bien",
    "Artista": "Obus",
    "Año": 1984,
    "Enlace": "https://open.spotify.com/intl-es/track/4YQ9WEYQG7fq0MAUYeB19Y"
  },
  {
    "Número": 578,
    "Título": "Despellejo",
    "Artista": "Marea",
    "Año": 1999,
    "Enlace": "https://open.spotify.com/intl-es/track/48NDGoswkW8hbg1IszYp2V"
  },
  {
    "Número": 579,
    "Título": "Sevilla Tiene un Color Especial",
    "Artista": "Los Del Rio",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/1x8tjll0oP07qkZWVtm8ap"
  },
  {
    "Número": 580,
    "Título": "Te Echo de Menos",
    "Artista": "La Trampa",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/6XBqSb8GsrLzTLcr5kwmUN"
  },
  {
    "Número": 581,
    "Título": "Cuando Duermes",
    "Artista": "Cómplices",
    "Año": 1991,
    "Enlace": "https://open.spotify.com/intl-es/track/5YrrTg4O6MTF2L7WlfotJn"
  },
  {
    "Número": 582,
    "Título": "Contamíname",
    "Artista": "Pedro Guerra",
    "Año": 1995,
    "Enlace": "https://open.spotify.com/intl-es/track/7Cd7umUyXCf7xWCVzgKlnZ"
  },
  {
    "Número": 583,
    "Título": "Delgadito",
    "Artista": "La Rabia Del Milenio",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/7vafezC0u0nftVpGF6jftk"
  },
  {
    "Número": 584,
    "Título": "Quiero Verte",
    "Artista": "Los Sobraos",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/5f2IRWXoaygkQkTr3yyS3Y"
  },
  {
    "Número": 585,
    "Título": "Bonito Es",
    "Artista": "Los Sencillos",
    "Año": 2001,
    "Enlace": "https://open.spotify.com/intl-es/track/3F7LwUGXeXIm7Br3QCxvd5"
  }
];

// 2. LA LÓGICA DE BÚSQUEDA
// Esta función se ejecuta cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const inputNumero = document.getElementById('input-numero');
    const botonBuscar = document.getElementById('boton-buscar');
    const divResultado = document.getElementById('resultado');

    // Función que busca y muestra la canción
    const buscarCancion = () => {
        const numeroBuscado = parseInt(inputNumero.value);

        // Validamos que el número sea válido
        if (isNaN(numeroBuscado) || numeroBuscado < 1 || numeroBuscado > 1000) {
            divResultado.innerHTML = `<p class="error">Por favor, introduce el número de tu tarjeta.</p>`;
            return;
        }

        // Buscamos la canción en nuestro array.
        // Como el array empieza en 0, restamos 1 al número.
        const cancionEncontrada = canciones.find(c => c.Número === numeroBuscado);

        // Mostramos el resultado
        if (cancionEncontrada) {
            divResultado.innerHTML = `
                <h2>#${cancionEncontrada.Número}: ${cancionEncontrada.Título}</h2>
                <p><strong>Artista:</strong> ${cancionEncontrada.Artista}</p>
                <p><strong>Año:</strong> ${cancionEncontrada.Año}</p>
                <a href="${cancionEncontrada.Enlace}" target="_blank" class="boton-reproducir">
                    ▶️ Escuchar en Spotify
                </a>
            `;
        } else {
            // Esto solo pasaría si faltan números en tu lista
            divResultado.innerHTML = `<p class="error">Canción no encontrada. ¡Qué raro!</p>`;
        }
    };

    // Asignamos la función al botón
    botonBuscar.addEventListener('click', buscarCancion);
    
    // Opcional: permitir buscar al presionar "Enter" en el campo de número
    inputNumero.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            buscarCancion();
        }
    });
});