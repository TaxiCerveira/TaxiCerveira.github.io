<script lang="ts">
	import logo from '$lib/assets/logoCores.webp';
	import bgPattern from '$lib/assets/Background.webp';
	import { localizeHref } from '$lib/paraglide/runtime';
	import * as m from '$lib/paraglide/messages';
	import { CONTACTS } from '$lib/constants';

	const currentYear = new Date().getFullYear();
</script>

<footer class="relative bg-slate-900 text-slate-300 font-poppins border-t border-slate-800 pt-16 pb-8 overflow-hidden">
	<!-- Background Texture & Effects -->
	<div class="absolute inset-0 z-0 pointer-events-none">
		<img src={bgPattern} class="absolute inset-0 w-full h-full object-cover opacity-100" alt="" title="Background Pattern" width="1920" height="1080" loading="lazy" />
		<div class="absolute inset-0 bg-linear-to-b from-slate-900/95 to-slate-950/95"></div>
		
		<!-- Subtle Glows -->
		<div class="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
		<div class="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]"></div>
		<div class="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px]"></div>
	</div>

	<div class="container mx-auto px-6 relative z-10">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
			<!-- Brand & About -->
			<div class="space-y-6">
				<a href={localizeHref('/')} class="block w-32 mx-auto">
					<img src={logo} alt="Táxi Cerveira" title="Táxi Cerveira" class="w-full h-auto" width="200" height="80" loading="lazy" />
				</a>
				<p class="text-sm leading-relaxed text-slate-400">
					{m.footer_about_text()}
				</p>
				<div class="flex gap-4">
					<!-- Social Icons (Placeholders) -->
					<a href="https://www.facebook.com/profile.php?id=61577638826412&locale=pt_PT" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300" aria-label="Facebook">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
					</a>
					<a href="https://www.instagram.com/taxi_cerveira/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all duration-300" aria-label="Instagram">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
					</a>
					<a href="https://www.tiktok.com/@taxicerveira" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300" aria-label="TikTok">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
					</a>
					<a href="https://www.pai.pt/paginas/692331-taxi-cerveira" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300" aria-label="Páginas Amarelas">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
					</a>
					<a href="https://wa.me/{CONTACTS.whatsapp}" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-slate-950 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300" aria-label="WhatsApp">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div class="hidden md:block">
				<h3 class="text-white font-bold text-lg mb-6 relative inline-block">
					{m.footer_links_title()}
					<span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
				</h3>
				<ul class="space-y-4">
					<li><a href={localizeHref('/')} class="hover:text-yellow-500 transition-colors flex items-center gap-2"><span class="text-yellow-500">›</span> {m.navbar_link_home()}</a></li>
					<li><a href={localizeHref('/about')} class="hover:text-yellow-500 transition-colors flex items-center gap-2"><span class="text-yellow-500">›</span> {m.navbar_link_about()}</a></li>
					<li><a href={localizeHref('/services')} class="hover:text-yellow-500 transition-colors flex items-center gap-2"><span class="text-yellow-500">›</span> {m.navbar_link_services()}</a></li>
					<li><a href={localizeHref('/prices')} class="hover:text-yellow-500 transition-colors flex items-center gap-2"><span class="text-yellow-500">›</span> {m.navbar_link_prices()}</a></li>
					<li><a href={localizeHref('/contacts')} class="hover:text-yellow-500 transition-colors flex items-center gap-2"><span class="text-yellow-500">›</span> {m.navbar_link_contact()}</a></li>
				</ul>
			</div>

			<!-- Useful Links (Transport & Extras) -->
			<div>
				<h3 class="text-white font-bold text-lg mb-6 relative inline-block">
					{m.footer_useful_title()}
					<span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-emerald-500 rounded-full"></span>
				</h3>
				<ul class="space-y-4">
					<li><a href="https://www.ana.pt" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors flex items-center gap-2"><span class="text-emerald-500">✈</span> Aeroportos (ANA)</a></li>
					<li><a href="https://www.ipma.pt" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors flex items-center gap-2"><span class="text-emerald-500">☁</span> Meteorologia (IPMA)</a></li>
					<li><a href="https://www.cp.pt" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors flex items-center gap-2"><span class="text-emerald-500">🚆</span> Comboios Portugal (CP)</a></li>
					<li><a href="https://rede-expressos.pt" target="_blank" rel="noopener noreferrer" class="hover:text-emerald-500 transition-colors flex items-center gap-2"><span class="text-emerald-500">🚌</span> Rede Expressos (RE)</a></li>
				</ul>
			</div>

			<!-- Contacts -->
			<div>
				<h3 class="text-white font-bold text-lg mb-6 relative inline-block">
					{m.footer_contacts_title()}
					<span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-yellow-500 rounded-full"></span>
				</h3>
				<ul class="space-y-6">
					<li class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center shrink-0 text-yellow-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
						</div>
						<div>
							<p class="text-white font-medium">Vila Nova de Cerveira</p>
							<p class="text-sm text-slate-500">Praça da Galiza, Portugal</p>
						</div>
					</li>
					<li class="flex items-start gap-4">
						<div class="w-10 h-10 rounded-lg bg-slate-950 flex items-center justify-center shrink-0 text-emerald-500">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
						</div>
						<div>
							<p class="text-white font-medium">Ligue-nos 24h</p>
							<a href="tel:{CONTACTS.phone}" class="text-sm text-slate-400 hover:text-white transition-colors">{CONTACTS.phone}</a>
						</div>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-t border-slate-950 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
			<p>© {currentYear} Táxi Cerveira. {m.footer_rights()}.</p>
			<div class="flex gap-6">
				<a href={localizeHref('/privacy')} class="hover:text-slate-400 transition-colors">{m.footer_privacy()}</a>
				<a href={localizeHref('/terms')} class="hover:text-slate-400 transition-colors">{m.footer_terms()}</a>
				<a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer" class="hover:text-slate-400 transition-colors">{m.footer_complaints()}</a>
			</div>
		</div>
	</div>
</footer>