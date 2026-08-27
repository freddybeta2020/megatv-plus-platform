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
        demoDurationHours: 4 // Horas de la prueba gratuita
    },

    // CONFIGURACIÓN DE WHATSAPP (¡Edita tu número aquí!)
    // Formato internacional sin signos ni espacios.
    whatsapp: {
        phoneNumber: "573013217824", // <-- WhatsApp Oficial de MEGATV+ (Colombia +57)
        defaultMessage: "Hola, vi su página web MEGATV+ y quiero más información sobre el servicio de IPTV.",
        demoMessage: "Hola! Me gustaría solicitar una prueba gratis (demo de 4 horas) de MEGATV+ para probar el servicio en mi dispositivo.",
        supportMessage: "Hola, necesito asistencia técnica o tengo una consulta sobre mi cuenta de MEGATV+."
    },

    // ESTADÍSTICAS Y CONTADORES
    stats: {
        liveChannels: "+15,000",
        vodMovies: "+50,000",
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
                "+15,000 Canales en Vivo (4K / FHD / HD)",
                "+60,000 Películas y Series (VOD Actualizado)",
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
                "+15,000 Canales en Vivo (4K / FHD / HD)",
                "+60,000 Películas y Series (Estrenos Semanales)",
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
                "+15,000 Canales Internacionales en Calidad 4K/FHD",
                "Catálogo Completo VOD (Películas y Series Actualizadas)",
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

    // CATÁLOGO DE PELÍCULAS Y SERIES VOD POPULARES
    vodCatalog: [
        {
            title: "Deadpool & Wolverine",
            type: "movie",
            category: "cine",
            platform: "Cine 4K",
            genre: "Acción / Marvel",
            rating: "8.1",
            year: "2026",
            quality: "4K UHD",
            badge: "ESTRENO",
            image: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
        },
        {
            title: "House of the Dragon",
            type: "series",
            category: "series",
            platform: "HBO Max",
            genre: "Fantasía / HBO",
            rating: "8.6",
            year: "2026",
            quality: "4K HDR",
            badge: "POPULAR",
            image: "https://image.tmdb.org/t/p/w500/7QMsOTMUswlwxJP0rTTZfmz2tX2.jpg"
        },
        {
            title: "Intensamente 2",
            type: "movie",
            category: "infantil",
            platform: "Disney+ Pixar",
            genre: "Animación / Familiar",
            rating: "7.9",
            year: "2026",
            quality: "4K FHD",
            badge: "FAMILIAR",
            image: "https://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
        },
        {
            title: "Dune: Parte Dos",
            type: "movie",
            category: "cine",
            platform: "Warner Bros",
            genre: "Ciencia Ficción",
            rating: "8.5",
            year: "2026",
            quality: "4K IMAX",
            badge: "TOP CINE",
            image: "https://image.tmdb.org/t/p/w500/czembW0Rk1Ke7lCJGahbOhdCuhV.jpg"
        },
        {
            title: "The Boys",
            type: "series",
            category: "series",
            platform: "Prime Video",
            genre: "Acción / Superhéroes",
            rating: "8.7",
            year: "2026",
            quality: "4K UHD",
            badge: "TENDENCIA",
            image: "https://image.tmdb.org/t/p/w500/in1R2dDc421JxsoRWaIIAqVI2KE.jpg"
        },
        {
            title: "Stranger Things",
            type: "series",
            category: "series",
            platform: "Netflix",
            genre: "Misterio / Terror",
            rating: "8.7",
            year: "2026",
            quality: "4K Dolby",
            badge: "EXCLUSIVO",
            image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg"
        },
        {
            title: "Gladiator II",
            type: "movie",
            category: "cine",
            platform: "Paramount 4K",
            genre: "Épico / Acción",
            rating: "8.2",
            year: "2026",
            quality: "4K UHD",
            badge: "ESTRENO",
            image: "https://image.tmdb.org/t/p/w500/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg"
        },
        {
            title: "The Bear (El Oso)",
            type: "series",
            category: "series",
            platform: "Star+ / FX",
            genre: "Drama / Aclamada",
            rating: "8.6",
            year: "2026",
            quality: "4K FHD",
            badge: "PREMIADA",
            image: "https://image.tmdb.org/t/p/w500/eKfVzzEazSIjJMrw9ADa2x8ksLz.jpg"
        },
        {
            title: "Godzilla x Kong",
            type: "movie",
            category: "cine",
            platform: "Warner 4K",
            genre: "Acción / Titanes",
            rating: "7.4",
            year: "2026",
            quality: "4K UHD",
            badge: "BLOCKBUSTER",
            image: "https://image.tmdb.org/t/p/w500/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg"
        },
        {
            title: "Mi Villano Favorito 4",
            type: "movie",
            category: "infantil",
            platform: "Illumination",
            genre: "Animación / Comedia",
            rating: "7.5",
            year: "2026",
            quality: "4K FHD",
            badge: "INFANTIL",
            image: "https://image.tmdb.org/t/p/w500/wWba3TaojhK7NdycRhoQpsG0FaH.jpg"
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
            a: "¡Sí, por supuesto! Ofrecemos una prueba gratuita de demostración (demo de 4 horas) para que compruebes la calidad de imagen, la estabilidad de los servidores y el catálogo completo antes de tomar una decisión."
        },
        {
            q: "¿En cuántos dispositivos puedo usar el servicio?",
            a: "Puedes instalar la app en todos tus dispositivos, pero la cantidad de pantallas que pueden reproducir contenido al mismo tiempo dependerá del plan que elijas (1, 2 o 3 pantallas simultáneas)."
        },
        {
            q: "¿Cuáles son los métodos de pago aceptados?",
            a: "Aceptamos múltiples métodos de pago seguros: Tarjetas de Débito/Crédito, PayPal, Transferencias bancarias locales (según tu país), Mercado Pago, Zelle, Bizum y Criptomonedas (USDT/Bitcoin)."
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
            a: "El servicio de MEGATV+ te incluye acceso total a la lista de más de 15,000 canales, películas y series en vivo. Si la aplicación reproductora que decides instalar en tu Smart TV requiere una licencia de activación propia de sus desarrolladores (como IBO Player, Bay TV, Bob Player o SET IPTV), dicho valor es propio de la app y se cancela por separado."
        }
    ],

    // MÓDULO DE IA (Knowledge Base del Chatbot Inteligente)
    aiChatbot: {
        agentName: "MegaBot AI",
        agentRole: "Asesor Inteligente MEGATV+",
        welcomeMessage: "👋 ¡Hola! Soy **MegaBot**, tu asesor de **MEGATV+**. Puedo responder tus dudas sobre canales, compatibilidad, apps recomendadas o ayudarte a activar tu **Prueba Gratis de 4 Horas**.",
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
