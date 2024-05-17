/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        primary_foreground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        primary_font: 'var(--primary-font)',
        secondary_font: 'var(--secondary-font)',
      }
    },
  },
  plugins: [],
}

