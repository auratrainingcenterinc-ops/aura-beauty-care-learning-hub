module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          purple: '#6B46C1',      // Primary elegant purple
          lavender: '#E0E7FF',     // Soft lavender accent
          white: '#FFFFFF',
          dark: '#1E1B4B',
          light: '#F3E8FF',
          accent: '#A78BFA',     // Secondary lavender
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}