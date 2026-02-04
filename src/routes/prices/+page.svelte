<script lang="ts">
    import { page } from '$app/state';
    import * as m from '$lib/paraglide/messages';
    import bgPattern from '$lib/assets/Background.webp';
    import logo from '$lib/assets/logoCores.webp';
    import { CONTACTS } from '$lib/constants';
    
    import clockIcon from '$lib/assets/icons/clock.svg?raw';
    import tagIcon from '$lib/assets/icons/tag.svg?raw';
    import mapIcon from '$lib/assets/icons/map.svg?raw';
    import briefcaseIcon from '$lib/assets/icons/briefcase.svg?raw';
    import phoneIcon from '$lib/assets/icons/phone.svg?raw';
    import calculatorIcon from '$lib/assets/icons/calculator.svg?raw';

    // Dados de exemplo para destinos populares (Estimativas)
    const popularDestinations = [
        { name: m.prices_airport_opo(), price: "90€ - 110€", time: "55 min" },
        { name: m.prices_airport_vgo(), price: "50€ - 60€", time: "40 min" },
        { name: m.prices_santiago(), price: "110€ - 130€", time: "1h 15min" },
        { name: m.prices_valenca(), price: "20€ - 25€", time: "15 min" },
        { name: m.prices_caminha(), price: "15€ - 20€", time: "15 min" },
        { name: m.prices_viana(), price: "40€ - 50€", time: "35 min" },
    ];

    // Dados das tarifas oficiais (Exemplo aproximado)
    const tariffs = [
        { item: m.prices_item_start(), t1: "3.25€", t2: "3.90€" },
        { item: m.prices_item_km(), t1: "0.94€", t2: "1.13€" },
        { item: m.prices_item_wait(), t1: "14.80€", t2: "14.80€" },
    ];

    const supplements = [
        { name: m.prices_supp_luggage(), price: "1.60€" },
        { name: m.prices_supp_pet(), price: "1.60€" },
        { name: m.prices_supp_call(), price: "0.80€" },
    ];

    // Lógica do Simulador
    let distance = $state<number | null>(null);
    let selectedTariff = $state<'1' | '2'>('1');
    let estimate = $state<string | null>(null);

    function calculateEstimate() {
        if (!distance || distance <= 0) {
            estimate = null;
            return;
        }
        
        // Valores baseados nas tarifas (aproximados para simulação)
        const startFee = selectedTariff === '1' ? 3.25 : 3.90;
        const kmPrice = selectedTariff === '1' ? 0.94 : 1.13;

        const total = startFee + (distance * kmPrice);
        estimate = total.toFixed(2);
    }
</script>

<svelte:head>
    <title>{m.prices_page_title()}</title>
    <meta name="description" content={m.prices_page_desc()} />
    
    <!-- Open Graph / Facebook / Instagram -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content={m.prices_page_title()} />
    <meta property="og:description" content={m.prices_page_desc()} />
    <meta property="og:image" content="{page.url.origin}{logo}" />
    <meta property="og:site_name" content="Táxi Cerveira" />
</svelte:head>

<div class="min-h-screen bg-slate-50 pt-32 pb-0 font-poppins relative overflow-x-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
        <div class="absolute inset-0 w-full h-full opacity-50 grayscale" style="background-image: url({bgPattern}); background-repeat: repeat;"></div>
        <div class="absolute inset-0 bg-linear-to-b from-slate-50/30 via-slate-50/80 to-slate-50"></div>
        <div class="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
        
        <!-- Blobs -->
        <div class="absolute top-40 right-0 w-150 h-150 bg-emerald-500/10 blur-[100px] rounded-full mix-blend-multiply translate-x-1/3"></div>
        <div class="absolute bottom-1/3 left-0 w-125 h-125 bg-yellow-500/10 blur-[100px] rounded-full mix-blend-multiply -translate-x-1/3"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-7xl mb-24">
        
        <!-- Hero Text -->
        <div class="text-center mb-20 max-w-4xl mx-auto">
             <h1 class="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
                {m.prices_hero_title()}
            </h1>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-xl text-slate-600 leading-relaxed font-light">
                {m.prices_hero_subtitle()}
            </p>
        </div>

        <!-- Popular Destinations Grid -->
        <div class="mb-24">
            <div class="flex items-center gap-4 mb-10">
                <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                    <span class="w-6 h-6">{@html mapIcon}</span>
                </div>
                <div>
                    <h2 class="text-2xl font-bold text-slate-900">{m.prices_popular_title()}</h2>
                    <p class="text-slate-500 text-sm">{m.prices_popular_subtitle()}</p>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {#each popularDestinations as dest}
                    <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div class="flex justify-between items-start mb-4">
                            <h3 class="font-bold text-slate-800 text-lg pr-4">{dest.name}</h3>
                            <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{dest.time}</span>
                        </div>
                        <div class="flex items-end justify-between">
                            <div>
                                <p class="text-xs text-slate-400 uppercase tracking-wider mb-1">{m.label_estimate()}</p>
                                <p class="text-3xl font-bold text-slate-900">{dest.price}</p>
                            </div>
                            <a href="tel:{CONTACTS.phone}" aria-label={m.btn_call_now()} class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
        </div>

        <!-- Official Tariffs & Supplements -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <!-- Tariffs Table -->
            <div class="lg:col-span-2 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-slate-100">
                <div class="flex items-center gap-4 mb-8">
                    <div class="w-12 h-12 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center shadow-sm">
                        <span class="w-6 h-6">{@html tagIcon}</span>
                    </div>
                    <div>
                        <h2 class="text-2xl font-bold text-slate-900">{m.prices_official_title()}</h2>
                        <p class="text-slate-500 text-sm">{m.prices_official_subtitle()}</p>
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="border-b border-slate-100">
                                <th class="py-4 font-medium text-slate-400 uppercase text-xs tracking-wider">Serviço</th>
                                <th class="py-4 font-bold text-slate-800 text-right">{m.prices_tariff_1()}</th>
                                <th class="py-4 font-bold text-slate-800 text-right">{m.prices_tariff_2()}</th>
                            </tr>
                        </thead>
                        <tbody class="text-slate-600">
                            {#each tariffs as tariff}
                                <tr class="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td class="py-4 font-medium">{tariff.item}</td>
                                    <td class="py-4 text-right font-bold text-emerald-600">{tariff.t1}</td>
                                    <td class="py-4 text-right font-bold text-emerald-600">{tariff.t2}</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- Supplements -->
            <div class="space-y-6">
                <div class="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                    
                    <h3 class="text-xl font-bold mb-6 flex items-center gap-3">
                        <span class="text-yellow-400">{@html briefcaseIcon}</span>
                        {m.prices_supplements_title()}
                    </h3>
                    
                    <ul class="space-y-4">
                        {#each supplements as supp}
                            <li class="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                <span class="text-slate-300">{supp.name}</span>
                                <span class="font-bold text-yellow-400 text-lg">{supp.price}</span>
                            </li>
                        {/each}
                    </ul>
                </div>

                <div class="bg-emerald-50 rounded-[2.5rem] p-8 border border-emerald-100">
                    <div class="flex gap-4">
                        <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                            <span class="w-5 h-5">{@html clockIcon}</span>
                        </div>
                        <p class="text-sm text-emerald-900 leading-relaxed">
                            {m.prices_disclaimer()}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Simulator Section -->
        <div class="mt-24 mb-24 bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden text-white shadow-2xl">
            <!-- Background effects -->
            <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            
            <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6">
                        <span class="w-4 h-4">{@html calculatorIcon}</span>
                        Simulador
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">{m.prices_simulator_title()}</h2>
                    <p class="text-slate-300 text-lg mb-8">{m.prices_simulator_subtitle()}</p>
                    
                    <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6">
                        <p class="text-yellow-200 text-sm leading-relaxed flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            {m.prices_simulator_warning()}
                        </p>
                    </div>
                </div>

                <div class="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10">
                    <div class="space-y-6">
                        <div>
                            <label for="distance" class="block text-sm font-medium text-slate-300 mb-2">{m.prices_label_distance()}</label>
                            <input type="number" id="distance" bind:value={distance} min="0" step="0.1" placeholder="0" class="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                        </div>

                        <div>
                            <label for="tariff" class="block text-sm font-medium text-slate-300 mb-2">{m.prices_label_tariff()}</label>
                            <select id="tariff" bind:value={selectedTariff} class="w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all appearance-none">
                                <option value="1">{m.prices_tariff_1_label()}</option>
                                <option value="2">{m.prices_tariff_2_label()}</option>
                            </select>
                        </div>

                        <button onclick={calculateEstimate} class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform active:scale-[0.99]">
                            {m.prices_btn_calculate()}
                        </button>

                        {#if estimate}
                            <div class="mt-6 pt-6 border-t border-white/10 text-center animate-in fade-in slide-in-from-bottom-2">
                                <p class="text-slate-400 text-sm uppercase tracking-wider mb-1">{m.prices_result_label()}</p>
                                <p class="text-4xl font-bold text-white">~ {estimate}€</p>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <div class="mt-20 text-center">
            <a href="tel:{CONTACTS.phone}" class="inline-flex items-center gap-3 px-10 py-5 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-500 transition-all duration-300 shadow-xl hover:-translate-y-1 text-lg">
                <span class="w-6 h-6">{@html phoneIcon}</span>
                {m.btn_call_now()}
            </a>
        </div>

    </div>

    <section class="container mx-auto px-6 py-10 opacity-40 grayscale relative z-10">
        <h3 class="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4 text-center">Pagamentos Aceites</h3>
        <div class="flex flex-wrap justify-center gap-8 opacity-50">
             <span class="text-2xl">💳</span>
             <span class="text-2xl">📱</span>
             <span class="text-2xl">💶</span>
        </div>
        
        <div class="sr-only">
            Serviço de Taxi em Vila Nova de Cerveira para Inatel, Castelinho, Aeroporto Sá Carneiro. 
            Viagens confortáveis no Alto Minho.
        </div>
    </section>
</div>
