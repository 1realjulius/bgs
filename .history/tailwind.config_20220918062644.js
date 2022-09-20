/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        DosisSemiBold: 'DosisSemiBold, sans-serif',
        DosisMedium: 'DosisMedium, sans-serif',
        DosisRegular: 'DosisRegular, sans-serif',
      },
    },
    keyframes: {
      wiggle: {
        '0%, 100%': { transform: 'rotate(-3deg)' },
        '50%': { transform: 'rotate(3deg)' },
      }
    },
    animation: {
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
  },
  plugins: [],
}
