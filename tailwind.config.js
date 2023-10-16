const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'header': '#f7fafc',
        // 'line-1': '#e3e8ee',
        // 'line-2': '#d5dbe1',
        // 'black': '#262626',
        'default': '#5c5c5c',
        // 'red': '#dc2626',
        'atlantic': '#dce0e7',
        'c-green': '#264323',
        'black': '#312b41',
        'primary': '#312B41'
      },
      boxShadow: {
        // '3xl': '0 0 0 1px rgba(136,152,170,.1),0 15px 35px 0 rgba(49,49,93,.1),0 5px 15px 0 rgba(0,0,0,.08)',
      },
      maxWidth: {
        '8xl': '92rem'
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    fontFamily: {
      'inter': ['Inter var', ...defaultTheme.fontFamily.sans],
      'messina': ['Messina sans', ...defaultTheme.fontFamily.sans],
      'sohne': ['Sohne', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}
