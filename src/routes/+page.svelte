<script lang='ts'>
    import { page } from '$app/state';
    import emblaCarouselSvelte from 'embla-carousel-svelte';
    import type { EmblaCarouselType } from 'embla-carousel';
    
    import bgPattern from '$lib/assets/Background.webp';
    import logo from '$lib/assets/logoCores.webp';
    //import sClass from '$lib/assets/Cars/CarroSClass.webp';
    //import vClass from '$lib/assets/Cars/CarrinhaVClass.webp';
    import hero from '$lib/assets/Cars/Hero.webp';
    import heroMobile from '$lib/assets/Cars/HeroMobile.webp';

    import * as m from '$lib/paraglide/messages'; 
    import { CONTACTS, PRICES } from '$lib/constants';
    import { localizeHref } from '$lib/paraglide/runtime';

    // --- LÓGICA DO CAROUSEL DE AVALIAÇÕES ---
    // Lista expandida de avaliações - Agora reativa ($:) para suportar tradução
    $: reviews = [
        {
            name: "Samuel Nunes",
            initials: "SN",
            role: "N/A",
            text: m.review_text_samuel(),
            stars: 5,
            link: "https://maps.app.goo.gl/gzQsDMkLr3hya4tt7" // Coloca aqui o link da review
        },
        {
            name: "Bárbara Amorim",
            initials: "BA",
            text: m.review_text_barbara(),
            stars: 5,
            link: "https://maps.app.goo.gl/KH3Dom5iTbgPfpaS7"
        },
        {
            name: "Joana Lisboa",
            initials: "JL",
            text: m.review_text_joana(),
            stars: 5,
            link: "https://maps.app.goo.gl/mhBKcNGPpfTt74T58"
        },
        {
            name: "Simão Cruz",
            initials: "SC",
            text: m.review_text_simao(),
            stars: 5,
            link: "https://maps.app.goo.gl/MUhtk56BkpPX8KCn8"
        },
        {
            name: "André Brandão",
            initials: "AB",
            text: m.review_text_andre(),
            stars: 5,
            link: "https://maps.app.goo.gl/qHnyuFV2669zY7gcA"
        },
        {
            name: "Zé Esteves",
            initials: "ZE",
            text: m.review_text_ze(),
            stars: 5,
            link: "https://maps.app.goo.gl/xG2KT3dFRFifWDDz8"
        }
    ];

    // --- Configuração do Embla ---
    let emblaApi: EmblaCarouselType; // Controlador para os botões
    
    // Opções: loop infinito e alinhamento à esquerda
    let options = { loop: true, align: 'start' as const };

    // Função que captura a API quando o carousel inicia
    function onInit(event: CustomEvent<EmblaCarouselType>) {
        emblaApi = event.detail;
    }

    // Funções de navegação simplificadas
    function scrollPrev() {
        if (emblaApi) emblaApi.scrollPrev();
    }

    function scrollNext() {
        if (emblaApi) emblaApi.scrollNext();
    }

    // Funçoes para o google ads
    function trackWhatsAppClick() {
        // Usamos (window as any) para calar o erro do TypeScript
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'conversion', {
                'send_to': 'AW-17287083196/A3NaCPvznYQcELzpj7NA'
            });
            console.log("Conversão do WhatsApp enviada para o Google Ads!");
        }
    }

    // Dados Estruturados (Schema.org) para SEO Local
    $: schemaOrg = {
        "@context": "https://schema.org",
        "@type": "TaxiService",
        "name": "Táxi Cerveira",
        "description": m.meta_description(),
        "telephone": CONTACTS.phone,
        "areaServed": [
            { "@type": "City", "name": "Vila Nova de Cerveira" },
            { "@type": "City", "name": "Valença" },
            { "@type": "City", "name": "Caminha" },
            { "@type": "City", "name": "Paredes de Coura" },
            { "@type": "City", "name": "Monção" },
            { "@type": "AdministrativeArea", "name": "Alto Minho" }
        ],
        "priceRange": "€",
        "openingHours": "Mo-Su 00:00-23:59",
        "image": `${hero}}`
    };
</script>

<svelte:head>
    <title>{m.meta_title()}</title>

    {@html `<script type="application/ld+json">${JSON.stringify(schemaOrg)}</script>`}

    <meta name="description" content={m.meta_description()} />
    <meta name="author" content="Táxi Cerveira" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook / Instagram -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content={m.meta_title()} />
    <meta property="og:description" content={m.meta_description()} />
    <meta property="og:image" content="{hero}" />
    <meta property="og:site_name" content="Táxi Cerveira" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={m.meta_title()} />
    <meta name="twitter:description" content={m.meta_description()} />
    <meta name="twitter:image" content="{hero}" />
    
    <!-- Theme Color -->
    <meta name="theme-color" content="#eab308" />
</svelte:head>

<main class="font-poppins text-slate-600 bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
    
    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <picture class="block w-full h-full">
                <source media="(max-width: 640px)" srcset={heroMobile} />
                <img 
                    src={hero} 
                    alt={m.hero_image_alt()} 
                    class="w-full h-full object-cover object-[80%_100%] animate-ken-burns will-change-transform"
                    title={m.hero_image_alt()}
                    width="1920"
                    height="1080"
                    loading="eager"
                    fetchpriority="high"
                />
            </picture>
            <div class="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-900/75 to-transparent"></div>
            <img src={bgPattern} class="absolute inset-0 w-full h-full object-cover opacity-0 mix-blend-overlay" alt="" title="Background Pattern" width="1920" height="1080" loading="eager" />
        </div>

        <div class="container relative z-10 mx-auto px-6 pt-20">
            <div class="max-w-3xl">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest mb-8 shadow-lg">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {m.hero_badge_available()}
                </div>
                
                <h1 class="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8 drop-shadow-2xl">
                    {m.hero_title_prefix()} <br/>
                    <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                        {m.hero_title_sufix()}
                    </span>
                </h1>
                
                <p class="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-lg font-light">
                    {m.hero_subtitle()}
                </p>

                <div class="flex flex-col sm:flex-row gap-5">
                    <a href="tel:{CONTACTS.phone}" class="group flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 shadow-2xl hover:bg-white hover:text-slate-950 transition-all duration-500 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {m.btn_call_now()}
                    </a>

                    <a href="https://wa.me/{CONTACTS.whatsapp}" target="_blank" rel="noopener noreferrer" onclick={trackWhatsAppClick} class="flex items-center justify-center gap-3 px-10 py-5 bg-emerald-600/10 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-bold rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-500 text-lg shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                    </a>
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-slate-50 to-transparent z-10 pointer-events-none"></div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="sobre" class="py-24 container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center mb-20">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{m.about_title()}</h2>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {m.about_text_part1()}
                <span class="text-emerald-700 font-bold bg-emerald-50 px-2 rounded-lg">{m.about_text_highlight()}</span>.
            </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            <div class="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 class="font-bold text-slate-800 mb-2 text-lg">{m.feature_24h_title()}</h3>
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed">{m.feature_24h_desc()}</p>
            </div>

            <div class="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" /></svg>
                </div>
                <h3 class="font-bold text-slate-800 mb-2 text-lg">{m.feature_safe_title()}</h3>
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed">{m.feature_safe_desc()}</p>
            </div>

            <div class="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
                </div>
                <h3 class="font-bold text-slate-800 mb-2 text-lg">{m.feature_comfort_title()}</h3>
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed">{m.feature_comfort_desc()}</p>
            </div>

            <div class="bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" /></svg>
                </div>
                <h3 class="font-bold text-slate-800 mb-2 text-lg">{m.feature_price_title()}</h3>
                <p class="text-slate-500 text-xs md:text-sm leading-relaxed">{m.feature_price_desc()}</p>
            </div>
        </div>
    </section>

    <!-- SERVICES SECTION -->
    <section id="servicos" class="py-24 bg-white relative">
        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-slate-900 mb-6">{m.services_title()}</h2>
                <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
                <p class="text-slate-500 text-lg">{m.services_subtitle()}</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                
                <div class="lg:col-span-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_local_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_local_desc()}</p>
                    </div>
    
                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="currentColor" viewBox="0 0 1024 1024"><path d="M934.32 65.904c10.432 0 17.776 1.938 21.6 3.41 4.592 12.224 10.753 56.031-34.528 101.343L690.4 401.633l1.664 28.656c3.504 59.968 10 167.44 15.6 259.567 4.944 82 9.633 159.44 9.936 166.032.16 4.529.225 5.601-3.999 10.689-9.44 11.472-27.056 30.912-41.904 47.024-23.024-62.032-71.408-193.057-98.128-266.4l-34.336-94.368-71.024 71.024-130.608 125.584-18.192 18.16-.56 25.68c-.432 20.496-.336 57.28-.288 89.712.064 22.592.129 43.12-.031 54.432-.288.528 4.368 1.152 3.936 1.904-2.784-4.464-5.776-9.28-8.944-14.288-26.336-42-62.784-100.096-73.904-118.224l-8.128-13.28-13.344-8.065c-48.528-29.311-102.288-63.151-135.088-84.287 1.136-.656 2.063 2.816 2.815 2.415h2.128c10.32 0 27.376.224 46.496.496 25.008.336 53.376.752 75.088.752 8.32 0 15.712-.064 21.664-.192l25.68-.592 18.16-18.16 125.744-129.712 70.784-70.752-93.935-34.56c-70.592-25.967-205.808-76.464-269.056-100.224 16.223-14.944 35.775-32.688 47.183-42.129 3.184-2.624 5.665-3.967 7.376-3.967l2.256.064c7.056.336 94.688 6.064 179.407 11.6 89.936 5.872 191.44 12.496 249.151 16.16l28.848 1.808 231.024-231.04c32.448-32.4 64.32-37.248 80.449-37.248zm.001-63.997c-37.808 0-84.222 14.526-125.678 55.998L598.035 268.497c-118.624-7.504-422.432-27.6-429.968-27.808a100.693 100.693 0 0 0-4.88-.129c-10.256 0-27.968 1.968-48.128 18.624-23.664 19.569-73.008 65.97-73.008 65.97-11.904 11.935-17.936 26.719-16.496 40.623.88 8.4 5.44 23.712 26.064 31.777 12.528 4.912 211.904 79.504 303.969 113.376L229.844 640.642c-5.569.128-12.465.192-20.257.192-38.336 0-97.776-1.248-121.601-1.248-3.152 0-5.68 0-7.473.064-7.248.224-22.256-3.344-61.84 29.744l-2.816 2.624C3.985 683.89 1.201 695.73.945 703.554c-.256 8.064 1.904 19.68 13.568 29.024 7.008 5.664 96.848 63.184 170.527 107.68 17.665 28.817 98.945 158 103.185 165.008 6.193 10.464 16.32 16.432 28.433 16.816h1.008c11.776 0 23.872-5.84 35.712-17.344 33.504-39.184 28.88-55.407 29.023-62.224.528-21.376-.368-111.936.4-147.84l130.592-125.6c33.376 91.68 106.336 289.008 111.216 301.567 8.128 20.624 23.44 25.153 31.84 26 1.376.16 2.785.225 4.16.225 12.625 0 25.712-5.936 36.432-16.655 0 0 46.256-49.088 65.904-72.976 19.68-23.872 18.913-44.256 18.529-53.872-.16-6.656-18.689-308.816-25.569-426.816L966.561 215.89c74.657-74.689 62.785-164.688 35.057-192.368-12.24-12.304-37.024-21.615-67.297-21.616z"/></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_transfer_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_transfer_desc()}</p>
                    </div>
    
                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_tourism_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_tourism_desc()}</p>
                    </div>
    
                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path stroke-linecap="round" stroke-linejoin="round" d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_business_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_business_desc()}</p>
                    </div>

                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" /><line x1="9" x2="9" y1="3" y2="18" /><line x1="15" x2="15" y1="6" y2="21" /></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_caminho_santiago_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_caminho_santiago_desc()}</p>
                    </div>
    
                    <div class="group bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-2 hover:bg-white">
                        <div class="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="18.5" cy="17.5" r="3.5" /><circle cx="5.5" cy="17.5" r="3.5" /><circle cx="15" cy="5" r="1" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 17.5V14l-3-3 4-3 2 3h2" /></svg>
                        </div>
                        <h3 class="text-xl font-bold mb-3 text-slate-800">{m.service_bike_transport_title()}</h3>
                        <p class="text-slate-500 leading-relaxed text-sm hidden md:block">{m.service_bike_transport_desc()}</p>
                    </div>
                </div>

                <div class="lg:col-span-2 text-center lg:text-left">
                    <h3 class="text-3xl font-bold text-slate-800 mb-6 hidden lg:block">{m.services_more_title()}</h3>
                    <p class="text-slate-500 leading-relaxed mb-8 text-lg hidden lg:block">{m.services_more_text_detailed()}</p>
                    <a href="/services" class="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors duration-300 shadow-lg group">
                        {m.services_see_more_button()}
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- VEHICLES
    <section id="veiculos" class="py-24 container mx-auto px-6">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-slate-900 mb-6">{m.vehicles_title()}</h2>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-slate-500 text-lg">{m.vehicles_subtitle()}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div class="group relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
                <div class="h-72 overflow-hidden bg-slate-200 relative">
                    <img src={sClass} alt={m.car_standard_title()} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                    <div class="absolute top-4 right-4 bg-white/90 backdrop-blur text-emerald-800 text-xs font-bold px-4 py-2 rounded-full shadow-sm">{m.car_badge_popular()}</div>
                    <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-20">
                    <div class="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                        <span class="bg-emerald-600 px-2 py-1 rounded">4 Pax</span>
                    </div>
                </div>
            </div>
            <div class="p-8">
                <div class="mb-6">
                    <h3 class="text-2xl font-bold text-slate-800 mb-1">{m.car_standard_title()}</h3>
                    <p class="text-slate-400 text-sm">{m.car_standard_desc()}</p>
                </div>
                <ul class="space-y-3 mb-8 text-slate-600">
                    <li class="flex items-center gap-3"><span class="text-emerald-500">✓</span> {m.feature_ac()}</li>
                    <li class="flex items-center gap-3"><span class="text-emerald-500">✓</span> {m.feature_leather()}</li>
                    <li class="flex items-center gap-3"><span class="text-emerald-500">✓</span> {m.feature_wifi()}</li>
                </ul>
                <div class="flex justify-between items-center pt-6 border-t border-slate-100">
                    <div>
                        <span class="text-xs text-slate-400 block uppercase tracking-wider">{m.label_estimate()}</span>
                        <span class="text-3xl font-bold text-slate-900">{PRICES.standard}€<span class="text-sm text-slate-500 font-normal">/km</span></span>
                    </div>
                    <a href="tel:{CONTACTS.phone}" class="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-colors duration-300 shadow-lg">{m.btn_book()}</a>
                </div>
            </div>
        </div>
        
        <div class="group relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-100 transition-all duration-500 hover:-translate-y-2">
            <div class="h-72 overflow-hidden bg-slate-200 relative">
                <img src={vClass} alt={m.car_van_title()} class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" decoding="async" />
                <div class="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-2 rounded-full shadow-sm">{m.car_badge_family()}</div>
                <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 pt-20">
                <div class="text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                    <span class="bg-yellow-500 text-slate-900 px-2 py-1 rounded">7 Pax</span>
                </div>
            </div>
        </div>
        <div class="p-8">
            <div class="mb-6">
                <h3 class="text-2xl font-bold text-slate-800 mb-1">{m.car_van_title()}</h3>
                <p class="text-slate-400 text-sm">{m.car_van_desc()}</p>
            </div>
            <ul class="space-y-3 mb-8 text-slate-600">
                <li class="flex items-center gap-3"><span class="text-yellow-500">✓</span> {m.feature_trunk()}</li>
                <li class="flex items-center gap-3"><span class="text-yellow-500">✓</span> {m.feature_ac_rear()}</li>
                <li class="flex items-center gap-3"><span class="text-yellow-500">✓</span> {m.feature_modular()}</li>
            </ul>
            <div class="flex justify-between items-center pt-6 border-t border-slate-100">
                <div>
                    <span class="text-xs text-slate-400 block uppercase tracking-wider">{m.label_estimate()}</span>
                    <span class="text-3xl font-bold text-slate-900">{PRICES.van}€<span class="text-sm text-slate-500 font-normal">/km</span></span>
                </div>
                <a href="tel:{CONTACTS.phone}" class="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-yellow-500 hover:text-slate-900 transition-colors duration-300 shadow-lg">{m.btn_book()}</a>
            </div>
        </div>
    </div>
</div>
<p class="text-center text-xs text-slate-400 mt-8">{m.disclaimer_price()}</p>
</section>
SECTION -->

    <!-- REVIEWS SECTION -->
    <section class="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div class="absolute -left-20 -top-15 opacity-5 pointer-events-none">
            <img src={logo} class="w-125 grayscale invert" alt="" title="Táxi Cerveira" width="500" height="200" loading="lazy" />
        </div>
        <div class="absolute inset-0 z-0">
            <img src={bgPattern} class="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-soft-light" alt="" title="Background Pattern" width="1920" height="1080" loading="lazy" />
            <div class="absolute inset-0 bg-linear-to-b from-transparent via-slate-950/50 to-slate-950"></div>
        </div>
        <div class="absolute -right-20 -bottom-10 opacity-5 pointer-events-none">
            <img src={logo} class="w-125 grayscale invert" alt="" title="Táxi Cerveira" width="500" height="200" loading="lazy" />
        </div>

        <div class="container mx-auto px-6 relative z-10">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                    {m.reviews_title_start()} <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 to-yellow-600">{m.reviews_title_highlight()}</span>
                </h2>
                <div class="w-20 h-1.5 bg-yellow-500 mx-auto rounded-full mb-4"></div>
                <p class="text-slate-400 text-lg leading-relaxed">{m.reviews_subtitle()}</p>
            </div>
            
            <div class="relative max-w-7xl mx-auto px-6"> <button 
                    type="button"
                    onclick={scrollPrev}
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-yellow-500 hover:text-slate-900 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-lg -ml-4 md:-ml-8"
                    aria-label={m.aria_label_prev()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                </button>

                <button 
                    type="button"
                    onclick={scrollNext}
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-yellow-500 hover:text-slate-900 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 shadow-lg -mr-4 md:-mr-8"
                    aria-label={m.aria_label_next()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                </button>

                <div 
                    class="overflow-hidden" 
                    use:emblaCarouselSvelte={{ options, plugins: [] }} 
                    onemblaInit={onInit}
                >
                    <div class="flex -ml-6 py-4"> 
                        {#each reviews as review}
                            <div class="flex-[0_0_100%] md:flex-[0_0_33.333333%] min-w-0 pl-6"> 
                                <a href={review.link} target="_blank" rel="noopener noreferrer" class="h-full flex flex-col justify-between bg-slate-900/80 p-8 rounded-3xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300 hover:bg-slate-800 hover:scale-105 select-none group">
                                    <div>
                                        <div class="flex gap-1 text-yellow-500 mb-6">
                                            {#each Array(review.stars) as _}<span>★</span>{/each}
                                        </div>
                                        <p class="text-slate-300 italic leading-relaxed mb-8 text-lg">"{review.text}"</p>
                                    </div>
                                    <div class="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                                        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-bold text-yellow-500 border border-white/10 shadow-inner shrink-0 group-hover:bg-slate-700 transition-colors">
                                            {review.initials}
                                        </div>
                                        <div>
                                            <p class="font-bold text-white">{review.name}</p>
                                            <p class="text-xs text-slate-400 uppercase tracking-wider">{review.role ? review.role : 'N/A'}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contacto" class="py-24 bg-white relative overflow-hidden">
        <div class="container mx-auto px-6 relative z-10 text-center">
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                {m.contact_title()}
            </h2>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            
            <p class="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-light">
                {@html m.contact_text()} 
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a href="tel:{CONTACTS.phone}" class="group relative px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden min-w-50">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span class="relative">{m.btn_call_number()}</span>
                </a>
                
                <a href={localizeHref('/contacts')} class="group px-10 py-5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:border-yellow-400 hover:text-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 min-w-50">
                    <span>{m.btn_other_contacts()}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:translate-x-1 transition-transform text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </div>
    </section>

</main>