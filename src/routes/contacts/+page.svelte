<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import * as m from '$lib/paraglide/messages';
	import bgPattern from '$lib/assets/Background.webp';
	import { CONTACTS } from '$lib/constants';
    
    import phoneIcon from '$lib/assets/icons/phone.svg?raw';
    import whatsappIcon from '$lib/assets/icons/whatsapp.svg?raw';
    import emailIcon from '$lib/assets/icons/email.svg?raw';
    import locationIcon from '$lib/assets/icons/map-pin.svg?raw';
    import spinnerIcon from '$lib/assets/icons/spinner.svg?raw';
    import sendIcon from '$lib/assets/icons/send.svg?raw';
    import checkIcon from '$lib/assets/icons/check.svg?raw';
    import alertIcon from '$lib/assets/icons/alert.svg?raw';

	let form = $state<HTMLFormElement>();
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');

	onMount(() => {
		// Initialize EmailJS via CDN script
		// @ts-ignore
		if (window.emailjs) window.emailjs.init("5W8RHkDQIoA7-sfDv");
	});

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!form) return;
		isSubmitting = true;
		submitStatus = 'idle';

		try {
			// Execute reCAPTCHA v3
			// @ts-ignore
			const token = await window.grecaptcha.execute("6LfyW24rAAAAAKvUmrXl5ZvVpZYC7U4BN2tIpM2g", { action: "submit" });
			
			if (!token) {
				alert("Falha no reCAPTCHA. Tente novamente.");
				isSubmitting = false;
				return;
			}

			// Add token to form data
			const input = document.createElement('input');
			input.type = 'hidden';
			input.name = 'recaptcha_token';
			input.value = token;
			form.appendChild(input);

			// Send with EmailJS
			// @ts-ignore
			await window.emailjs.sendForm('service_hwl5tpo', 'template_auov6d5', form);
			
			submitStatus = 'success';
			form.reset();
			form.removeChild(input);
		} catch (error) {
			console.error("Erro ao enviar:", error);
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<svelte:head>
	<title>{m.contact_page_title()}</title>
	<meta name="description" content={m.contact_page_desc()} />

	<!-- Open Graph / Facebook / Instagram -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={page.url.href} />
	<meta property="og:title" content={m.contact_page_title()} />
	<meta property="og:description" content={m.contact_page_desc()} />
	<meta property="og:image" content="{page.url.origin}{bgPattern}" />
	<meta property="og:site_name" content="Táxi Cerveira" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={m.contact_page_title()} />
	<meta name="twitter:description" content={m.contact_page_desc()} />
	<meta name="twitter:image" content="{page.url.origin}{bgPattern}" />

	<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
	<script src="https://www.google.com/recaptcha/api.js?render=6LfyW24rAAAAAKvUmrXl5ZvVpZYC7U4BN2tIpM2g"></script>
</svelte:head>

<div class="min-h-screen bg-slate-50 pt-32 pb-20 font-poppins relative overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0 pointer-events-none">
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

    <div class="container mx-auto px-6 relative z-10 max-w-7xl">
        
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight">
                {m.contact_hero_title()}
            </h1>
            <div class="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full mb-8"></div>
            <p class="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {m.contact_hero_subtitle()}
            </p>
        </div>

        <div class="flex flex-col gap-12 lg:gap-20">
            
            <!-- Contact Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <!-- Phone Card (Highlighted) -->
                <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    <!-- Watermark Icon -->
                    <div class="absolute -right-6 -bottom-6 text-emerald-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                        <span class="w-40 h-40 block">{@html phoneIcon}</span>
                    </div>
                    <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <span class="w-6 h-6">{@html phoneIcon}</span>
                    </div>
                    <p class="text-slate-400 font-bold text-xs uppercase tracking-wider mb-2">{m.contact_info_phone_label()}</p>
                    <a href="tel:{CONTACTS.phone}" class="text-2xl font-bold text-slate-900 block mb-4 hover:text-emerald-600 transition-colors">{CONTACTS.phone}</a>
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">
                        <span class="relative flex h-2 w-2">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        24H Disponível
                    </div>
                </div>

                <!-- WhatsApp Card -->
                <a href="https://wa.me/{CONTACTS.whatsapp}" target="_blank" rel="noopener noreferrer" class="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden block">
                    <!-- Watermark Icon -->
                    <div class="absolute -right-6 -bottom-6 text-emerald-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                        <span class="w-40 h-40 block">{@html whatsappIcon}</span>
                    </div>
                    <div class="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                        <span class="w-6 h-6">{@html whatsappIcon}</span>
                    </div>
                    <p class="text-slate-400 font-bold text-xs uppercase tracking-wider mb-2">{m.contact_info_whatsapp_label()}</p>
                    <p class="text-xl font-bold text-slate-900 block hover:text-emerald-600 transition-colors">{m.contact_whatsapp_action()}</p>
                </a>

                <!-- Email Card -->
                <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
                    <!-- Watermark Icon -->
                    <div class="absolute -right-6 -bottom-6 text-yellow-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                        <span class="w-40 h-40 block">{@html emailIcon}</span>
                    </div>
                    <div class="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                        <span class="w-6 h-6">{@html emailIcon}</span>
                    </div>
                    <p class="text-slate-400 font-bold text-xs uppercase tracking-wider mb-2">{m.contact_info_email_label()}</p>
                    <a href="mailto:geral@taxicerveira.pt" class="text-lg font-bold text-slate-900 block hover:text-yellow-600 transition-colors break-all">geral@taxicerveira.pt</a>
                </div>

                <!-- Location Card -->
                <a href="https://www.google.com/maps/search/?api=1&query=Vila+Nova+de+Cerveira,+Portugal" target="_blank" rel="noopener noreferrer" class="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden block">
                    <!-- Watermark Icon -->
                    <div class="absolute -right-6 -bottom-6 text-blue-500/5 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                        <span class="w-40 h-40 block">{@html locationIcon}</span>
                    </div>
                    <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <span class="w-6 h-6">{@html locationIcon}</span>
                    </div>
                    <p class="text-slate-400 font-bold text-xs uppercase tracking-wider mb-2">{m.contact_info_address_label()}</p>
                    <p class="text-lg font-bold text-slate-900 block">Vila Nova de Cerveira,<br/>Portugal</p>
                </a>

            </div>

            <!-- Form Section (Centered) -->
            <div class="max-w-3xl mx-auto w-full">
                <div class="bg-white border border-slate-100 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
                    <!-- Glow effect -->
                    <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <form bind:this={form} onsubmit={handleSubmit} class="space-y-8 relative z-10">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="space-y-2">
                            <label for="name" class="text-sm font-medium text-slate-700">{m.contact_form_name_label()}</label>
                            <input type="text" name="name" id="name" placeholder={m.contact_form_name_placeholder()} required 
                                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                        </div>
                        <div class="space-y-2">
                            <label for="email" class="text-sm font-medium text-slate-700">{m.contact_form_email_label()}</label>
                            <input type="email" name="email" id="email" placeholder={m.contact_form_email_placeholder()} required 
                                class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all" />
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label for="message" class="text-sm font-medium text-slate-700">{m.contact_form_message_label()}</label>
                        <textarea name="message" id="message" rows="4" placeholder={m.contact_form_message_placeholder()} required
                            class="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none min-h-40"></textarea>
                    </div>

                    <button type="submit" disabled={isSubmitting}
                        class="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-5 rounded-xl shadow-lg shadow-emerald-600/20 transition-all transform active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3 text-lg">
                        {#if isSubmitting}
                            <span class="animate-spin h-5 w-5 text-white">{@html spinnerIcon}</span>
                            {m.contact_form_sending()}
                        {:else}
                            {m.contact_form_submit()}
                            <span class="w-5 h-5">{@html sendIcon}</span>
                        {/if}
                    </button>

                    {#if submitStatus === 'success'}
                        <div class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                            <span class="w-5 h-5 text-emerald-500 shrink-0">{@html checkIcon}</span>
                            {m.contact_form_success()}
                        </div>
                    {/if}

                    {#if submitStatus === 'error'}
                        <div class="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-sm font-medium flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                            <span class="w-5 h-5 text-red-500 shrink-0">{@html alertIcon}</span>
                            {m.contact_form_error()}
                        </div>
                    {/if}
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
