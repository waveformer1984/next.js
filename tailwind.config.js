module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        vhsBlue: '#00c9ff',
        vhsGreen: '#00ffcc',
        vhsOrange: '#ff6f00',
        vhsBackground: '#0d1117',
        vhsOverlay: '#1f2937',
        vhsAccent: '#80ffbf'
      },
      fontFamily: {
        mono: ['Courier New', 'monospace']
      },
      boxShadow: {
        vhs: '0 0 5px #0ff, 0 0 10px #0ff1ce'
      },
      animation: {
        glitch: 'glitch 2s infinite',
        scanline: 'scanline 5s linear infinite'
      }
    }
  },
  plugins: []
}
