import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      md: "899px",
    },
    extend: {
      colors: {
        'light-gray': '#F5F5F5',
      }
    },
  },
  plugins: [],
}
export default config
