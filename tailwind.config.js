export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'vibrant-pink': '#ff4d6d',
                'soft-pink': '#ffb3c1',
                'deep-red': '#c9184a',
                'bg-cream': '#fff0f3',
                'warm-white': '#fff5f7',
                'muted-rose': '#a4133c',
                romantic: {
                    50: '#fff0f3',
                    100: '#ffccd5',
                    200: '#ffb3c1',
                    300: '#ff8fa3',
                    400: '#ff758f',
                    500: '#ff4d6d',
                    600: '#c9184a',
                    700: '#a4133c',
                    800: '#800f2f',
                    900: '#590d22',
                    950: '#2b050f',
                }
            },
            fontFamily: {
                custom: ['CustomFont', 'serif'],
                handwriting: ['CustomFont', 'cursive'],
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delayed': 'float 6s ease-in-out 3s infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                }
            },
            backgroundImage: {
                'dotted-pattern': 'radial-gradient(#ff4d6d 1.5px, transparent 1.5px)',
                'custom-bg': "url('/src/assets/images/custom-bg.png')",
            },
            backgroundSize: {
                'dotted-sm': '24px 24px',
            }
        },
    },
    plugins: [],
}
