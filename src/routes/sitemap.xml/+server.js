import { locales } from '$lib/paraglide/runtime';
import settings from '../../../project.inlang/settings.json';

export const prerender = true;

export async function GET() {
    const site = 'https://www.taxicerveira.pt';
    const defaultLocale = settings.baseLocale; // Vai buscar a língua default automaticamente
    
    // List your base page slugs (without language prefixes)
    const pageSlugs = [
        '',                     // Homepage
        '/about',               // Sobre
        '/contacts',            // Contactos
        '/locations',           // Localizações
        '/partners',            // Parceiros
        '/photos',              // Fotos
        '/prices',              // Preços
        '/privacy',    // Política de Privacidade
        '/schedule',             // Schedule
        '/services',            // Serviços
        '/terms' // Termos e Condições
    ];

    let xmlContent = '';

    // Loop through every language + every page
    for (const locale of locales) {
        for (const slug of pageSlugs) {
            // Se for a língua default, não leva prefixo (ex: /about)
            // Se for outra língua, leva prefixo (ex: /en/about)
            const path = locale === defaultLocale
                ? slug
                : `/${locale}${slug}`;
            
            xmlContent += `
            <url>
                <loc>${site}${path}</loc>
                <changefreq>monthly</changefreq>
                <priority>${slug === '' ? '1.0' : '0.8'}</priority>
            </url>`;
        }
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xmlContent}
    </urlset>`;

    return new Response(sitemap, {
        headers: { 'Content-Type': 'application/xml' }
    });
}