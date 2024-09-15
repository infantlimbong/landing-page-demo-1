module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#9A0000',
                secondary: '#E6C895',
                dark: '#221B15',
            },
            fontFamily: {
                serif: ['Cormorant Garamond', 'serif'],
                sans: ['Lato', 'sans-serif'],
                cursive: ['Great Vibes', 'cursive'],
            },
        },
    },
    plugins: [],
}
