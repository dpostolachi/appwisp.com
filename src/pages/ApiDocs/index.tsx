import { Divider, Link } from "@nextui-org/react";
import React from "react";
import Logo from '../../logo.svg?react'
import styled from '@emotion/styled'
import PlayStoreAppSearch from './PlayStore/PlayStoreAppSearch.mdx'
import PlayStoreAppDetails from './PlayStore/PlayStoreAppDetails.mdx'
import PlayStoreCategories from './PlayStore/PlayStoreCategories.mdx'
import AppStoreAppSearch from './AppStore/AppStoreAppSearch.mdx'
import AppStoreAppDetails from './AppStore/AppStoreAppDetails.mdx'
import AppStoreCategories from './AppStore/AppStoreCategories.mdx'
import SDKList from './SDKs/SDKList.mdx'
import { useLocation } from "react-router-dom";
import { ISEOPayload, useSetSEO } from "contexts/SEOIntegration";
import 'highlight.js/styles/github.css'

const StyledLogo = styled( Logo )`
  height: 3.2rem;
  width: 3.2rem;
`

const ConsoleFont = styled.span`
    font-family: 'Courier New', Courier, monospace;
`

const Content = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;
    max-width: 100%;
    > div {
        margin-bottom: 4rem;
    }
    h1 {
        font-size: 1.8rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    h2 {
        font-size: 1.3rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    h3 {
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    h4 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    h5 {
        font-size: 0.875rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    h6 {
        font-size: 0.75rem;
        font-weight: 500;
        margin-bottom: 1rem;
    }
    p {
        font-size: 1rem;
        font-weight: 400;
        margin-bottom: 1rem;
    }
    ul {
        list-style-type: disc;
        padding-left: 1rem;
    }
    ol {
        list-style-type: decimal;
        padding-left: 1rem;
    }
    li {
        margin-bottom: 0.5rem;
    }
    blockquote {
        font-style: italic;
        padding-left: 1rem;
        border-left: 2px solid;
    }
    pre {
        display: flex;
        font-family: 'Courier New', Courier, monospace;
        padding: 1rem;
        font-size: 0.875rem;
        background-color: #f5f5f5;
        border-radius: 0.25rem;
        max-width: 100%;
        max-height: 400px;
        overflow: auto;
    }
    code {
        display: flex;
        background-color: #f5f5f5;
        border-radius: 0.25rem;
        width: 100%;
        height: 100%;

    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th {
        border-bottom: 2px solid;
    }
    td {
        border-bottom: 1px solid;
    }
    th, td {
        padding: 0.5rem;
    }
`

const SeoPayload: ISEOPayload = {
    title: 'API Documentation - Comprehensive Guide | AppWisp',
    description: 'Access our detailed API documentation to integrate and utilize AppWisp\'s data. Get started with our easy-to-follow guide and make the most out of our API services.',
    keywords: 'API documentation, API guide, AppWisp API, integrate API, API services, developer API, API reference, app data API'.split( ', ' )
}

const ApiDocs: React.FC = React.memo(() => {

    const { hash: rawHash } = useLocation()

    const [ hash, setHash ] = React.useState<string>()

    React.useEffect( () => {
        if ( rawHash ) {
            setHash( rawHash )
        }
    }, [ rawHash ] )

    useSetSEO( SeoPayload )

    return (
        <main className="flex flex-col white text-foreground bg-background min-h-screen">
            <div className="flex flex-row min-h-dvh">
                <div className="flex max-w-72 sticky top-0 h-full">
                    <div className="relative flex h-full w-72 flex-1 flex-col border-r-small border-devider p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items gap-2 px-2">
                                <Link
                                    className="text-foreground hover:text-primary-500 text-xl"
                                    href="/"
                                >
                                    <StyledLogo />
                                    <span className="font-medium">
                                    app
                                    </span>
                                    <span className="font-m">
                                    wisp
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            <h2 className="text-lg font-medium">API Reference</h2>
                            <div className="flex flex-col gap-2">
                                <nav className="flex flex-col gap-2">
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <span className="text-foreground">
                                                Play Store
                                            </span>
                                            <ul className="flex flex-col gap-2 pl-4 py-2">
                                                <li>
                                                    <a
                                                        data-active={ hash === '#playstore-app-search' }
                                                        href="/docs#playstore-app-search"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                App search
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/playstore/apps
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-active={ hash === '#playstore-app-details' }
                                                        href="/docs#playstore-app-details"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                App details
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/playstore/apps/:id
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-active={ hash === '#playstore-categories' }
                                                        href="/docs#playstore-categories"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                Categories
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/playstore/categories
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="text-foreground">
                                                App Store
                                            </span>
                                            <ul className="flex flex-col gap-2 pl-4 py-2">
                                                <li>
                                                    <a
                                                        data-active={ hash === '#appstore-app-search' }
                                                        href="/docs#appstore-app-search"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                App search
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/appstore/apps
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-active={ hash === '#appstore-app-details' }
                                                        href="/docs#appstore-app-details"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                App details
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/appstore/apps/:id
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        data-active={ hash === '#appstore-categories' }
                                                        href="/docs#appstore-categories"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                Categories
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/appstore/categories
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <span className="text-foreground">
                                                SDKs
                                            </span>
                                            <ul className="flex flex-col gap-2 pl-4 py-2">
                                                <li>
                                                    <a
                                                        data-active={ hash === '#appstore-app-search' }
                                                        href="/docs#sdk-list"
                                                        className="flex text-foreground hover:text-primary-500 border-foreground-500 border-l-2 pl-2 data-[active=true]:border-primary-500"
                                                    >
                                                        <div className="flex flex-col gap-1">
                                                            <span className="text-sm font-medium">
                                                                SDK list
                                                            </span>
                                                            <ConsoleFont className="text-xs">
                                                                <span className="font-bold">GET</span> /api/1.0/sdks
                                                            </ConsoleFont>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    // content
                }
                <div className="flex-1 flex flex-col p-6 max-w-100 gap-4 overflow-hidden">
                    <h1 className="text-3xl font-medium">
                        API Reference
                    </h1>
                    <div className="flex flex-col gap-4">
                        <p>
                            The AppWisp API provides a RESTful interface for accessing app store data.
                        </p>
                        <p>
                            The base URL for the API is <code>/api/1.0</code>.
                        </p>
                    </div>
                    <Divider className="my-4" />
                    <Content>
                        <h2 className="text-3xl font-medium">
                            PlayStore data
                        </h2>
                        <div id="playstore-app-search">
                            <PlayStoreAppSearch />
                        </div>
                        <div id="playstore-app-details">
                            <PlayStoreAppDetails />
                        </div>
                        <div id="playstore-categories">
                            <PlayStoreCategories />
                        </div>
                        <h2 className="text-3xl font-medium">
                            AppStore data
                        </h2>
                        <div id="appstore-app-search">
                            <AppStoreAppSearch />
                        </div>
                        <div id="appstore-app-details">
                            <AppStoreAppDetails />
                        </div>
                        <div id="appstore-categories">
                            <AppStoreCategories />
                        </div>
                        <h2 className="text-3xl font-medium">
                            SDKs
                        </h2>
                        <div id="sdk-list">
                            <SDKList />
                        </div>
                    </Content>
                </div>
            </div>
        </main>
    );
    }
);

export default ApiDocs;