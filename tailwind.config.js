module.exports = {
  mode: 'jit', // enabling Jist In Time Compiler engine
  content: ['./src/components/**/*.{ts,tsx}'],
  // darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      serif: ['PT Serif', 'sans-serif'],
      sans: ['PT Sans', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        modal:
          'top, translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))',
      },
      colors: {
        primary: '#C52C23',
        secondary: '#231F20',
        ternary: '#e56C2A',
        white: '#fff',
        black: '#000',
        darkBrown: '#181012',
        'light-gray': '#848278',
        'input-gray': '#949494',
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        success: '#0070f3',
        cyan: '#79FFE1',
        content: '#EDE7E0',
      },
      stroke: (theme) => ({
        white: theme('colors.white'),
      }),
      fill: (theme) => ({
        white: theme('colors.white'),
      }),
      minWidth: {
        4: '1rem',
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'screen-md-1/2': '384px',
        'screen-md-3/4': '576px',
      },
      height: (theme) => ({
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      }),
      minHeight: {
        0: '0',
        4: '1rem',
        '1/4': '25vh',
        '1/2': '50vh',
        '3/4': '75vh',
        full: '100vh',
        'screen-10': '10vh',
        'screen-20': '20vh',
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
      backgroundColor: (theme) => ({
        post: '#ede7e0',
        input: '#F3F3F3',
      }),
      backgroundImage: (theme) => ({
        'home-banner': 'url(/assets/banner/home-banner.png)',
        'gradient-footer':
          'linear-gradient(180deg, #641C1B 0%, #C52C23 168.33%)',
        'gradient-card': ' linear-gradient(135deg, #E4692A 0%, #E33228 100%)',
        'gradient-qualogy': 'linear-gradient(90deg, #E56C2A 0%, #C52C23 100%)',
      }),
      zIndex: {
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
    },
  },
};
