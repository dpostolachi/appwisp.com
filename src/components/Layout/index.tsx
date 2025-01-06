import { Link, Navbar, NavbarContent, NavbarBrand, NavbarMenuItem, NavbarMenuToggle, NavbarMenu, Spinner } from "@nextui-org/react";
import React from "react";
import { useMatch } from "react-router-dom";
import Logo from "../../logo.svg?react";
import styled from "@emotion/styled";
import Prefooter from "./Prefooter";
import CookieBanner from "components/CookieBanner";

const StyledLogo = styled( Logo )`
  height: 3.2rem;
  width: 3.2rem;
`

const Layout: React.FC<{
	children: React.ReactNode;
}> = React.memo( ( {
	children,
} ) => {

	const isAndrodList = !!useMatch( '/app/android/list' )
	const isIOSList = !!useMatch( '/app/ios/list' )
	const isSDKInsights = !!useMatch( '/sdk/insights' )
	const isSDKCategory = !!useMatch( '/sdk/insights/:id' )
	const isSDKView = !!useMatch( '/sdk/:id' )
  
	const [ isMenuOpen, setIsMenuOpen ] = React.useState( false )
	const closeMenu = React.useCallback( () => {
		setIsMenuOpen( false )
	}, [] )

	return (
		<main className="flex flex-col white text-foreground bg-background min-h-screen">
			<Navbar
				isBordered
				isMenuOpen={ isMenuOpen }
				onMenuOpenChange={ setIsMenuOpen }
			>
				<NavbarContent
				justify="start"
				>
					<NavbarBrand>
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
					</NavbarBrand>
				</NavbarContent>
				<NavbarContent
					className="gap-8 hidden sm:flex"
					justify="start"
				>
					<NavbarMenuItem>
						<Link
							className='text-foreground hover:text-primary-500 data-[active=true]:text-primary-500 xs:text-sm md:text-base font-medium'
							href="/app/android/list"
							data-active={ isAndrodList || isIOSList }
						>
							App explorer
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							className='text-foreground hover:text-primary-500 data-[active=true]:text-primary-500 xs:text-sm md:text-base font-medium'
							href="/sdk/insights"
							data-active={ isSDKInsights || isSDKCategory || isSDKView }
						>
							SDKs insights
						</Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link
							className='text-foreground hover:text-primary-500 xs:text-sm md:text-base font-medium'
							href="/docs"
						>
							API
						</Link>
					</NavbarMenuItem>
				</NavbarContent>
				<NavbarContent
					justify="end"
					className='sm:hidden'
				>
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
						className="sm:hidden"
					/>
				</NavbarContent>
				<NavbarMenu>
					<NavbarMenuItem>
						<Link
							className='text-foreground hover:text-primary-500 data-[active=true]:text-primary-500 text-xl'
							href="/app/android/list"
							data-active={ isAndrodList || isIOSList }
							onClick={ closeMenu }
						>
							App explorer
						</Link>
					</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className='text-foreground hover:text-primary-500 data-[active=true]:text-primary-500 text-xl'
						href="/sdk/insights"
						data-active={ isSDKInsights || isSDKCategory || isSDKView }
						onClick={ closeMenu }
					>
						SDKs insights
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className='text-foreground hover:text-primary-500 text-xl'
						href="/docs"
						onClick={ closeMenu }
					>
						API
					</Link>
				</NavbarMenuItem>
				</NavbarMenu>
			</Navbar>
		<div className="flex flex-col container mx-auto px-4 py-20 grow">
			<React.Suspense fallback={ (
				<div className="flex flex-col items-center justify-center h-screen">
					<Spinner />
				</div>
			) }>
			{
				children
			}
			</React.Suspense>
		</div>
		<Prefooter />
		<footer
			className="px-4 text-center flex flex-col gap-8 text-sm text-foreground py-8 bg-gray-50"
		>
			<ul
				className="flex flex-row gap-4 text-center justify-center"
			>
				<li>
					<Link
						className="hover:text-primary-500"
						href="/contact"
					>
						Contact
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-primary-500"
						href="/about"
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-primary-500"
						href="/docs"
					>
						API
					</Link>
				</li>
				<li>
					<Link
						className="hover:text-primary-500"
						href="https://github.com/dpostolachi/appwisp.com"
						target="_blank"
						rel="noreferrer"
					>
						Github
					</Link>
				</li>
			</ul>
			<span>
				© 2025 appwisp.com
			</span>
		</footer>
		<CookieBanner />
	</main>
	)
	} )

export default Layout