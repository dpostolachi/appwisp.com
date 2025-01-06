/* eslint-disable react-refresh/only-export-components */
import React from 'react'

export interface ISEOPayload {
	title: string;
	description: string;
	keywords: string[];
	image?: string;
	canonical?: string;
}

interface ISeoIntegrationContext {
	onSEOChange?: ( payload: ISEOPayload ) => void;
}

const isSSR = import.meta.env.SSR

const SeoIntegrationContext = React.createContext<ISeoIntegrationContext>( {} )

export const SEOIntegrationContextProvider: React.FC<{
	children: React.ReactNode;
	onSEOChange?: ( payload: ISEOPayload ) => void;
}> = React.memo( ( {
	onSEOChange,
	children,
} ) => {

	const contextValue = React.useMemo( () => {
		return {
			onSEOChange,
		}
	}, [ onSEOChange ] )

	return (
		<SeoIntegrationContext.Provider
			value={ contextValue }
		>
			{ children }
		</SeoIntegrationContext.Provider>
	)
} )

const escapeString = ( text: string ) =>
	text
		.replace( /</gi, '&lt;' )
		.replace( />/gi, '&gt;' )
		.replace( /"/gi, '&quot;' )

export const useSetSEO = ( {
	title: rawTitle,
	description: rawDescription,
	image,
	keywords: rawKeywords,
	canonical: rawCanonical,
}: ISEOPayload ) => {

	const canonical = React.useMemo( () => {
		if ( !rawCanonical ) return undefined

		return `https://appwisp.com${ rawCanonical }`
	}, [ rawCanonical ] )

	const title = React.useMemo( () => {
		return escapeString( rawTitle )
	}, [ rawTitle ] )
	const description = React.useMemo( () => {
		return escapeString( rawDescription )
	}, [ rawDescription ] )
	const keywords = React.useMemo( () => {
		return rawKeywords
			.map( part => {
				return escapeString( part )
			} ) as string[]
	}, [ rawKeywords ] )

	const {
		onSEOChange,
	} = React.useContext( SeoIntegrationContext )

	if ( isSSR && onSEOChange ) {
		onSEOChange( {
			title,
			description,
			image,
			keywords,
			canonical,
		} )
	}

	React.useEffect( () => {
		if ( isSSR ) { return }
		document.title = title
	}, [ title ] )

	React.useEffect( () => {
		if ( isSSR ) { return }
		const meta = document.querySelector( 'meta[name="description"]' )
		if ( meta ) {
			meta.setAttribute( 'content', description )
		}
	}, [ description ] )

	React.useEffect( () => {
		if ( isSSR ) { return }
		const meta = document.querySelector( 'meta[name="image"]' )
		if ( meta ) {
			meta.setAttribute( 'content', image || '' )
		}
	}, [ image ] )

	React.useEffect( () => {
		if ( isSSR ) { return }
		const link = document.querySelector( 'link[rel="canonical"]' )
		if ( link ) {
			link.setAttribute( 'href', canonical || '' )
		}
	}, [ canonical ] )

	React.useEffect( () => {
		if ( isSSR ) { return }
		const meta = document.querySelector( 'meta[name="keywords"]' )
		if ( meta ) {
			meta.setAttribute( 'content', keywords.join( ',' ) )
		}
	}, [ keywords ] )
}
