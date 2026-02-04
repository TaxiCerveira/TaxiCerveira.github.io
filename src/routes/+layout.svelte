<script lang="ts">
	import { page } from '$app/state';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { locales, localizeHref } from '$lib/paraglide/runtime';
	import favicon from '$lib/assets/logoCores.webp';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
    <!-- Canonical URL -->
    <link rel="canonical" href={page.url.href} />
    
    <!-- Hreflang Tags para SEO Multi-idioma -->
    {#each locales as locale}
        <link rel="alternate" hreflang={locale} href={localizeHref(page.url.pathname, { locale })} />
    {/each}
</svelte:head>

<Navbar />

{@render children()}

<div style="display:none">
	{#each locales as locale}
	<a href={localizeHref(page.url.pathname, { locale })}>
		{locale}
	</a>
	{/each}
</div>

<Footer />
