/**
 * AGENTE DE INTELIGENCIA ARTIFICIAL CONVERSACIONAL - CHATBOT
 * Responde en tiempo real, califica prospectos, resuelve dudas sobre IPTV y redirige a WhatsApp
 */

(function () {
    // Referencias al DOM
    let chatWindow, chatBody, chatInput, sendBtn, triggerBtn, closeBtn, quickRepliesBox, badgeEl;

    // Estado del Chat
    let isChatOpen = false;
    let messageHistory = [];

    // Inicialización al cargar el DOM
    document.addEventListener("DOMContentLoaded", () => {
        initChatbotElements();
        initEventListeners();
        renderQuickReplies();
        // Mostrar mensaje de bienvenida tras breve retraso
        setTimeout(() => {
            sendBotMessage(IPTV_CONFIG.aiChatbot.welcomeMessage);
        }, 800);
    });

    function initChatbotElements() {
        chatWindow = document.getElementById("chatbotWindow");
        chatBody = document.getElementById("chatbotBody");
        chatInput = document.getElementById("chatbotInput");
        sendBtn = document.getElementById("chatbotSendBtn");
        triggerBtn = document.getElementById("chatbotTrigger");
        closeBtn = document.getElementById("chatbotCloseBtn");
        quickRepliesBox = document.getElementById("chatbotQuickReplies");
        badgeEl = document.getElementById("chatbotBadge");
    }

    function initEventListeners() {
        if (triggerBtn) {
            triggerBtn.addEventListener("click", toggleChat);
        }
        if (closeBtn) {
            closeBtn.addEventListener("click", closeChat);
        }
        if (sendBtn) {
            sendBtn.addEventListener("click", handleUserSend);
        }
        if (chatInput) {
            chatInput.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    e.preventDefault();
                    handleUserSend();
                }
            });
        }
    }

    function toggleChat() {
        if (isChatOpen) {
            closeChat();
        } else {
            openChat();
        }
    }

    function openChat() {
        isChatOpen = true;
        chatWindow.classList.add("open");
        if (badgeEl) badgeEl.style.display = "none";
        setTimeout(() => {
            if (chatInput) chatInput.focus();
        }, 200);
    }

    function closeChat() {
        isChatOpen = false;
        chatWindow.classList.remove("open");
    }

    // Renderizar botones de acción rápida
    function renderQuickReplies() {
        if (!quickRepliesBox) return;
        quickRepliesBox.innerHTML = "";
        IPTV_CONFIG.aiChatbot.quickReplies.forEach(text => {
            const chip = document.createElement("button");
            chip.className = "quick-chip";
            chip.textContent = text;
            chip.addEventListener("click", () => {
                addUserMessage(text);
                processUserQuery(text);
            });
            quickRepliesBox.appendChild(chip);
        });
    }

    function handleUserSend() {
        const text = chatInput.value.trim();
        if (!text) return;
        chatInput.value = "";
        addUserMessage(text);
        processUserQuery(text);
    }

    function addUserMessage(text) {
        const msgDiv = document.createElement("div");
        msgDiv.className = "chat-msg user";
        msgDiv.innerHTML = `
            <div class="msg-bubble">${escapeHtml(text)}</div>
            <span class="msg-time">${getCurrentTime()}</span>
        `;
        chatBody.appendChild(msgDiv);
        scrollToBottom();
        messageHistory.push({ role: "user", text: text });
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement("div");
        typingDiv.className = "typing-indicator";
        typingDiv.id = "typingIndicator";
        typingDiv.innerHTML = `
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
            <span class="typing-dot"></span>
        `;
        chatBody.appendChild(typingDiv);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const el = document.getElementById("typingIndicator");
        if (el) el.remove();
    }

    function sendBotMessage(text, ctaData = null) {
        showTypingIndicator();

        // Simular tiempo de respuesta natural
        setTimeout(() => {
            removeTypingIndicator();
            const msgDiv = document.createElement("div");
            msgDiv.className = "chat-msg bot";

            let formattedText = formatMarkdownText(text);

            let ctaHtml = "";
            if (ctaData) {
                const encodedWa = encodeURIComponent(ctaData.waText || IPTV_CONFIG.whatsapp.defaultMessage);
                const waLink = `https://wa.me/${IPTV_CONFIG.whatsapp.phoneNumber}?text=${encodedWa}`;
                ctaHtml = `
                    <div class="bot-action-card">
                        <p>${ctaData.prompt || "👉 Continúa tu pedido directamente con un asesor:"}</p>
                        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm btn-full">
                            <i class="fab fa-whatsapp"></i> ${ctaData.btnText || "Abrir en WhatsApp"}
                        </a>
                    </div>
                `;
            }

            msgDiv.innerHTML = `
                <div class="msg-bubble">${formattedText} ${ctaHtml}</div>
                <span class="msg-time">${getCurrentTime()}</span>
            `;
            chatBody.appendChild(msgDiv);
            scrollToBottom();
            messageHistory.push({ role: "bot", text: text });
        }, 650);
    }

    /**
     * MOTOR DE INTELIGENCIA CONVERSACIONAL Y CLASIFICACIÓN DE INTENCIONES
     */
    function processUserQuery(userText) {
        const query = userText.toLowerCase().trim();

        // 1. Detección de Intención: PRUEBA GRATIS / DEMO
        if (query.includes("prueba") || query.includes("demo") || query.includes("test") || query.includes("gratis") || query.includes("gratuita")) {
            sendBotMessage(
                "¡Excelente! 🎉 Te activamos una **Prueba Gratis de 4 Horas** para que pruebes la estabilidad y calidad 4K en tu televisor, celular o TV Box.",
                {
                    prompt: "Haz clic abajo para solicitar tu usuario y contraseña de prueba en WhatsApp:",
                    btnText: "Pedir Demo de 4 Horas",
                    waText: "Hola! Solicito una prueba gratis de 4 horas de IPTV para probar en mi dispositivo."
                }
            );
            return;
        }

        // 2. Detección de Intención: PRECIOS / PLANES / PROMOCIONES
        if (query.includes("precio") || query.includes("plan") || query.includes("costo") || query.includes("cuanto vale") || query.includes("cuánto cuesta") || query.includes("tarifas") || query.includes("promocion") || query.includes("promo")) {
            sendBotMessage(
                "📺 **Planes y Precios Oficiales MEGATV+ (USD):**\n\n" +
                "🔹 **1 Dispositivo:** **$10 USD** / mes\n" +
                "🔹 **2 Dispositivos:** **$12 USD** / mes\n" +
                "🔹 **3 Dispositivos:** **$14 USD** / mes\n\n" +
                "🔥 **¡Súper Promociones de Meses GRATIS!**\n" +
                "🎁 Paga 3 meses ➡️ **Recibes 1 mes GRATIS** (Total: 4 meses)\n" +
                "🎁 Paga 6 meses ➡️ **Recibes 2 meses GRATIS** (Total: 8 meses)\n" +
                "🚀 Paga 12 meses ➡️ **Recibes 3 meses GRATIS** (Total: 15 meses)\n\n" +
                "*(Nota: Licencias de apps de terceros como IBO Player se cobran por separado si se requieren)*",
                {
                    prompt: "¿Cuál plan o promoción deseas activar hoy?",
                    btnText: "Activar Plan por WhatsApp",
                    waText: "Hola! Me interesa contratar un plan de MEGATV+ en USD con las promociones especiales."
                }
            );
            return;
        }

        // 3. Detección de Intención: DISPOSITIVOS / SMART TV / APPS
        if (query.includes("smart tv") || query.includes("samsung") || query.includes("lg") || query.includes("instalar") || query.includes("como funciona") || query.includes("aplicacion") || query.includes("app") || query.includes("firestick") || query.includes("roku") || query.includes("tv box") || query.includes("celular") || query.includes("iphone") || query.includes("android")) {
            let appName = "Bay TV, IBO Player o SmartOne";
            if (query.includes("samsung") || query.includes("lg")) appName = "Bay TV, IBO Player, SmartOne o Bob Player";
            if (query.includes("firestick") || query.includes("tv box")) appName = "TiviMate, XCIPTV o Downloader";
            if (query.includes("iphone") || query.includes("apple") || query.includes("ios")) appName = "GSE Smart IPTV o 247 IPTV Player";

            sendBotMessage(
                `📺 ¡El servicio es 100% compatible con tu equipo!\n\n` +
                `Para tu dispositivo te recomendamos descargar **${appName}** desde la tienda oficial de aplicaciones.\n\n` +
                `Nosotros te entregamos el Usuario, Contraseña y URL para ingresar en menos de 2 minutos.`,
                {
                    prompt: "¿Quieres que un técnico te guíe paso a paso en WhatsApp?",
                    btnText: "Guía de Instalación Rápida",
                    waText: `Hola! Necesito la guía de instalación de IPTV para mi dispositivo (${userText}).`
                }
            );
            return;
        }

        // 4. Detección de Intención: DEPORTES / FUTBOL / PPV
        if (query.includes("deporte") || query.includes("futbol") || query.includes("fútbol") || query.includes("champions") || query.includes("liga") || query.includes("ufc") || query.includes("f1") || query.includes("formula 1") || query.includes("nba") || query.includes("ppv") || query.includes("partido")) {
            sendBotMessage(
                "⚽ ¡Transmisión en vivo y sin cortes de todos los eventos deportivos!\n\n" +
                "Incluye: Champions League, Premier League, LaLiga, Serie A, Copa Libertadores, Fórmula 1, UFC, NBA, NFL y todos los eventos PPV en canales FHD y 4K con tecnología Anti-Freeze.",
                {
                    prompt: "Pide una demo previa al partido:",
                    btnText: "Ver Canales de Deportes",
                    waText: "Hola! Quiero ver los canales deportivos y eventos en vivo de su IPTV."
                }
            );
            return;
        }

        // 5. Detección de Intención: MÉTODOS DE PAGO / COMPRA
        if (query.includes("pago") || query.includes("pagar") || query.includes("tarjeta") || query.includes("paypal") || query.includes("transferencia") || query.includes("comprar") || query.includes("contratar") || query.includes("cuenta") || query.includes("banco") || query.includes("crypto") || query.includes("usdt")) {
            sendBotMessage(
                "💳 Aceptamos múltiples medios de pago 100% seguros:\n\n" +
                "✅ Tarjetas de Débito y Crédito (Visa / Mastercard)\n" +
                "✅ PayPal Internacional\n" +
                "✅ Transferencias locales (según tu país)\n" +
                "✅ Criptomonedas (USDT / Binance Pay / Bitcoin)",
                {
                    prompt: "Indícanos tu país en WhatsApp para enviarte los datos de pago exactos:",
                    btnText: "Coordinar Pago Inmediato",
                    waText: "Hola! Quiero realizar el pago de mi suscripción de IPTV. ¿Cuáles son las cuentas bancarias o enlaces para mi país?"
                }
            );
            return;
        }

        // 6. Detección de Intención: VELOCIDAD / INTERNET / CONGELAMIENTOS
        if (query.includes("velocidad") || query.includes("internet") || query.includes("megas") || query.includes("mbps") || query.includes("traba") || query.includes("corta") || query.includes("cae") || query.includes("estable")) {
            sendBotMessage(
                "🚀 Nuestros servidores cuentan con balanceo de carga CDN y tecnología **Anti-Freeze 9.0**.\n\n" +
                "Requisitos de velocidad:\n" +
                "• Canales HD / FHD: Desde **15 a 20 Mbps**\n" +
                "• Canales 4K UHD: Desde **30 a 50 Mbps**\n\n" +
                "Se recomienda conectar tu equipo preferentemente vía cable de red o WiFi 5GHz para máxima fluidez."
            );
            return;
        }

        // 7. Detección de Intención: ASESOR HUMANO / SOPORTE
        if (query.includes("humano") || query.includes("asesor") || query.includes("persona") || query.includes("agente") || query.includes("soporte") || query.includes("ayuda") || query.includes("contacto")) {
            sendBotMessage(
                "¡Por supuesto! Uno de nuestros agentes de soporte y ventas te atenderá personalmente por WhatsApp en tiempo real.",
                {
                    prompt: "Haz clic para chatear directamente con nuestro equipo:",
                    btnText: "Hablar con Asesor Humano",
                    waText: "Hola! Deseo hablar con un asesor humano para resolver unas dudas sobre el servicio."
                }
            );
            return;
        }

        // 8. Respuesta Inteligente por defecto con Lead Routing
        sendBotMessage(
            "Entendido. Como asesor de **" + IPTV_CONFIG.brand.name + "** puedo ayudarte a contratar tu plan, enviarte una demo gratis de 4 horas o resolver dudas sobre canales y compatibilidad.",
            {
                prompt: "¿Prefieres que lo resolvamos directamente por WhatsApp?",
                btnText: "Chatear por WhatsApp",
                waText: "Hola! Tengo una consulta sobre el servicio: " + userText
            }
        );
    }

    // Funciones de utilidad
    function scrollToBottom() {
        if (chatBody) {
            chatBody.scrollTop = chatBody.scrollHeight;
        }
    }

    function getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }

    function escapeHtml(text) {
        const div = document.createElement("div");
        div.textContent = text;
        return div.innerHTML;
    }

    function formatMarkdownText(text) {
        let formatted = escapeHtml(text);
        // Bold: **texto**
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Italic: *texto*
        formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
        // Saltos de línea
        formatted = formatted.replace(/\n/g, '<br>');
        return formatted;
    }

    // Exponer función para abrir el chatbot desde cualquier parte de la web
    window.openNovaChatbot = function (initialQuestion = "") {
        openChat();
        if (initialQuestion) {
            addUserMessage(initialQuestion);
            processUserQuery(initialQuestion);
        }
    };

})();
