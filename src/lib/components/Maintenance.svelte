<script>
    import bgPattern from '$lib/assets/Background.webp';
    import logo from '$lib/assets/logoCores.webp';
    import * as m from '$lib/paraglide/messages';
    import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
    <title>{m.maintenance_title()}</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="font-poppins text-white min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-emerald-200 selection:text-emerald-900">
    
    <div class="absolute inset-0 z-0">
        <img 
            src={bgPattern} 
            class="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" 
            alt="" 
        /> 
        
        <div class="absolute inset-0 bg-linear-to-b from-slate-950/40 via-slate-950/90 to-slate-950"></div>
    </div>

    <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div> 
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

    <div class="container relative z-10 px-6 mx-auto text-center">
        <div class="inline-block -mb-5">
            <img src={logo} class="h-24 md:h-75 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="Logo Táxi Cerveira" />
        </div>

        <div class="max-w-2xl mx-auto space-y-8 backdrop-blur-xl bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
            
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-2">
                <span class="relative flex h-2 w-2">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span> 
                </span>
                {m.maintenance_badge()}
            </div>

            <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                {m.maintenance_heading_prefix()} <br/>
                <span class="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600">
                    {m.maintenance_heading_suffix()}
                </span> 
            </h1>

            <p class="text-lg text-slate-400 leading-relaxed font-light">
                {m.maintenance_text()}
            </p>

            <div class="w-16 h-1 bg-emerald-600/30 mx-auto rounded-full"></div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                
                <a href={localizeHref('/')} class="group flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 text-white font-bold rounded-2xl border border-slate-700 hover:bg-white hover:text-slate-950 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {m.maintenance_back_home()}
                </a> 
                
                <a href="tel:+351910779407" class="flex items-center justify-center gap-3 px-8 py-4 bg-emerald-600/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-bold rounded-2xl hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {m.maintenance_contact()}
                </a> 
            </div>
        </div>

        <p class="mt-10 text-xs text-slate-500 uppercase tracking-widest">
            {m.maintenance_footer()}
        </p>
    </div>
</main>