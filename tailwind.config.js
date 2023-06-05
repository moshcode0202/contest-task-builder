/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            m: '351px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1200px',
            xxl: '1400px',
        },
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            avenir: ['Avenir Next Cyr', 'sans-serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: '#ffffff',
            black: '#313943',
            green: '#0ee29f',
            gray: {
                DEFAULT: '#fafafd',
                300: '#c6cbd5',
            },
            indigo: '#5a68ff',
            denger: '#ff0000',
        },
        extend: {
            boxShadow: {
                '3xl': '0 14px 20px 0 rgba(28, 60, 125, 0.01)',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('tailwind-scrollbar'),
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
    variants: {
        scrollbar: ['rounded'],
    },
};
