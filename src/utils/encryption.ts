import cryptoJS from 'crypto-js'

const key = import.meta.env.VITE_APP_ENCRYPT_KEY

export const encryptMesage = ( message: string ) => {
    return cryptoJS.AES.encrypt( message, key ).toString()
}

export const decryptMessage = ( message: string ) => {
    return cryptoJS.AES.decrypt( message, key ).toString( cryptoJS.enc.Utf8 )
}