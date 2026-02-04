<script lang="ts">
    import { page } from '$app/state';
    import * as m from '$lib/paraglide/messages';
    import bgPattern from '$lib/assets/Background.webp';
    import carImg from '$lib/assets/Cars/car.webp';
    
    // Services
    import transfer from '$lib/assets/services/transfer.png';
    import corporate from '$lib/assets/services/business.jpg';
    import pilgrims from '$lib/assets/services/santiago.jpg';
    import bike from '$lib/assets/services/bike.png';
    import tours from '$lib/assets/services/turism.png';
    import mobility from '$lib/assets/services/wheelchair.jpg';
    import groups from '$lib/assets/services/groups.png';
    import events from '$lib/assets/services/events.jpg';
    import international from '$lib/assets/services/international.png';
    import cargo from '$lib/assets/services/luggage.png';
    import assistance from '$lib/assets/services/assistance.png';
    import medical from '$lib/assets/services/patient.png';
    import school from '$lib/assets/services/school.jpg';

    // Icons
    import chevronDownIcon from '$lib/assets/icons/chevron-down.svg?raw';
    
    const services = [
        { title: m.service_airport_title(), desc: m.service_airport_desc(), icon: "plane", image: transfer },
        { title: m.service_corporate_title(), desc: m.service_corporate_desc(), icon: "briefcase", image: corporate },
        { title: m.service_pilgrims_title(), desc: m.service_pilgrims_desc(), icon: "map", image: pilgrims },
        { title: m.service_bikes_title(), desc: m.service_bikes_desc(), icon: "bike", image: bike },
        { title: m.service_tours_title(), desc: m.service_tours_desc(), icon: "camera", image: tours },
        { title: m.service_mobility_title(), desc: m.service_mobility_desc(), icon: "wheelchair", image: mobility },
        { title: m.service_groups_title(), desc: m.service_groups_desc(), icon: "users", image: groups },
        { title: m.service_events_title(), desc: m.service_events_desc(), icon: "ticket", image: events },
        { title: m.service_international_title(), desc: m.service_international_desc(), icon: "globe", image: international },
        { title: m.service_cargo_title(), desc: m.service_cargo_desc(), icon: "box", image: cargo },
        { title: m.service_assistance_title(), desc: m.service_assistance_desc(), icon: "tool", image: assistance },
        { title: m.service_medical_title(), desc: m.service_medical_desc(), icon: "heart", image: medical },
        { title: m.service_school_title(), desc: m.service_school_desc(), icon: "book", image: school },
    ];

    let expandedIndex = $state<number | null>(null);

    function toggle(index: number) {
        expandedIndex = expandedIndex === index ? null : index;
    }
</script>

<svelte:head>
	<title>{m.services_page_title()}</title>
	<meta name="description" content={m.services_page_desc()} />
    
    <!-- Open Graph / Facebook / Instagram -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={page.url.href} />
    <meta property="og:title" content={m.services_page_title()} />
    <meta property="og:description" content={m.services_page_desc()} />
    <meta property="og:image" content="{page.url.origin}{carImg}" />
    <meta property="og:site_name" content="Táxi Cerveira" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={m.services_page_title()} />
    <meta name="twitter:description" content={m.services_page_desc()} />
    <meta name="twitter:image" content="{page.url.origin}{carImg}" />
</svelte:head>

<div class="min-h-screen bg-slate-50 pt-32 pb-0 font-poppins relative">
    <!-- Background -->
    <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div class="absolute inset-0 w-full h-full opacity-50 grayscale" style="background-image: url({bgPattern}); background-repeat: repeat;"></div>
        <div class="absolute inset-0 bg-linear-to-b from-slate-50/30 via-slate-50/80 to-slate-50"></div>
        <div class="absolute top-0 left-0 right-0 h-64 bg-linear-to-b from-slate-900/80 via-slate-900/40 to-transparent z-10"></div>
        <div class="absolute top-0 right-0 w-200 h-200 bg-emerald-500/15 blur-[100px] rounded-full mix-blend-multiply translate-x-1/3 -translate-y-1/4"></div>
        <div class="absolute top-20 left-0 w-150 h-150 bg-yellow-500/15 blur-[80px] rounded-full mix-blend-multiply -translate-x-1/3 -translate-y-1/4"></div>
        
        <!-- Additional luminous wheels -->
        <div class="absolute top-1/3 right-0 w-180 h-180 bg-yellow-500/10 blur-[120px] rounded-full mix-blend-multiply translate-x-1/2"></div>
        <div class="absolute top-2/3 left-0 w-200 h-200 bg-emerald-500/10 blur-[120px] rounded-full mix-blend-multiply -translate-x-1/2"></div>
        <div class="absolute bottom-0 right-0 w-150 h-150 bg-yellow-500/15 blur-[100px] rounded-full mix-blend-multiply translate-x-1/3 translate-y-1/4"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-7xl mb-16">
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                {m.services_hero_title()}
            </h1>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {m.services_hero_subtitle()}
            </p>
        </div>
    </div>

    <div class="container mx-auto px-6 relative z-10 max-w-7xl pb-24">
        <div class="flex flex-col gap-20">
            {#each services as service, index}
                {@const isExpanded = expandedIndex === index}
                {@const isEven = index % 2 === 0}
                
                <div class="group relative transition-all duration-700 ease-in-out {isExpanded ? 'backdrop-blur-md rounded-[3rem] p-10' : ''}">
                    <button 
                        class="w-full text-left cursor-pointer group/btn focus:outline-none"
                        onclick={() => toggle(index)}
                        aria-expanded={isExpanded}
                    >
                        <div class="flex flex-col md:flex-row items-stretch gap-6 md:gap-12 transition-all duration-700 ease-in-out">
                            
                            <!-- Image Section -->
                            <div class="relative shrink-0 overflow-hidden shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                {isEven ? 'md:order-1' : 'md:order-2'}
                                {isExpanded ? 'w-full md:w-1/2 aspect-4/3 rounded-[2.5rem]' : 'w-full md:w-80 aspect-square rounded-[2.5rem]'} order-1">
                                <img src={service.image} alt={service.title} title={service.title} class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 {isExpanded ? 'scale-105' : 'group-hover/btn:scale-110'}" width="800" height="600" loading="lazy" />
                                <div class="absolute inset-0 bg-slate-900/10 group-hover/btn:bg-slate-900/0 transition-colors duration-500"></div>
                            </div>

                            <!-- Content Section -->
                            <div class="flex-1 flex flex-col order-2 transition-all duration-700 ease-in-out 
                                {isEven ? 'md:order-2' : 'md:order-1'} 
                                {isExpanded ? 'justify-start items-center text-center' : 'justify-center ' + (isEven ? 'items-end text-right' : 'items-start text-left')}">

                                <div class="w-full">
                                    <h3 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{service.title}</h3>

                                    <div class="flex items-center gap-2 text-emerald-600 font-medium mt-2 group-hover/btn:translate-x-2 transition-transform duration-300 {isExpanded ? 'justify-center' : (isEven ? 'justify-end' : 'justify-start')}">
                                        <span>{isExpanded ? 'Ver menos' : 'Ver detalhes'}</span>
                                        <span class="w-5 h-5 transition-transform duration-500 {isExpanded ? 'rotate-180' : ''}">{@html chevronDownIcon}</span>
                                    </div>

                                    <div class="grid transition-[grid-template-rows,margin,opacity] duration-700 ease-in-out w-full {isExpanded ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}">
                                        <div class="overflow-hidden">
                                            <div class="text-slate-600 leading-relaxed text-lg md:text-xl text-justify">
                                                {service.desc}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <!-- Separator Line (Modern Gradient) -->
                    {#if index !== services.length - 1}
                        <div class="w-full flex mt-24 {isEven ? 'justify-end' : 'justify-start'}">
                            <div class="w-7/10 h-1 {isEven ? 'bg-linear-to-l' : 'bg-linear-to-r'} from-slate-950 to-transparent rounded-full opacity-80"></div>
                        </div>
                    {/if}
                </div>
            {/each}
        </div>
        </div>
</div>
