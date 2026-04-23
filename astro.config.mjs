// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    integrations: [mdx()],
<<<<<<< HEAD
    adapter: netlify({imageCDN: true}),
=======
    adapter: netlify(),
>>>>>>> 6b4af62b97e95f468c345336558fc134e9d7759f
    output: 'server',
});
