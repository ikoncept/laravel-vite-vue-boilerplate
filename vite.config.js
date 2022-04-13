import vue from '@vitejs/plugin-vue'

export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    plugins: [
		vue()
	],
    publicDir: false,
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },
});



