/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'button-primary': 'var(--button-primary)',
        'button-secondary': 'var(--button-secondary)',
        'button-danger': 'var(--button-danger)',
        'link-color': 'var(--link-color)',
        'border-color': 'var(--border-color)',
        'shadow-color': 'var(--shadow-color)',
      },
    },
  },
  plugins: [],
}

