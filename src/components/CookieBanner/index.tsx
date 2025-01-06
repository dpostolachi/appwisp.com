import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	z-index: 9999;
`

const insertGTMScript = () => {
	const script = document.createElement( 'script' )
	script.async = true
	script.defer = true
	script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0HJCGTFN7Q'
	document.head.appendChild( script )

	const script2 = document.createElement( 'script' )
	script2.text = `window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-0HJCGTFN7Q');`
	document.head.appendChild( script2 )
}

const deleteAllCookies = () => {
	document.cookie.split( ';' ).forEach( function( c ) {
		document.cookie = c.replace( /^ +/, '' )
			.replace( /=.*/, '=;expires=' + new Date().toUTCString() + ';path=/' )
	} )
}

const cleanUp = () => {
	// clean existing cookies if not accepted or declined yet
	if ( readCookie( 'cookie_consent' ) === null ) {
		deleteAllCookies()
	}
}


const readCookie = ( name: string ) => {
	const nameEQ = name + "="
	const ca = document.cookie.split( ';' )
	for ( let i = 0; i < ca.length; i++ ) {
		let c = ca[ i ]
		while ( c.charAt( 0 ) === ' ' ) {
			c = c.substring( 1, c.length )
		}
		if ( c.indexOf( nameEQ ) === 0 ) {
			return c.substring( nameEQ.length, c.length )
		}
	}
	return null
}

const createCookie = ( name: string, value: string, days: number ) => {
	let expires = ''
	if ( days ) {
		const date = new Date()
		date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) )
		expires = "; expires=" + date.toUTCString()
	}
	document.cookie = name + "=" + value + expires + "; path=/"
}

const CookieBanner: React.FC = React.memo( () => {

	const [ loaded, setLoaded ] = React.useState( false )
	const [ accepted, setAccepted ] = React.useState<boolean>()

	const checkTimeout = React.useRef<NodeJS.Timeout>()

	React.useEffect( () => {

		if ( checkTimeout.current ) {
			clearTimeout( checkTimeout.current )
		}

		checkTimeout.current = setTimeout( () => {
			cleanUp()
			if ( readCookie( 'cookie_consent' ) === 'accepted' ) {
				setAccepted( true )
			}
			if ( readCookie( 'cookie_consent' ) === 'declined' ) {
				setAccepted( false )
			}
			setLoaded( true )
		}, 3_000 )
	}, [] )


	React.useEffect( () => {
		if ( accepted ) {
			insertGTMScript()
		}
	}, [ accepted ] )

	const handleDecline = React.useCallback( () => {
		createCookie( 'cookie_consent', 'declined', 365 )
		setAccepted( false )
	}, [] )

	const handleAccept = React.useCallback( () => {
		createCookie( 'cookie_consent', 'accepted', 365 )
		setAccepted( true )
	}, [] )

	if ( !loaded || accepted !== undefined ) {
		return null
	}

	return (
		<Container className="fixed bottom-0 left-0 right-0 bg-background text-foreground p-4 border-t border-gray-200">
			<p className="text-sm">
				We use cookies for analytics and to improve our site.
				If you agree to our use of cookies. please press accept.
				<br />
				Otherwise, you can decline cookies.
			</p>
			<div
				className="flex gap-4 mt-4 justify-center md:flex-row flex-col"
			>
				<button
					onClick={ handleAccept }
					className="bg-primary-500 text-white px-4 py-2 rounded-lg"
				>
					Accept cookies
				</button>
				<button
					onClick={ handleDecline }
					className="bg-primary-500 text-white px-4 py-2 rounded-lg"
				>
					Decline cookies
				</button>
			</div>
		</Container>
	)

} )

export default CookieBanner