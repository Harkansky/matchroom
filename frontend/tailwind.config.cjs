// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx,html}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
        // …autres plugins éventuels
    ],
    daisyui: {
        /* vos options DaisyUI ici, si besoin */
    },
}
