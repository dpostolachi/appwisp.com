import { ISEOPayload, useSetSEO } from 'contexts/SEOIntegration'
import React from 'react'

const SEOData: ISEOPayload = {
	title: 'Contact us | appwisp',
	description: 'Got questions, suggestions, or just want to say hello? We\'d love to hear from you! Reach out to us using the contact information below, and we\'ll get back to you as soon as possible.',
	keywords: [
		'Contact us',
		'Contact appwisp',
		'Contact appwisp team',
		'Contact appwisp support',
	],
}

const Contact: React.FC = React.memo( () => {

	useSetSEO( SEOData )

	return (
		<div
			className='flex flex-col gap-8 container mx-auto px-4 py-8 max-w-3xl'
		>
			<h1
				className='text-4xl text-center'
			>
				Contact us
			</h1>
			<section>
				Got questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us using the contact information below, and we'll get back to you as soon as possible.
			</section>
			<section
				className='flex flex-col gap-2'
			>
				<h3
					className='text-xl text-default-500'
				>
					email:
				</h3>
				<a
					href="mailto:hello@appwisp.com"
					className='text-primary-500'
				>
					hello@appwisp.com
				</a>
			</section>
			<section
				className='flex flex-col gap-2'
			>
				We're here to assist you and make your experience with appwisp as smooth and enjoyable as possible.
			</section>

		</div>
	)
} )

export default Contact