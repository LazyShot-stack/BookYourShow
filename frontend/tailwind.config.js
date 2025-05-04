module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1E3A8A',
                secondary: '#3B82F6',
                accent: '#10B981',
                neutral: '#F3F4F6',
            },
            boxShadow: {
                'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
};