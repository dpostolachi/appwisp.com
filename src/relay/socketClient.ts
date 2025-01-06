import { Socket } from 'socket.io-client'
import { decryptMessage, encryptMesage } from 'utils/encryption';

export default class SocketClient {

    __loadSocket: Promise<Socket> | null = null;

    __collection: Record<string, ( data: unknown ) => void> = {}

    private initSocket = () => {
    
        this.__loadSocket = new Promise( async ( resolve ) => {

            const { io } = ( await import( 'socket.io-client' ) )

            const socket = io( {
                autoConnect: true,
                transports: [ 'websocket' ],
            } )
    

            socket.on("connect_error", (err: any) => {
                // the reason of the error, for example "xhr poll error"
                console.log(err.message);
              
                // some additional description, for example the status code of the initial HTTP response
                console.log(err.description);
              
                // some additional context, for example the XMLHttpRequest object
                console.log(err.context);
            });
            socket.on( 'connect', () => {
                resolve( socket )
            } )

            socket.on( 'response', ( data ) => {
                const [ reqId, response ] = JSON.parse( decryptMessage( data as string ) )

                const callback = this.__collection[ reqId ]
                delete this.__collection[ reqId ]
                callback( response )

            } )
        } )
        
    }

    constructor() {
        this.initSocket()
    }

    private sendRequest = ( data: unknown ) => {

        const reqId = window.crypto.randomUUID()
        const payload = encryptMesage( JSON.stringify( [ reqId, data ] ) )

        return new Promise( async ( resolve ) => {
            this.__collection[ reqId ] = ( data ) => {
                resolve( data )
            }

            const socket = await this.__loadSocket!

            socket.emit( 'request', payload )

        } )

    }


    getClient = async () => {
        return {
            sendRequest: this.sendRequest,
        }
    }

}