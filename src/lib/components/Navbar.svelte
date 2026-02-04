<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/state'; // <-- Svelte 5: Import `page` from `$app/state`
	import logo from '$lib/assets/logoCores.webp';
	import { setLocale, getLocale, localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { CONTACTS } from '$lib/constants';

	type LanguageCode = 'pt-pt' | 'en' | 'es' | 'fr';

	interface Language {
		code: LanguageCode;
		label: string;
		short: string;
	}

	interface NavLink {
		name: () => string;
		href: string;
	}

	const languages: Language[] = [
		{ code: 'pt-pt', label: 'Português', short: 'PT' },
		{ code: 'en', label: 'English', short: 'EN' },
		{ code: 'es', label: 'Español', short: 'ES' },
		{ code: 'fr', label: 'Français', short: 'FR' }
	];

	// State Variables
	let isScrolled = $state(false);
	let isMobileMenuOpen = $state(false);
	let isLangMenuOpen = $state(false);
	let selectedLanguage = $derived(languages.find((l) => l.code === getLocale()) ?? languages[0]);

	let isReady = $state(false);
	let dropdownRef = $state<HTMLDivElement>();
	let triggerRef = $state<HTMLButtonElement>();

	const links: NavLink[] = [
		{ name: m.navbar_link_home, href: `/` },
		{ name: m.navbar_link_about, href: '/about' },
		{ name: m.navbar_link_services, href: '/services' },
		{ name: m.navbar_link_prices, href: '/prices' },
		{ name: m.navbar_link_contact, href: '/contacts' }
	];

	onMount(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });
		isReady = true;
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleScroll(): void {
		isScrolled = window.scrollY > 10;
	}

	function closeMobileMenu(): void {
		isMobileMenuOpen = false;
	}

	function toggleLangMenu(event: MouseEvent): void {
		event.stopPropagation();
		isLangMenuOpen = !isLangMenuOpen;
	}

	function handleWindowClick(event: MouseEvent): void {
		const target = event.target as Node;
		if (
			isLangMenuOpen &&
			dropdownRef &&
			triggerRef &&
			!dropdownRef.contains(target) &&
			!triggerRef.contains(target)
		) {
			isLangMenuOpen = false;
		}
	}

	function handleLanguageChange(lang: Language): void {
		setLocale(lang.code);
		isLangMenuOpen = false;
	}
</script>

<svelte:window onclick={handleWindowClick} />

<nav
	class="fixed top-0 w-full z-50 h-20 transition-all duration-300 ease-in-out font-poppins flex items-center {isScrolled && !isMobileMenuOpen
		? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
		: 'bg-transparent'}"
>
	<div class="container mx-auto px-6 flex justify-between items-center relative z-50">
		{#if isReady}
			<div in:fly={{ y: -20, duration: 600, delay: 0 }}>
				<a
					href={localizeHref('/')}
					class="flex items-center gap-3 transition-transform active:scale-95 z-50"
					onclick={closeMobileMenu}
				>
					<img src={logo} alt="Táxi Cerveira" title="Táxi Cerveira" class="h-10 w-auto" width="200" height="80" loading="eager" />
					<span
						class="font-bold text-2xl tracking-tight transition-colors duration-300 {isScrolled && !isMobileMenuOpen
							? 'text-slate-900'
							: 'text-white'}"
					>
						{m.navbar_name1()}
						<span class="text-yellow-500">
							{m.navbar_name2()}
						</span>
					</span>
				</a>
			</div>
		{:else}
			<div class="opacity-0">
				<div class="h-10"></div>
			</div>
		{/if}

		<div class="hidden md:flex items-center space-x-8">
			{#if isReady}
				<div class="flex items-center space-x-8" in:fly={{ y: -20, duration: 600, delay: 150 }}>
					{#each links as link}
						{@const isActive = page.route.id === link.href}

						<a
							href={localizeHref(link.href)}
							class="text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 relative group
                            {isActive
								? 'text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]' // ACTIVE STATE: Green Text + Text Glow
								: isScrolled && !isMobileMenuOpen
									? 'text-slate-600 hover:text-yellow-500'
									: 'text-white/90 hover:text-yellow-500'} "
						>
							{link.name()}

							<span
								class="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-300 
                                {isActive
									? 'w-full bg-emerald-500 shadow-[0_0_10px_#10b981]' // ACTIVE: Full width, Green, Strong Glow
									: 'w-0 bg-yellow-500 group-hover:w-full' // INACTIVE: No width, Yellow on hover
								}"
							>
							</span>
						</a>
					{/each}

					<div class="h-6 w-px {isScrolled && !isMobileMenuOpen ? 'bg-slate-200' : 'bg-white/20'} mx-2"></div>

					<div class="relative">
						<button
							bind:this={triggerRef}
							onclick={toggleLangMenu}
							class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors duration-300
                            {isScrolled && !isMobileMenuOpen
								? 'text-slate-800 hover:text-yellow-600'
								: 'text-white hover:text-yellow-400'}"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0A11.953 11.953 0 0112 10.5c2.998 0 5.74-1.1 7.843-2.918"
								/>
							</svg>

							{#if selectedLanguage}
								<span>{selectedLanguage.short}</span>
							{/if}

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
								class="w-3 h-3 transition-transform duration-300 {isLangMenuOpen ? 'rotate-180' : ''}"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</button>

						{#if isLangMenuOpen}
							<div
								bind:this={dropdownRef}
								class="absolute top-full right-0 mt-6 w-48 py-2 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-slate-100 transform origin-top-right transition-all animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
							>
								{#each languages as lang}
									<button
										onclick={() => handleLanguageChange(lang)}
										class="w-full text-left px-5 py-3 text-sm font-medium transition-all duration-200 flex justify-between items-center group {selectedLanguage.code ===
										lang.code
											? 'text-emerald-500 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)] bg-emerald-50/10'
											: 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:pl-7'}"
									>
										<span>{lang.label}</span>
										<span
											class="text-xs font-bold transition-colors {selectedLanguage.code === lang.code ? 'text-emerald-500' : 'text-slate-300 group-hover:text-yellow-500'}"
											>{lang.short}</span
										>
									</button>
								{/each}
							</div>
						{/if}
					</div>

					<a
						href="tel:{CONTACTS.phone}"
						class="relative overflow-hidden group px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 hover:scale-105
                        {isScrolled && !isMobileMenuOpen
							? 'bg-slate-900 text-white hover:bg-yellow-500 hover:text-slate-900 shadow-lg'
							: 'bg-white text-slate-900 hover:bg-yellow-400 shadow-[0_0_20px_rgba(255,255,255,0.2)]'}"
					>
						<span class="relative z-10 flex items-center gap-2">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							{m.navbar_cta()}
						</span>
						<div
							class="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out z-0"
						></div>
					</a>
				</div>
			{/if}
		</div>

		<button
			class="md:hidden p-2 transition-colors duration-300 {isScrolled && !isMobileMenuOpen ? 'text-slate-900' : 'text-white'}"
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			aria-label="Menu"
		>
			<div class="w-6 h-5 relative flex flex-col justify-between">
				<span
					class="w-full h-0.5 rounded-full transition-all duration-300 {isScrolled && !isMobileMenuOpen
						? 'bg-slate-900'
						: 'bg-white'} {isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}"
				></span>
				<span
					class="w-full h-0.5 rounded-full transition-all duration-300 {isScrolled && !isMobileMenuOpen
						? 'bg-slate-900'
						: 'bg-white'} {isMobileMenuOpen ? 'opacity-0' : ''}"
				></span>
				<span
					class="w-full h-0.5 rounded-full transition-all duration-300 {isScrolled && !isMobileMenuOpen
						? 'bg-slate-900'
						: 'bg-white'} {isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"
				></span>
			</div>
		</button>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="md:hidden fixed inset-0 top-0 z-40 bg-slate-950 flex flex-col pt-24 pb-10 px-8 animate-in fade-in slide-in-from-top-5 duration-300 overflow-y-auto"
		>
			<div class="flex flex-col space-y-6 mb-10">
				{#each links as link}
					{@const isActive = page.route.id === link.href}
					<a
						href={localizeHref(link.href)}
						class="text-3xl font-bold transition-colors duration-300
                        {isActive ? 'text-emerald-500' : 'text-white/90 hover:text-yellow-500'}"
						onclick={closeMobileMenu}
					>
						{link.name()}
					</a>
				{/each}
			</div>

			<hr class="border-white/10 mb-8" />
			<p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
				{m.navbar_mobile_language_label()}
			</p>
			<div class="grid grid-cols-2 gap-3 mb-8">
				{#each languages as lang}
					<button
						onclick={() => {
							handleLanguageChange(lang);
							closeMobileMenu();
						}}
						class="py-3 px-4 rounded-xl border font-bold text-sm uppercase transition-all duration-300 flex items-center justify-between group {selectedLanguage.code ===
						lang.code
							? 'bg-emerald-500/10 border-emerald-500 text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
							: 'bg-white/5 border-white/10 text-white hover:bg-yellow-500 hover:text-slate-900 hover:border-yellow-500'}"
					>
						{lang.label}
						<span class="text-[10px] transition-colors {selectedLanguage.code === lang.code ? 'text-emerald-500/60' : 'text-white/20 group-hover:text-slate-900/40'}"
							>{lang.short}</span
						>
					</button>
				{/each}
			</div>

			<a
				href="tel:{CONTACTS.phone}"
				class="mt-auto w-full text-center py-4 bg-yellow-500 text-slate-900 font-black text-lg rounded-2xl shadow-xl shadow-yellow-500/20 active:scale-95 transition-transform"
				onclick={closeMobileMenu}
			>
				{m.navbar_mobile_cta()}
			</a>
		</div>
	{/if}
</nav>