/* eslint-disable @typescript-eslint/no-explicit-any */
import App from 'AppClient'
import React from 'react'
import { RelayEnvironmentProvider } from '@react-relay'
import { BrowserRouter } from 'react-router-dom';

const UseRelayEnvironment = RelayEnvironmentProvider as React.FC<{
    environment: any;
    children: React.ReactNode;
}>

const ClientApp: React.FC<{
    relayEnvironment: unknown;
}> = React.memo( ( {
    relayEnvironment,
} ) => {

    return (
        <BrowserRouter>
            <UseRelayEnvironment environment={ relayEnvironment as any }>
                <App />
            </UseRelayEnvironment>
        </BrowserRouter>
    )

} )

export default ClientApp