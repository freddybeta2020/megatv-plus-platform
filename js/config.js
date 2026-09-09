/**
 * ARCHIVO DE CONFIGURACIÓN CENTRAL - IPTV PRO WEB
 * Personaliza aquí tus datos de contacto, marca, precios y respuestas de la IA.
 * Todos los cambios realizados aquí se reflejan automáticamente en toda la web.
 */

const IPTV_CONFIG = {
    // INFORMACIÓN DE LA MARCA
    brand: {
        name: "MEGATV+",
        slogan: "Tu televisión favorita en 4K y Full HD, sin contratos ni antenas",
        currency: "USD",
        currencySymbol: "$",
        supportHours: "24/7 Soporte Técnico y Atención en Línea",
        email: "contacto@megatvplus.com",
        location: "Servicio Internacional",
        demoDurationHours: 6 // Horas de la prueba gratuita
    },

    // CONFIGURACIÓN DE WHATSAPP (¡Edita tu número aquí!)
    // Formato internacional sin signos ni espacios.
    whatsapp: {
        phoneNumber: "573013217824", // <-- WhatsApp Oficial de MEGATV+ (Colombia +57)
        defaultMessage: "Hola, vi su página web MEGATV+ y quiero más información sobre el servicio de IPTV.",
        demoMessage: "Hola! Me gustaría solicitar una prueba gratis (demo de 6 horas) de MEGATV+ para probar el servicio en mi dispositivo.",
        supportMessage: "Hola, necesito asistencia técnica o tengo una consulta sobre mi cuenta de MEGATV+."
    },

    // ESTADÍSTICAS Y CONTADORES
    stats: {
        liveChannels: "+8,000",
        vodMovies: "+20,000",
        vodSeries: "+12,000",
        uptime: "99.9%",
        happyClients: "+28,500"
    },

    // CONFIGURACIÓN DE PLANES Y PRECIOS (Valores redondeados en USD)
    plans: [
        {
            id: "plan-1mes",
            name: "Plan Básico (1 Pantalla)",
            popular: false,
            badge: "Ideal Individual",
            devices: "1 Dispositivo",
            prices: {
                monthly: 10,
                threeMonths: 29,
                sixMonths: 55,
                yearly: 112
            },
            bonusMonths: {
                monthly: "1 Mes de Servicio",
                threeMonths: "🎁 ¡Paga 3 y recibe 4 Meses (1 Mes GRATIS)!",
                sixMonths: "🎁 ¡Paga 6 y recibe 8 Meses (2 Meses GRATIS)!",
                yearly: "🚀 ¡Paga 12 y recibe 15 Meses (3 Meses GRATIS)!"
            },
            features: [
                "1 Pantalla o Dispositivo",
                "+8,000 Canales en Vivo (4K / FHD / HD)",
                "+20,000 Películas y Series (VOD Actualizado)",
                "Deportes Premium, PPV y Ligas del Mundo",
                "Guía de Programación Interactiva (EPG)",
                "Compatible con Smart TV, Firestick, Móvil y PC",
                "Calidad Estable sin Congelamientos (Anti-Freeze)",
                "Soporte 24/7 vía WhatsApp y Agente IA"
            ],
            ctaText: "Contratar 1 Dispositivo",
            waText: "Hola! Deseo contratar el Plan Básico de 1 Dispositivo en MEGATV+."
        },
        {
            id: "plan-pro",
            name: "Plan Pro Duo (2 Pantallas)",
            popular: true,
            badge: "🔥 MÁS POPULAR",
            devices: "2 Dispositivos Simultáneos",
            prices: {
                monthly: 12,
                threeMonths: 34,
                sixMonths: 61,
                yearly: 119
            },
            bonusMonths: {
                monthly: "1 Mes de Servicio",
                threeMonths: "🎁 ¡Paga 3 y recibe 4 Meses (1 Mes GRATIS)!",
                sixMonths: "🎁 ¡Paga 6 y recibe 8 Meses (2 Meses GRATIS)!",
                yearly: "🚀 ¡Paga 12 y recibe 15 Meses (3 Meses GRATIS)!"
            },
            features: [
                "2 Pantallas en Simultáneo",
                "+8,000 Canales en Vivo (4K / FHD / HD)",
                "+20,000 Películas y Series (Estrenos Semanales)",
                "Canales Deportivos Exclusivos y Eventos PPV",
                "Guía EPG + Canales de Adultos (Opcional con PIN)",
                "Servidores Ultra Rápidos CDN con Anti-Buffer",
                "Activación Inmediata en menos de 5 minutos",
                "Soporte VIP Prioritario por WhatsApp"
            ],
            ctaText: "Contratar 2 Dispositivos",
            waText: "Hola! Deseo contratar el Plan Pro Duo (2 Dispositivos) en MEGATV+."
        },
        {
            id: "plan-family",
            name: "Plan Familiar (3 Pantallas)",
            popular: false,
            badge: "Máximo Ahorro Familiar",
            devices: "3 Dispositivos Simultáneos",
            prices: {
                monthly: 14,
                threeMonths: 39,
                sixMonths: 71,
                yearly: 129
            },
            bonusMonths: {
                monthly: "1 Mes de Servicio",
                threeMonths: "🎁 ¡Paga 3 y recibe 4 Meses (1 Mes GRATIS)!",
                sixMonths: "🎁 ¡Paga 6 y recibe 8 Meses (2 Meses GRATIS)!",
                yearly: "🚀 ¡Paga 12 y recibe 15 Meses (3 Meses GRATIS)!"
            },
            features: [
                "3 Pantallas en Simultáneo para toda la familia",
                "+8,000 Canales Internacionales en Calidad 4K/FHD",
                "Catálogo Completo VOD (+20,000 Películas y Series)",
                "Fútbol en Vivo, Champions League, UFC, F1 y NBA",
                "Contenido Infantil, Documentales y Noticias 24/7",
                "Servidor Dedicado de Alta Disponibilidad",
                "Activación Instantánea sin contratos",
                "Atención y Garantía Total de Servicio"
            ],
            ctaText: "Contratar 3 Dispositivos",
            waText: "Hola! Me interesa el Plan Familiar (3 Dispositivos) en MEGATV+."
        }
    ],

    // CATÁLOGO DE PELÍCULAS Y SERIES VOD POPULARES (METADATOS COMPLETOS ESTILO NETFLIX)
    vodCatalog: [
        {
            title: "Deadpool & Wolverine",
            type: "movie",
            category: "cine",
            platform: "Marvel Studios 4K",
            genre: "Acción / Comedia",
            rating: "8.1",
            year: "2026",
            duration: "2h 08min",
            contentRating: "+16",
            quality: "4K Ultra HD",
            audio: "Español Latino (Dolby 5.1) • Inglés Subtitulado",
            cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin, Matthew Macfadyen",
            synopsis: "Wade Wilson se afana en su vida civil dejando atrás sus días como Deadpool. Pero cuando su mundo natal se enfrenta a una amenaza existencial, debe convencer a un reticente Wolverine para salvar el multiverso.",
            badge: "ESTRENO TOP",
            image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
            trailerId: "73_1biulkYk"
        },
        {
            title: "Betty la Fea: La Historia Continúa",
            type: "series",
            category: "series",
            platform: "Prime Video 4K",
            genre: "Comedia / Drama Latino",
            rating: "8.5",
            year: "2026",
            duration: "1 Temporada (10 Eps)",
            contentRating: "+13",
            quality: "4K Ultra HD",
            audio: "Español Latino Original (Dolby Atmos)",
            cast: "Ana María Orozco, Jorge Enrique Abello, Lorna Cepeda, Natalia Ramírez, Julián Arango",
            synopsis: "20 años después del desenlace original, una empoderada Beatriz Pinzón Solano sigue casada con Armando Mendoza y trabaja en reconstruir la relación con su hija adolescente mientras afronta una nueva crisis en Ecomoda.",
            badge: "FENÓMENO LATINO",
            image: "https://image.tmdb.org/t/p/w500/huEeQQBmZsZ5qDXkWl0pS5vPWIU.jpg",
            trailerId: "fAHzw3n7T3g"
        },
        {
            title: "El Pingüino (The Penguin)",
            type: "series",
            category: "series",
            platform: "HBO Max 4K",
            genre: "Crimen / Suspenso",
            rating: "8.8",
            year: "2026",
            duration: "1 Temporada (8 Eps)",
            contentRating: "+18",
            quality: "4K Dolby Vision",
            audio: "Español Latino 5.1 • Inglés Dolby Atmos",
            cast: "Colin Farrell, Cristin Milioti, Rhenzy Feliz, Mark Strong, Clancy Brown",
            synopsis: "Tras los eventos de The Batman, Oswald Cobblepot (El Pingüino) aprovecha el vacío de poder en Gotham City para emprender un despiadado ascenso al mando de los bajos fondos criminales.",
            badge: "SERIE DEL AÑO",
            image: "https://image.tmdb.org/t/p/w500/vOWcqC4oDQws1doDWLO7d3dh5qc.jpg",
            trailerId: "sfJG6hODgac"
        },
        {
            title: "Cien Años de Soledad",
            type: "series",
            category: "series",
            platform: "Netflix 4K",
            genre: "Drama / Realismo Mágico",
            rating: "8.9",
            year: "2026",
            duration: "1 Temporada (8 Eps)",
            contentRating: "+16",
            quality: "4K Dolby Vision",
            audio: "Español Latino 5.1 • Audio Espacial",
            cast: "Claudio Cataño, Susana Morales, Marco González, Leonardo Soto, Jerónimo Barón",
            synopsis: "La histórica adaptación de la obra cumbre de Gabriel García Márquez. Los primos José Arcadio Buendía y Úrsula Iguarán fundan el mítico pueblo de Macondo, desencadenando el destino de siete generaciones.",
            badge: "OBRA MAESTRA",
            image: "https://upload.wikimedia.org/wikipedia/en/f/fa/One_Hundred_Years_of_Solitude_Netflix.jpg",
            trailerId: "n3rPkwL2BvE"
        },
        {
            title: "Stranger Things",
            type: "series",
            category: "series",
            platform: "Netflix 4K",
            genre: "Misterio / Ciencia Ficción",
            rating: "8.7",
            year: "2026",
            duration: "4 Temporadas (34 Eps)",
            contentRating: "+16",
            quality: "4K Dolby Vision",
            audio: "Español Latino 5.1 • Dolby Atmos",
            cast: "Millie Bobby Brown, Finn Wolfhard, Winona Ryder, David Harbour, Gaten Matarazzo",
            synopsis: "Cuando un niño desaparece misteriosamente en Hawkins, sus amigos y familia descubren secretos gubernamentales oscuros, fuerzas sobrenaturales y el aterrador mundo del Otro Lado.",
            badge: "TOP USA",
            image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            trailerId: "b9EkMc79ZSU"
        },
        {
            title: "The Boys",
            type: "series",
            category: "series",
            platform: "Prime Video 4K",
            genre: "Acción / Superhéroes",
            rating: "8.7",
            year: "2026",
            duration: "4 Temporadas (32 Eps)",
            contentRating: "+18",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Subtítulos Completos",
            cast: "Karl Urban, Jack Quaid, Antony Starr, Erin Moriarty, Jensen Ackles",
            synopsis: "En un mundo donde los superhéroes abusan de su poder, un grupo de justicieros clandestinos liderados por Billy Butcher se propone destruir a los corruptos 'Siete' y a Vought International.",
            badge: "TENDENCIA USA",
            image: "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
            trailerId: "K8g_ijN3R2w"
        },
        {
            title: "Shōgun",
            type: "series",
            category: "series",
            platform: "Disney+ / FX 4K",
            genre: "Histórico / Épico",
            rating: "8.7",
            year: "2026",
            duration: "1 Temporada (10 Eps)",
            contentRating: "+18",
            quality: "4K IMAX Enhanced",
            audio: "Español Latino 5.1 • Doblaje & Subtítulos",
            cast: "Hiroyuki Sanada, Cosmo Jarvis, Anna Sawai, Tadanobu Asano, Takehiro Hira",
            synopsis: "En el Japón feudal de 1600, Lord Yoshii Toranaga lucha por su supervivencia frente a sus enemigos políticos cuando un barco europeo encalla con secretos cruciales para el destino del imperio.",
            badge: "GANADORA EMMY",
            image: "https://image.tmdb.org/t/p/w500/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
            trailerId: "yKfuw15lAec"
        },
        {
            title: "The Bear (El Oso)",
            type: "series",
            category: "series",
            platform: "Star+ / FX 4K",
            genre: "Drama / Gastronomía",
            rating: "8.6",
            year: "2026",
            duration: "3 Temporadas (28 Eps)",
            contentRating: "+16",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Inglés Subtitulado",
            cast: "Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri, Lionel Boyce",
            synopsis: "Carmy, un joven chef de alta cocina, regresa a Chicago para transformar el modesto restaurante de sándwiches de su familia, mientras lidia con el duelo y su apasionado equipo de cocina.",
            badge: "PREMIADA USA",
            image: "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg",
            trailerId: "i5U-w1yL4r0"
        },
        {
            title: "Gladiator II",
            type: "movie",
            category: "cine",
            platform: "Paramount 4K",
            genre: "Épico / Acción",
            rating: "8.2",
            year: "2026",
            duration: "2h 28min",
            contentRating: "+16",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Subtítulos en Español",
            cast: "Paul Mescal, Pedro Pascal, Denzel Washington, Connie Nielsen, Joseph Quinn",
            synopsis: "Años después del sacrificio de Máximo, Lucio es forzado a entrar a la arena del Coliseo tras ver su hogar conquistado por los tiránicos emperadores que someten a Roma.",
            badge: "ESTRENO CINE",
            image: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
            trailerId: "4rgYUipGJNo"
        },
        {
            title: "Bad Boys: Hasta la Muerte",
            type: "movie",
            category: "cine",
            platform: "Sony Pictures 4K",
            genre: "Acción / Comedia",
            rating: "7.9",
            year: "2026",
            duration: "1h 55min",
            contentRating: "+16",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Dolby Atmos",
            cast: "Will Smith, Martin Lawrence, Vanessa Hudgens, Alexander Ludwig, Paola Núñez",
            synopsis: "Los policías más rebeldes de Miami regresan a la acción. Mike Lowrey y Marcus Burnett se convierten en fugitivos tras ser víctimas de una conspiración que involucra a su difunto capitán.",
            badge: "ÉXITO MIAMI",
            image: "https://image.tmdb.org/t/p/w500/nP6RliHjxsz4irTKsxe8FRhKZYl.jpg",
            trailerId: "hRFY_Fesa9Q"
        },
        {
            title: "Beetlejuice Beetlejuice",
            type: "movie",
            category: "cine",
            platform: "Warner Bros 4K",
            genre: "Fantasía / Comedia",
            rating: "7.7",
            year: "2026",
            duration: "1h 45min",
            contentRating: "+13",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Subtítulos en Español",
            cast: "Michael Keaton, Winona Ryder, Jenna Ortega, Catherine O'Hara, Willem Dafoe",
            synopsis: "Tras una inesperada tragedia, tres generaciones de la familia Deetz regresan a Winter River. La tranquilidad se rompe cuando la rebelde Astrid abre el portal al Más Allá y libera nuevamente a Beetlejuice.",
            badge: "TOP TAQUILLA",
            image: "https://image.tmdb.org/t/p/w500/nnl6OWkyPpuMm595hmAxNW3rZFn.jpg",
            trailerId: "As-vKW4ZboI"
        },
        {
            title: "El Reino del Planeta de los Simios",
            type: "movie",
            category: "cine",
            platform: "20th Century 4K",
            genre: "Ciencia Ficción / Aventura",
            rating: "7.8",
            year: "2026",
            duration: "2h 25min",
            contentRating: "+13",
            quality: "4K IMAX Enhanced",
            audio: "Español Latino 5.1 • Dolby Atmos",
            cast: "Owen Teague, Freya Allan, Kevin Durand, Peter Macon, William H. Macy",
            synopsis: "Muchas generaciones después del reinado de César, un joven simio emprende un viaje desgarrador que le llevará a cuestionar todo lo que le han enseñado sobre el pasado y a tomar decisiones cruciales para el futuro.",
            badge: "BLOCKBUSTER",
            image: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg",
            trailerId: "XtFI7SNtVpY"
        },
        {
            title: "Alien: Romulus",
            type: "movie",
            category: "cine",
            platform: "20th Century 4K",
            genre: "Terror / Ciencia Ficción",
            rating: "7.6",
            year: "2026",
            duration: "1h 59min",
            contentRating: "+18",
            quality: "4K IMAX Enhanced",
            audio: "Español Latino 5.1 • Dolby Atmos",
            cast: "Cailee Spaeny, David Jonsson, Archie Renaux, Isabela Merced",
            synopsis: "En una estación espacial abandonada, un grupo de jóvenes colonizadores se topa con la forma de vida más letal del universo en una lucha sin tregua por sobrevivir.",
            badge: "ESTRENO",
            image: "https://image.tmdb.org/t/p/w500/2uSWRTtCG336nuBiG8jOTEUKSy8.jpg",
            trailerId: "x0XDEhP4MQs"
        },
        {
            title: "Dune: Parte Dos",
            type: "movie",
            category: "cine",
            platform: "Warner Bros 4K",
            genre: "Ciencia Ficción / Épico",
            rating: "8.5",
            year: "2026",
            duration: "2h 46min",
            contentRating: "+13",
            quality: "4K IMAX Enhanced",
            audio: "Español Latino 5.1 • Dolby Atmos",
            cast: "Timothée Chalamet, Zendaya, Rebecca Ferguson, Javier Bardem, Austin Butler",
            synopsis: "Paul Atreides se une a Chani y a los Fremen en su cruzada de venganza contra los conspiradores que destruyeron a su familia, intentando evitar un futuro apocalíptico.",
            badge: "TOP CINE",
            image: "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg",
            trailerId: "Way9Dexny3w"
        },
        {
            title: "Moana 2",
            type: "movie",
            category: "infantil",
            platform: "Disney+ 4K",
            genre: "Animación / Aventura",
            rating: "8.0",
            year: "2026",
            duration: "1h 40min",
            contentRating: "Para Todos",
            quality: "4K Dolby Vision",
            audio: "Español Latino 5.1 • Canciones Originales",
            cast: "Auli'i Cravalho, Dwayne Johnson, Alan Tudyk, Nicole Scherzinger",
            synopsis: "Tras recibir una inesperada llamada de sus antepasados navegantes, Moana viaja hacia mares lejanos para una aventura sin precedentes junto a Maui.",
            badge: "TAQUILLERA",
            image: "https://image.tmdb.org/t/p/w500/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            trailerId: "hDZ7y8RP5HE"
        },
        {
            title: "Intensamente 2",
            type: "movie",
            category: "infantil",
            platform: "Disney+ Pixar",
            genre: "Animación / Familiar",
            rating: "7.9",
            year: "2026",
            duration: "1h 36min",
            contentRating: "Para Todos",
            quality: "4K Ultra HD",
            audio: "Español Latino 5.1 • Doblaje Original",
            cast: "Amy Poehler, Maya Hawke, Kensington Tallman, Liza Lapira, Tony Hale",
            synopsis: "Las emociones de Riley sufren una repentina demolición en su sede central para dar paso a nuevas emociones adolescentes: ¡Ansiedad, Envidia, Vergüenza y Ennui!",
            badge: "FAMILIAR",
            image: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
            trailerId: "LEjhY15eCx0"
        }
    ],

    // DISPOSITIVOS Y APPS COMPATIBLES
    devicesList: [
        {
            category: "smarttv",
            title: "Smart TV (Samsung, LG, Sony, Philips, Hisense)",
            apps: ["IBO Player", "Bay TV", "SmartOne", "Bob Player", "SET IPTV"],
            description: "Disfruta de la mejor interfaz directo desde la tienda oficial de aplicaciones de tu televisor.",
            icon: "tv"
        },
        {
            category: "firestick",
            title: "Amazon Fire TV Stick & Xiaomi Mi Stick",
            apps: ["Downloader", "TiviMate IPTV", "IPTV Smarters Pro", "XCIPTV"],
            description: "Máxima fluidez y rapidez en navegación usando el dispositivo de streaming de Amazon.",
            icon: "fire"
        },
        {
            category: "androidbox",
            title: "TV Box & Android TV (Google TV, Chromecast)",
            apps: ["TiviMate (Recomendada)", "IPTV Smarters Pro", "Televizo", "OTT Navigator"],
            description: "Compatible con cualquier caja Android, Chromecast 4 con Google TV y Nvidia Shield.",
            icon: "box"
        },
        {
            category: "mobile",
            title: "Celulares y Tablets (Android & iOS / iPhone / iPad)",
            apps: ["GSE Smart IPTV", "IPTV Smarters Player", "Smarters Lite", "247 IPTV Player"],
            description: "Lleva tus partidos, series y películas favoritas a donde vayas en tu smartphone.",
            icon: "smartphone"
        },
        {
            category: "computer",
            title: "Computadoras (Windows, Mac & Linux)",
            apps: ["VLC Media Player", "IPTV Smarters Pro PC", "Web Player en Navegador"],
            description: "Mira desde tu laptop o navegador web sin necesidad de configuraciones complejas.",
            icon: "laptop"
        }
    ],

    // PREGUNTAS FRECUENTES (Para la web y base de conocimiento de la IA)
    faqs: [
        {
            q: "¿Qué es IPTV y cómo funciona?",
            a: "IPTV es la transmisión de canales de televisión, películas y series a través de tu conexión a internet, sin necesidad de cables, antenas parabólicas ni decodificadores costosos. Solo necesitas una app en tu dispositivo y las credenciales que te enviamos tras tu activación."
        },
        {
            q: "¿Qué velocidad de internet necesito?",
            a: "Recomendamos un mínimo de 15 a 20 Mbps para canales en HD y Full HD, y 30 a 50 Mbps para contenido en 4K UHD. Es preferible conectar tu dispositivo por cable de red (Ethernet) o WiFi 5GHz para evitar interferencias."
        },
        {
            q: "¿Puedo solicitar una prueba gratis antes de pagar?",
            a: "¡Sí, por supuesto! Ofrecemos una prueba gratuita de demostración (demo de 6 horas) para que compruebes la calidad de imagen, la estabilidad de los servidores y el catálogo completo antes de tomar una decisión."
        },
        {
            q: "¿En cuántos dispositivos puedo usar el servicio?",
            a: "Puedes instalar la app en todos tus dispositivos, pero la cantidad de pantallas que pueden reproducir contenido al mismo tiempo dependerá del plan que elijas (1, 2 o 3 pantallas simultáneas)."
        },
        {
            q: "¿Cuáles son los métodos de pago aceptados?",
            a: "Aceptamos múltiples métodos de pago seguros e internacionales: Tarjetas de Débito/Crédito Internacionales (Visa, Mastercard, Amex), PayPal, Western Union (giros en efectivo y app digital), Mercado Pago y Transferencias Bancarias / Remesas."
        },
        {
            q: "¿Cuánto tarda la activación después del pago?",
            a: "La activación es casi inmediata. Una vez confirmado tu pago, nuestro equipo te entrega tus credenciales (Usuario, Contraseña y URL del Servidor) en menos de 5 a 10 minutos con una guía paso a paso para tu dispositivo."
        },
        {
            q: "¿Qué canales deportivos y eventos en vivo incluye?",
            a: "Incluye todos los canales deportivos de Latinoamérica, España, USA e internacionales: Champions League, Copa Libertadores, Premier League, LaLiga, Serie A, Fórmula 1, UFC, NBA, MLB, NFL, canales PPV de boxeo y eventos especiales sin costo adicional."
        },
        {
            q: "¿Las apps de Smart TV requieren licencia adicional?",
            a: "El servicio de MEGATV+ te incluye acceso total a la lista de más de 8,000 canales, películas y series en vivo. Si la aplicación reproductora que decides instalar en tu Smart TV requiere una licencia de activación propia de sus desarrolladores (como IBO Player, Bay TV, Bob Player o SET IPTV), dicho valor es propio de la app y se cancela por separado."
        }
    ],

    // MÓDULO DE IA (Knowledge Base del Chatbot Inteligente)
    aiChatbot: {
        agentName: "MegaBot AI",
        agentRole: "Asesor Inteligente MEGATV+",
        welcomeMessage: "👋 ¡Hola! Soy **MegaBot**, tu asesor de **MEGATV+**. Puedo responder tus dudas sobre canales, compatibilidad, apps recomendadas o ayudarte a activar tu **Prueba Gratis de 6 Horas**.",
        quickReplies: [
            "🚀 Pedir Prueba Gratis",
            "💎 Ver Precios y Planes",
            "📺 ¿Cómo instalar en mi TV?",
            "⚽ Canales de Deportes",
            "💳 Métodos de Pago",
            "💬 Hablar con un Asesor Humano"
        ],
        // Opcional: Clave API si el usuario desea conectar Google Gemini en tiempo real
        geminiApiKey: "" 
    }
};

// Exportar globalmente
if (typeof window !== "undefined") {
    window.IPTV_CONFIG = IPTV_CONFIG;
}
