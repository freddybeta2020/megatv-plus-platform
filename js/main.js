/**
 * IPTV NOVA STREAM - LÓGICA PRINCIPAL DE LA WEB (MAIN.JS)
 * Renderizado dinámico desde config.js, acordeones, selector de planes y formularios
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initBrandData();
    initVodCatalog();
    initTrailerModal();
    initPricingTable();
    initDevicesTabs();
    initFaqAccordion();
    initFloatingWhatsApp();
    initContactForm();
    updateYear();
});

/**
 * 1. NAVBAR & SCROLL BEHAVIOR
 */
function initNavbar() {
    const header = document.querySelector(".header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    // Scroll listener para cambiar fondo del header
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Menú móvil hamburguesa
    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            const icon = navToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");
            }
        });

        // Cerrar menú al hacer clic en un enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("open");
                const icon = navToggle.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-times");
                }
            });
        });
    }
}

/**
 * 2. CARGA DE DATOS DE MARCA Y ESTADÍSTICAS
 */
function initBrandData() {
    const config = window.IPTV_CONFIG;
    if (!config) return;

    // Actualizar nombres de marca en el DOM
    document.querySelectorAll(".brand-name").forEach(el => {
        el.textContent = config.brand.name;
    });

    // Actualizar contadores y estadísticas
    const statChannels = document.getElementById("statChannels");
    const statVod = document.getElementById("statVod");
    const statUptime = document.getElementById("statUptime");
    const statClients = document.getElementById("statClients");

    if (statChannels) statChannels.textContent = config.stats.liveChannels;
    if (statVod) statVod.textContent = config.stats.vodMovies;
    if (statUptime) statUptime.textContent = config.stats.uptime;
    if (statClients) statClients.textContent = config.stats.happyClients;
}

/**
 * 3. TABLA DE PLANES & SELECTOR DE PERÍODO (MENSUAL / TRIMESTRAL / SEMESTRAL / ANUAL)
 */
let currentPeriod = "monthly"; // "monthly", "threeMonths", "sixMonths", "yearly"

function initPricingTable() {
    const billingTabs = document.querySelectorAll(".billing-tab");
    billingTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            billingTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentPeriod = tab.getAttribute("data-period");
            renderPricingCards();
        });
    });

    renderPricingCards();
}

function renderPricingCards() {
    const container = document.getElementById("pricingCardsContainer");
    if (!container || !window.IPTV_CONFIG) return;

    const plans = window.IPTV_CONFIG.plans;
    const waPhone = window.IPTV_CONFIG.whatsapp.phoneNumber;

    let periodLabel = "/mes";
    let periodName = "1 Mes";
    if (currentPeriod === "threeMonths") { periodLabel = "por 3 meses"; periodName = "3 Meses (Total: 4 meses con 1 Mes GRATIS)"; }
    if (currentPeriod === "sixMonths") { periodLabel = "por 6 meses"; periodName = "6 Meses (Total: 8 meses con 2 Meses GRATIS)"; }
    if (currentPeriod === "yearly") { periodLabel = "por 12 meses"; periodName = "12 Meses (Total: 15 meses con 3 Meses GRATIS)"; }

    container.innerHTML = "";

    plans.forEach(plan => {
        const priceUSD = plan.prices[currentPeriod] || plan.prices.monthly;
        const isFeatured = plan.popular;
        const bonusText = plan.bonusMonths ? plan.bonusMonths[currentPeriod] : "";

        // Mensaje personalizado de WhatsApp
        const waMsg = `Hola! Quiero contratar el *${plan.name}* (${plan.devices}) por el período de *${periodName}* a un valor de *$${priceUSD} USD*. ¿Cuáles son los métodos de pago?`;
        const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

        const card = document.createElement("div");
        card.className = `pricing-card ${isFeatured ? "featured" : ""}`;

        let featuresHtml = plan.features.map(f => `<li><i class="fas fa-check-circle"></i> <span>${f}</span></li>`).join("");

        card.innerHTML = `
            ${isFeatured ? `<div class="popular-badge">${plan.badge}</div>` : ""}
            <div class="card-header">
                <h3 class="plan-name">${plan.name}</h3>
                <span class="plan-devices-tag"><i class="fas fa-tv"></i> ${plan.devices}</span>
                <div class="price-container">
                    <span class="currency-sym">$</span>
                    <span class="price-val">${priceUSD}</span>
                    <span class="price-period">USD ${periodLabel}</span>
                </div>
                <div class="savings-text" style="color: #f97316; font-size: 0.85rem; font-weight: 800; margin-top: 0.6rem;">
                    ${bonusText}
                </div>
            </div>
            <ul class="plan-features">
                ${featuresHtml}
            </ul>
            <div style="font-size: 0.76rem; color: var(--text-dim); margin-bottom: 1rem; text-align: center;">
                <i class="fas fa-info-circle"></i> Licencia de apps de terceros se cobra por separado si es requerida.
            </div>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn ${isFeatured ? 'btn-primary' : 'btn-secondary'} btn-full">
                <i class="fab fa-whatsapp"></i> ${plan.ctaText}
            </a>
        `;

        container.appendChild(card);
    });
}

/**
 * 4. PESTAÑAS Y GUÍA DE DISPOSITIVOS COMPATIBLES
 */
function initDevicesTabs() {
    const tabsContainer = document.getElementById("devicesTabsContainer");
    const detailContainer = document.getElementById("deviceDetailContainer");
    if (!tabsContainer || !detailContainer || !window.IPTV_CONFIG) return;

    const devices = window.IPTV_CONFIG.devicesList;

    tabsContainer.innerHTML = "";
    devices.forEach((dev, index) => {
        const btn = document.createElement("button");
        btn.className = `device-tab-btn ${index === 0 ? "active" : ""}`;
        btn.setAttribute("data-category", dev.category);
        
        let iconClass = "fa-tv";
        if (dev.icon === "fire") iconClass = "fa-fire";
        if (dev.icon === "box") iconClass = "fa-box";
        if (dev.icon === "smartphone") iconClass = "fa-mobile-alt";
        if (dev.icon === "laptop") iconClass = "fa-laptop";

        btn.innerHTML = `<i class="fas ${iconClass}"></i> <span>${dev.title.split("(")[0].trim()}</span>`;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".device-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderDeviceDetail(dev);
        });
        tabsContainer.appendChild(btn);
    });

    if (devices.length > 0) {
        renderDeviceDetail(devices[0]);
    }
}

function renderDeviceDetail(device) {
    const detailContainer = document.getElementById("deviceDetailContainer");
    if (!detailContainer) return;

    const waPhone = window.IPTV_CONFIG.whatsapp.phoneNumber;
    const waMsg = `Hola! Necesito asesoría para instalar el servicio de IPTV en mi dispositivo: ${device.title}.`;
    const waLink = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

    const appPills = device.apps.map(app => `<span class="app-pill"><i class="fas fa-play-circle text-cyan"></i> ${app}</span>`).join("");

    detailContainer.innerHTML = `
        <div>
            <h3 class="device-detail-title">${device.title}</h3>
            <p class="device-detail-desc">${device.description}</p>
            <div class="app-pills-title">Aplicaciones recomendadas para tu equipo:</div>
            <div class="app-pills-container">
                ${appPills}
            </div>
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                <i class="fab fa-whatsapp"></i> Solicitar Guía de Configuración
            </a>
        </div>
        <div>
            <ul class="device-guide-steps">
                <li>
                    <span>1</span>
                    <div><strong>Descarga la App:</strong> Instala cualquiera de las aplicaciones recomendadas desde la tienda de tu equipo.</div>
                </li>
                <li>
                    <span>2</span>
                    <div><strong>Solicita tus Credenciales:</strong> Pídenos tu cuenta por WhatsApp (Usuario, Contraseña y URL).</div>
                </li>
                <li>
                    <span>3</span>
                    <div><strong>Inicia Sesión y Disfruta:</strong> Carga la lista en segundos y comienza a ver canales en 4K y Full HD.</div>
                </li>
            </ul>
        </div>
    `;
}

/**
 * 5. ACORDEÓN DE PREGUNTAS FRECUENTES (FAQ)
 */
function initFaqAccordion() {
    const faqContainer = document.getElementById("faqAccordionContainer");
    if (!faqContainer || !window.IPTV_CONFIG) return;

    const faqs = window.IPTV_CONFIG.faqs;
    faqContainer.innerHTML = "";

    faqs.forEach((faq, index) => {
        const item = document.createElement("div");
        item.className = `faq-item ${index === 0 ? "active" : ""}`;

        item.innerHTML = `
            <div class="faq-question">
                <span>${faq.q}</span>
                <i class="fas fa-chevron-down faq-icon"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.a}</p>
            </div>
        `;

        const questionEl = item.querySelector(".faq-question");
        questionEl.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            // Cerrar otros
            document.querySelectorAll(".faq-item").forEach(el => el.classList.remove("active"));
            if (!isActive) {
                item.classList.add("active");
            }
        });

        faqContainer.appendChild(item);
    });
}

/**
 * 6. BOTÓN FLOTANTE DE WHATSAPP
 */
function initFloatingWhatsApp() {
    const waTrigger = document.getElementById("floatingWhatsAppBtn");
    if (!waTrigger || !window.IPTV_CONFIG) return;

    const waPhone = window.IPTV_CONFIG.whatsapp.phoneNumber;
    const defaultMsg = window.IPTV_CONFIG.whatsapp.defaultMessage;
    const link = `https://wa.me/${waPhone}?text=${encodeURIComponent(defaultMsg)}`;

    waTrigger.setAttribute("href", link);
}

/**
 * 7. FORMULARIO DE CONTACTO DIRECTO
 */
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form || !window.IPTV_CONFIG) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("contactName").value.trim();
        const device = document.getElementById("contactDevice").value.trim();
        const msg = document.getElementById("contactMessage").value.trim();
        const waPhone = window.IPTV_CONFIG.whatsapp.phoneNumber;

        const fullText = `Hola! Mi nombre es *${name}*.\nDispositivo: *${device}*.\nConsulta: *${msg}*`;
        const waUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(fullText)}`;

        // Redirigir a WhatsApp
        window.open(waUrl, "_blank");
        form.reset();
    });
}

/**
 * 8. AÑO AUTOMÁTICO EN EL FOOTER
 */
function updateYear() {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

/**
 * 9. CATÁLOGO Y CARRUSEL VOD DE PELÍCULAS Y SERIES
 */
function initVodCatalog() {
    const filterContainer = document.getElementById("vodFilterTabs");
    if (!filterContainer || !window.IPTV_CONFIG || !window.IPTV_CONFIG.vodCatalog) return;

    const filterBtns = filterContainer.querySelectorAll(".vod-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filter = btn.getAttribute("data-filter");
            renderVodCatalog(filter);
        });
    });

    renderVodCatalog("all");
}

function renderVodCatalog(filterCategory = "all") {
    const container = document.getElementById("vodCardsContainer");
    if (!container || !window.IPTV_CONFIG || !window.IPTV_CONFIG.vodCatalog) return;

    const items = window.IPTV_CONFIG.vodCatalog;
    const waPhone = window.IPTV_CONFIG.whatsapp.phoneNumber;

    let filteredItems = items;
    if (filterCategory !== "all") {
        filteredItems = items.filter(item => item.category === filterCategory);
    }

    // Si hay pocos elementos, los duplicamos para asegurar un bucle de animación suave continuo
    let displayList = [...filteredItems, ...filteredItems];
    if (displayList.length < 10) {
        displayList = [...displayList, ...displayList];
    }

    container.innerHTML = "";

    displayList.forEach(item => {
        const card = document.createElement("div");
        card.className = "vod-card";

        card.innerHTML = `
            <span class="vod-badge">${item.badge}</span>
            <span class="vod-rating"><i class="fas fa-star"></i> ${item.rating}</span>
            <img src="${item.image}" alt="${item.title}" class="vod-card-img" loading="lazy">
            <div class="vod-card-overlay">
                <div class="vod-platform">${item.platform} • ${item.year}</div>
                <h4 class="vod-title" title="${item.title}">${item.title}</h4>
                <div class="vod-genre">
                    <span>${item.genre}</span>
                    <span class="vod-quality-tag"><i class="fas fa-play" style="font-size: 0.55rem; margin-right: 2px;"></i> Tráiler</span>
                </div>
            </div>
        `;

        // Al hacer clic abre el reproductor modal de tráiler oficial
        card.addEventListener("click", () => {
            openTrailerModal(item);
        });

        container.appendChild(card);
    });
}

/**
 * 10. CONTROL DEL MODAL DE REPRODUCTOR DE TRÁILER CINEMATOGRÁFICO
 */
function initTrailerModal() {
    const modal = document.getElementById("videoModal");
    const closeBtn = document.getElementById("videoModalClose");
    const backdrop = document.getElementById("videoModalBackdrop");

    if (!modal) return;

    // Cerrar al hacer clic en botón de cerrar
    if (closeBtn) {
        closeBtn.addEventListener("click", closeTrailerModal);
    }

    // Cerrar al hacer clic fuera del video (en el backdrop)
    if (backdrop) {
        backdrop.addEventListener("click", closeTrailerModal);
    }

    // Cerrar con tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("open")) {
            closeTrailerModal();
        }
    });
}

function openTrailerModal(item) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoIframe");
    const titleEl = document.getElementById("videoModalTitle");
    const metaEl = document.getElementById("videoModalMeta");
    const badgeEl = document.getElementById("videoModalBadge");
    const ctaBtn = document.getElementById("videoModalCta");

    if (!modal || !iframe || !item) return;

    const waPhone = window.IPTV_CONFIG ? window.IPTV_CONFIG.whatsapp.phoneNumber : "573013217824";

    titleEl.textContent = `Tráiler Oficial: ${item.title}`;
    metaEl.textContent = `${item.platform} • ${item.genre} • ${item.quality}`;
    badgeEl.textContent = `${item.badge} (${item.year})`;

    const waMsg = `Hola! Acabo de ver el tráiler de *${item.title}* (${item.platform}) en la web de MEGATV+ y quiero mi Demo Gratis de 4 Horas para probar el servicio.`;
    ctaBtn.href = `https://wa.me/${waPhone}?text=${encodeURIComponent(waMsg)}`;

    // Cargar tráiler de YouTube con autoplay seguro
    iframe.src = `https://www.youtube-nocookie.com/embed/${item.trailerId}?autoplay=1&rel=0&modestbranding=1`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // Evita scroll de fondo
}

function closeTrailerModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoIframe");

    if (!modal || !iframe) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    iframe.src = ""; // Detiene inmediatamente la reproducción del video
    document.body.style.overflow = ""; // Restaura el scroll de la página
}
