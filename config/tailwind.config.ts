import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
import containerQueries from '@tailwindcss/container-queries'

export default {
  prefix: 'qapps-',
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '0.625rem', lg: '0.9375rem' },
    },

    // This REPLACES Tailwind's default breakpoints.
    screens: {
      'small-phone': '360px',
      phone: '480px',
      'small-device': '640px',        // ~ sm
      'tablet-portrait': '768px',     // ~ md
      'tablet-landscape': '1024px',   // ~ lg
      laptop: '1280px',               // ~ xl
      'large-laptop': '1440px',
      'very-wide-laptop': '1536px',   // ~ 2xl
      fullhd: '1920px',
      qhd: '2560px',
      uhd: '3840px',
      'supports-hover': { raw: '(hover: hover) and (pointer: fine)' },
      touch: { raw: '(pointer: coarse)' },
    },

    extend: {},
  },

  future: {
    hoverOnlyWhenSupported: true,
  },

  plugins: [
    typography,
    forms({ strategy: 'class' }),
    aspectRatio,
    containerQueries,

    // Headings from theme scale
    plugin(({ addBase, theme }) => {
      const h1 = theme('fontSize.3xl')
      const h2 = theme('fontSize.2xl')
      const h3 = theme('fontSize.xl')
      const h4 = theme('fontSize.lg')
      const h5 = theme('fontSize.base')
      const h6 = theme('fontSize.sm')

      addBase({
        h1: { fontSize: h1[0], lineHeight: h1[1].lineHeight, fontWeight: theme('fontWeight.bold') },
        h2: { fontSize: h2[0], lineHeight: h2[1].lineHeight, fontWeight: theme('fontWeight.semibold') },
        h3: { fontSize: h3[0], lineHeight: h3[1].lineHeight, fontWeight: theme('fontWeight.semibold') },
        h4: { fontSize: h4[0], lineHeight: h4[1].lineHeight, fontWeight: theme('fontWeight.semibold') },
        h5: { fontSize: h5[0], lineHeight: h5[1].lineHeight, fontWeight: theme('fontWeight.semibold') },
        h6: { fontSize: h6[0], lineHeight: h6[1].lineHeight, fontWeight: theme('fontWeight.semibold') },
      })
    }),

    // Prefixed button components using theme tokens
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.qapps-btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          borderRadius: theme('borderRadius.md'),
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: theme('lineHeight.6'),
          display: 'inline-flex',
          alignItems: 'center',
          gap: theme('spacing.2'),
          transitionProperty: theme('transitionProperty.colors'),
          transitionDuration: theme('transitionDuration.150'),
        },
        '.qapps-btn-blue': {
          backgroundColor: theme('colors.blue.600'),
          color: theme('colors.white'),
          '&:hover': { backgroundColor: theme('colors.blue.700') },
          '&:disabled': { opacity: '0.5', cursor: 'not-allowed' },
        },
        '.qapps-btn-red': {
          backgroundColor: theme('colors.red.600'),
          color: theme('colors.white'),
          '&:hover': { backgroundColor: theme('colors.red.700') },
          '&:disabled': { opacity: '0.5', cursor: 'not-allowed' },
        },
      })
    }),
  ],
} satisfies Config
