// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Dominio de GitHub Pages (debe coincidir con public/CNAME)
  site: 'https://www.acaciascoffeefarm.com',

  // GitHub Pages sirve cada página como carpeta (/cafe-origen/) y redirige con un 301
  // si falta la barra: los enlaces internos la llevan siempre
  trailingSlash: 'always',

  // Fuentes de Google descargadas en el build y servidas desde el propio sitio
  // (sin la hoja de fonts.googleapis.com que bloqueaba el render). Se pintan con
  // <Font /> en BaseLayout.astro y tokens.css las usa a través de su `cssVariable`.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-fraunces',
      weights: ['400 600'],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
      // Eje óptico: los titulares grandes usan el corte de display
      options: { experimental: { variableAxis: { opsz: [['9', '144']] } } },
    },
    {
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
      weights: ['400 600'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Great Vibes',
      cssVariable: '--font-great-vibes',
      weights: [400],
      styles: ['normal'],
      fallbacks: ['cursive'],
    },
  ],
});
