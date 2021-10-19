module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    colors: {
      black: '#000',
      gradientwhite:'#D1FAE5',
      litegreen:'#10B981',
      green:'#059669',
      white: '#F9FAFB',
      blue: "#6D28D9",
      grey: '#6B7280',
      liteblue: '#8FA3FF',
      pink: '#DB2777',
      vivo: '#0089CB',
      poco: '#E7E200',
      samsung: '#004AA6',
      xiaomi: '#F76400',
      realme: '#F5C310',
      oppo: '#008653',
      oneplus: '#EB0513',
      compare:'#2874F0'
    }
 
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
