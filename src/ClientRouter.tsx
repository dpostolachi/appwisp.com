import React from 'react';

export let Home = React.lazy( () => import( 'pages/Home' ) ) as React.FC
export let SDKInsights = React.lazy( () => import( 'pages/SDKInsights' ) ) as React.FC
export let AppList = React.lazy( () => import( 'pages/AppList' ) ) as React.FC
export let AppDetails = React.lazy( () => import( 'pages/AppDetails' ) ) as React.FC
export let SDKView = React.lazy( () => import( 'pages/SDKInsights/SDKView' ) ) as React.FC
export let About = React.lazy( () => import( 'pages/About' ) ) as React.FC
export let Contact = React.lazy( () => import( 'pages/Contact' ) ) as React.FC
export let ApiDocs = React.lazy( () => import( 'pages/ApiDocs' ) ) as React.FC
export let Stats = React.lazy( () => import( 'pages/Stats' ) ) as React.FC

// eslint-disable-next-line react-refresh/only-export-components
export const ensureLoaded = async () => {
	const path = window.location.pathname

	if ( path === '/docs' ) {
		ApiDocs = ( await import( 'pages/ApiDocs' ) ).default
		return
	}
	if ( path === '/contact' ) {
		Contact = ( await import( 'pages/Contact' ) ).default
		return
	}
	if ( path === '/about' ) {
		About = ( await import( 'pages/About' ) ).default
		return
	}
	if ( path === '/app/ios/list' ) {
		AppList = ( await import( 'pages/AppList' ) ).default
		return
	}
	if ( path === '/app/android/list' ) {
		AppList = ( await import( 'pages/AppList' ) ).default
		return
	}
	if ( path.startsWith( '/sdk/insights' ) ) {
		SDKInsights = ( await import( 'pages/SDKInsights' ) ).default
		return
	}
	if ( path.startsWith( '/sdk/' ) ) {
		SDKView = ( await import( 'pages/SDKInsights/SDKView' ) ).default
		return
	}
	if ( path.startsWith( '/app/android/' ) ) {
		AppDetails = ( await import( 'pages/AppDetails' ) ).default
		return
	}
	if ( path.startsWith( '/app/ios/' ) ) {
		AppDetails = ( await import( 'pages/AppDetails' ) ).default
		return
	}
	if ( path === '/__stats' ) {
		Stats = ( await import( 'pages/Stats' ) ).default
		return
	}

	Home = ( await import( 'pages/Home' ) ).default
	return

}