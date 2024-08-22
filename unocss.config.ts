import { defineConfig } from 'unocss/vite'
import config from '@slidev/client/uno.config'
import { presetWebFonts } from 'unocss'
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
    ...config,
    presets: [
        presetIcons({
            /* options */
        }),
        presetWebFonts({
            fonts: {
                strong: 'Rubik Iso',
            },
        }),
    ],
})
