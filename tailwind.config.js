/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pale: '#efebe9', // brown-50
          light: '#a98274',
          DEFAULT: '#795548', // brown-500
          dark: '#4b2c20',
        },
        categories: {
          cembaloLog: '#ffcdd2', // red-100
          cembaloOther: '#ffccbc', // deeporange-100
          musicOther: '#f0f4c3', // lime-100
          bookLog: '#c8e6c9', // green-100
          other: '#cfd8dc', // bluegrey-100 
        },
      },
      fontFamily: {
        murecho: ["Murecho"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
