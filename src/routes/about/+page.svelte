<script lang="ts">
    import { page } from '$app/state';
    import * as m from '$lib/paraglide/messages';
    import { CONTACTS } from '$lib/constants';

    // Images
    import bgPattern from '$lib/assets/Background.webp';
    import logo from '$lib/assets/logoCores.webp';
    import carImg from '$lib/assets/Cars/car.webp';
    import about from '$lib/assets/about/about.png';
    import origin from '$lib/assets/about/origem.png';
    
    // Icons
    import heartIcon from '$lib/assets/icons/heart.svg?raw';
    import mapIcon from '$lib/assets/icons/map.svg?raw';
    import shieldIcon from '$lib/assets/icons/shield-check.svg?raw';
</script>

<svelte:head>
    <title>{m.about_page_title()}</title>
    <meta name="description" content={m.about_page_desc()} />
    
    <!-- Open Graph / Facebook / Instagram -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content={m.about_page_title()} />
    <meta property="og:description" content={m.about_page_desc()} />
    <meta property="og:image" content="{logo}" />
    <meta property="og:site_name" content="Táxi Cerveira" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={m.about_page_title()} />
    <meta name="twitter:description" content={m.about_page_desc()} />
    <meta name="twitter:image" content="{logo}" />
</svelte:head>

<div class="min-h-screen bg-slate-50 pt-32 pb-0 font-poppins relative overflow-x-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute inset-0 w-full h-full opacity-50 grayscale" style="background-image: url({bgPattern}); background-repeat: repeat;"></div>
        <div class="absolute inset-0 bg-linear-to-b from-slate-50/30 via-slate-50/80 to-slate-50"></div>
        <div class="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
        <div class="absolute top-40 right-0 w-150 h-150 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-multiply translate-x-1/3"></div>
        <div class="absolute bottom-0 left-0 w-150 h-150 bg-yellow-500/10 blur-[100px] rounded-full mix-blend-multiply -translate-x-1/3"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-7xl mb-24">
        
        <!-- Hero Text -->
        <div class="text-center mb-24 max-w-4xl mx-auto">
             <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                {m.about_hero_heading()} <br class="hidden md:block" />
                <span class="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-400">
                    {m.about_hero_heading_suffix()}
                </span>
            </h1>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                {m.about_hero_text()}
            </p>
        </div>

        <!-- Story Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
                <h2 class="text-3xl font-bold text-slate-800 mb-4 flex items-center text-left gap-3">
                    <span class="w-10 h-10 rounded-full bg-yellow-100 text-yellow-600 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </span>
                    {m.about_origin_title()}
                </h2>
                <p>{m.about_origin_text_1()}</p>
                <p>{m.about_origin_text_2()}</p>
            </div>
            <div class="relative group">
                 <div class="absolute inset-0 bg-emerald-500/10 rounded-[3rem] rotate-3 transform transition-transform duration-500 group-hover:rotate-6"></div>
                 <img src={origin} alt="Táxi Cerveira" title={m.about_origin_title()} class="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-4/3 transform transition-transform duration-500 group-hover:-translate-y-2" width="800" height="600" loading="lazy" />
            </div>
        </div>

        <!-- Identity Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
             <div class="order-2 lg:order-1 relative flex justify-center group">
                 <div class="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                 <img src={logo} alt="Logo Táxi Cerveira" title="Táxi Cerveira" class="relative w-64 md:w-96 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105" width="500" height="200" loading="lazy" />
            </div>
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed text-justify order-1 lg:order-2">
                <h2 class="text-3xl font-bold text-slate-800 mb-4 flex items-center text-left gap-3">
                    <span class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                    </span>
                    {m.about_identity_title()}
                </h2>
                <p>{m.about_identity_text_1()}</p>
                <p>{m.about_identity_text_2()}</p>
            </div>
        </div>

        <!-- Service Area Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div class="order-2 lg:order-2 relative flex justify-center group">
                 <div class="absolute inset-0 bg-emerald-400/20 rounded-full blur-3xl scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                 <img src={about} alt="Zona de Atuação" title={m.about_area_title()} class="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-4/3 transform transition-transform duration-500 group-hover:-translate-y-2 opacity-90 group-hover:opacity-100" width="800" height="600" loading="lazy" />
            </div>
            <div class="space-y-6 text-lg text-slate-600 leading-relaxed text-justify order-1 lg:order-1">
                <h2 class="text-3xl font-bold text-slate-800 mb-4 flex items-center text-left gap-3">
                    <span class="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        {@html mapIcon}
                    </span>
                    {m.about_area_title()}
                </h2>
                <p>{m.about_area_text()}</p>
            </div>
        </div>
        
        <!-- Values Grid -->
        <div class="mb-32">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-slate-900">{m.about_values_title()}</h2>
                <div class="w-16 h-1 bg-emerald-500 mx-auto rounded-full mt-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                    <div class="w-14 h-14 bg-red-100 text-red-500 rounded-2xl flex items-center justify-center mb-6">
                        <span class="w-8 h-8">{@html heartIcon}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">{m.about_value_proximity_title()}</h3>
                    <p class="text-slate-500 leading-relaxed">{m.about_value_proximity_desc()}</p>
                </div>

                <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                    <div class="w-14 h-14 bg-blue-100 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                        <span class="w-8 h-8">{@html mapIcon}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">{m.about_value_commitment_title()}</h3>
                    <p class="text-slate-500 leading-relaxed">{m.about_value_commitment_desc()}</p>
                </div>

                <div class="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:-translate-y-2 transition-all duration-300">
                    <div class="w-14 h-14 bg-emerald-100 text-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                        <span class="w-8 h-8">{@html shieldIcon}</span>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 mb-3">{m.feature_safe_title()}</h3>
                    <p class="text-slate-500 leading-relaxed">{m.feature_safe_desc()}</p>
                </div>
            </div>
        </div>
    </div>
</div>
