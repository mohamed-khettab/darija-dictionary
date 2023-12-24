/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2E5A88',      // Moroccan Blue
        secondary: '#E74C3C',    // Marrakech Red
        accent: '#138D75',       // Oasis Green
        background: '#FDF7E3',   // Lightened Desert Sand
        text: '#34495E',         // Darkened Slate Gray
        link: '#B9770E',         // Saharan Orange
        muted: '#7F8C8D',        // Subdued Silver
        border: '#D5CBA8',       // Antique White
        hover: '#FFD699',        // Lightened Sunflower Yellow
      },
      fontFamily: {
        body: ['Cormorant Garamond', 'serif'],
        heading: ['Amiri', 'serif'],
      },
      boxShadow: {
        card: '0 4px 8px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}