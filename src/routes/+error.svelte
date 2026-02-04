<script>
    import bgPattern from '$lib/assets/Background.webp'; // [cite: 1]
    import logo from '$lib/assets/logoCores.webp'; // [cite: 1]
    import * as m from '$lib/paraglide/messages';
    import { localizeHref } from '$lib/paraglide/runtime';
</script>

<svelte:head>
    <title>{m.error_title()}</title>
    <meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main class="font-poppins text-white min-h-screen relative flex items-center justify-center overflow-hidden bg-slate-950 selection:bg-emerald-200 selection:text-emerald-900"> <div class="absolute inset-0 z-0">
        <img src={bgPattern} class="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-soft-light" alt="" title="Background Pattern" width="1920" height="1080" loading="eager" /> <div class="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-950/90 to-slate-950"></div> </div>

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="container relative z-10 px-6 mx-auto text-center">
        
        <a href={localizeHref('/')} class="inline-block -mb-5 over:opacity-80 transition-opacity">
            <img src={logo} class="h-16 md:h-75 w-auto drop-shadow-2xl grayscale brightness-200" alt="Logo Táxi Cerveira" title="Logo Táxi Cerveira" width="500" height="200" loading="eager" /> </a>

        <div class="max-w-3xl mx-auto">
            
            <h1 class="text-[8rem] md:text-[12rem] font-extrabold leading-none tracking-tighter select-none">
                <span class="text-transparent bg-clip-text bg-linear-to-b from-slate-700 to-slate-900 drop-shadow-sm absolute blur-sm transform translate-y-4">404</span>
                <span class="relative text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-400 to-yellow-600"> 404
                </span>
            </h1>

            <h2 class="text-3xl md:text-4xl font-bold text-white mb-6 mt-4 relative z-20">
                {m.error_heading()}
            </h2>

            <p class="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto font-light">
                {m.error_text()}
            </p>

            <div class="flex flex-col sm:flex-row gap-5 justify-center items-center">
                
                <a href={localizeHref('/')} class="group flex items-center justify-center gap-3 px-10 py-4 bg-emerald-600 text-white font-bold rounded-2xl shadow-lg shadow-emerald-900/20 hover:bg-emerald-500 hover:-translate-y-1 transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {m.error_back_home()}
                </a>

                <a href="tel:+351910779407" class="group flex items-center justify-center gap-3 px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 font-bold rounded-2xl hover:bg-white hover:text-slate-900 transition-all duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-500 group-hover:text-slate-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {m.error_call_now()}
                </a>
            </div>

        </div>
    </div>
</main>