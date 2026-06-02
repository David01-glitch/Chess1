/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        matte: '#14110f', // matte black
        ink: '#1c1917', // slate charcoal
        graphite: '#3f3a36', // graphite gray
        walnut: '#6b4f3a', // warm walnut brown
        walnutdark: '#4a3826',
        ivory: '#f6f1e7', // soft ivory
        marble: '#fbfaf7', // marble white
        gold: '#b08d4f', // subtle gold accent
        golddim: '#9a7a40',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
      },
      fontSize: {
        base: ['17px', '1.7'],
      },
      lineHeight: {
        relaxed: '1.7',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(20,17,15,0.04), 0 8px 30px rgba(20,17,15,0.06)',
        lift: '0 2px 4px rgba(20,17,15,0.06), 0 18px 50px rgba(20,17,15,0.10)',
      },
      borderRadius: {
        xl: '0.9rem',
      },
      maxWidth: {
        prose: '72ch',
      },
      backgroundImage: {
        // Subtle chessboard pattern built from CSS gradients.
        chess:
          'linear-gradient(45deg, rgba(20,17,15,0.04) 25%, transparent 25%, transparent 75%, rgba(20,17,15,0.04) 75%, rgba(20,17,15,0.04)), linear-gradient(45deg, rgba(20,17,15,0.04) 25%, transparent 25%, transparent 75%, rgba(20,17,15,0.04) 75%, rgba(20,17,15,0.04))',
      },
      backgroundSize: {
        chess: '48px 48px',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
