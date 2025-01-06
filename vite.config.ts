import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import relay from 'vite-plugin-relay'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'
import mdx from '@mdx-js/rollup'
import rehypeHighlight from 'rehype-highlight'
import { ViteS3 } from '@froxz/vite-plugin-s3'

const {
  NODE_ENV = 'development',
  PORT = '3000',
  ACCESS_KEY_ID,
  SECRET_ACCESS_KEY,
} = process.env

const CloudUpload = NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
	base: CloudUpload ? 'https://uploads.appwisp.com/awisp' : '/',
  plugins: [
    svgr({}),
    mdx( {
      // code highlighter
      rehypePlugins: [
        [
          rehypeHighlight,
        ]
      ],
    } ),
    react(),
    relay,
    tsconfigPaths(),
    ViteS3( CloudUpload, {
			basePath: '/awisp',
			// include: [ 'client' ],
			clientConfig: {
			  credentials: {
          accessKeyId: ACCESS_KEY_ID,
          secretAccessKey: SECRET_ACCESS_KEY,
			  },
        forcePathStyle: true,
				endpoint: 'https://74e8a7453ec83f5970070b714b57e6b9.r2.cloudflarestorage.com',
			  region: 'EEUR',
			},
			uploadOptions: {
			  Bucket: 'sync-public'
			}
		} ),
  ],
  server: {
    port: Number( PORT ),
    proxy: {
      '/api': {
        // target: 'http://localhost:4000',
        target: 'https://appwisp.com',
        changeOrigin: true,
      },
    },
  }
})