/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto Slab"],
      },
      colors: {
        backGround: "#E5E5E5",
        navyBlue: "#001F3F",
        forestGreen: "#228B22",
        lightBlue: "#2EC5CE",
        primaryBlack: "#575757",
        primaryBlack2: "#202020",
        ui_primary: "#1F284F",
        ui_secondary1: "#0070F0",
        tertiary: "#FAFBFC",
        Ash: "#575757",
        ui_primary2:"#228B22",
        ui_button:"#0070F0",
        linear: "#F5F0FF",
      },
      keyframes: {
        "animate-fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "animate-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-in": "animate-fade-in 0.4s ease-out backwards",
        "fade-out": "animate-fade-out 0.4s ease-out forwards",
      },
    },
    plugins: [],
  },
=======
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			xs: '360px',
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				Roboto: ['Roboto Slab'],
			},
			colors: {
				backGround: '#E5E5E5',
				navyBlue: '#001F3F',
				forestGreen: '#228B22',
				lightBlue: '#2EC5CE',
				primaryBlack: '#575757',
				primaryBlack2: '#202020',
				ui_primary: '#1F284F',
				ui_secondary1: '#0070F0',
				ui_primary2: '#228B22',
				tertiary: '#FAFBFC',
				accent_1: '#3CBA79',
				accent_3: '#B7C5CC',
				accent_4: ' #DBDBDB',
				tertiary: '#FAFBFC',
				Ash: '#575757',
				ui_primary2: '#228B22',
				ui_button: '#0070F0',
				linear: '#F5F0FF',
			},
			keyframes: {
				'animate-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'animate-fade-out': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'fade-in': 'animate-fade-in 0.4s ease-out backwards',
				'fade-out': 'animate-fade-out 0.4s ease-out forwards',
			},
		},
		plugins: [],
	},
>>>>>>> 03691fac21fe7c9d1cbc741974d76de17d85be51
};
