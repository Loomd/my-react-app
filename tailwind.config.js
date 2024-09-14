/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#000000',
        'text-color': '#00ff00',
        'link-color': '#00cc00',
        'hover-color': '#00ff00',
      },
      fontFamily: {
        retro: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [
    // require('@magicui/react/plugin'),
  ],
}

