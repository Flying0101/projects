import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px', 
        'xl': '1280px', 
      },
      colors: {
        main: '#FFFFFF',
        lighterSecondary: '#233B71',
        secondary: '#192A51',
      },
    },
  },
  plugins: [],
}
export default config
