import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dtsPlugin from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'my-super-test-button',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },

                assetFileNames: ({name}) => {
                    console.log('assetFileNames', name);

                    return name;
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [
        react(),
        dtsPlugin()
    ],
    resolve: {
        alias: {
            'hooks': path.resolve(__dirname, './src/hooks'),
            'components': path.resolve(__dirname, './src/components'),
        },
    }
});
