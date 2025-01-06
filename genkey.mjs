import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
    
const __dirname = dirname( fileURLToPath( import.meta.url ) );

/**
 * Not exactly secure but, should be good enough for this use case
 */

const genKey = () => {
	const key = crypto.randomBytes( 16 ).toString( 'hex' )
	// write to .env file if it doesn't exist
	// otherwise, update the key value
	const envPath = path.resolve( __dirname, '.env' )
	// check if the file exists
	if ( fs.existsSync( envPath ) ) {
		// read the file
		const env = fs.readFileSync( envPath, 'utf-8' )
		// check if the key exists
		if ( env.includes( 'VITE_APP_ENCRYPT_KEY' ) ) {
			// update the key
			const newEnv = env.replace( /VITE_APP_ENCRYPT_KEY=.*/, `VITE_APP_ENCRYPT_KEY="${key}"` )
			fs.writeFileSync( envPath, newEnv )
		} else {
			// append the key
			fs.appendFileSync( envPath, `\nVITE_APP_ENCRYPT_KEY="${key}"` )
		}
	}
	// create the file
	else {
		fs.writeFileSync( envPath, `VITE_APP_ENCRYPT_KEY="${key}"` )
	}
}

genKey()