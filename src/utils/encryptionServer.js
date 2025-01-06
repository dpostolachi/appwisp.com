import cryptoJS from 'crypto-js'

const key = process.env.VITE_APP_ENCRYPT_KEY

export const encryptMesage = ( message ) => {
    return cryptoJS.AES.encrypt( message, key ).toString()
}

export const decryptMessage = ( message ) => {
    return cryptoJS.AES.decrypt( message, key ).toString( cryptoJS.enc.Utf8 )
}