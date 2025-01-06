import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode, faGear } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const StyledIcon = styled( FontAwesomeIcon )`
	font-size: 3rem;
`

const Prefooter: React.FC = React.memo( () => {

	return (
		<section
			className='bg-gray-100 text-center py-16 gap-8 flex flex-col items-center justify-center'
		>	
			<h2
				className='text-3xl'
			>
				AppWisp - mobile app insights
			</h2>
			<p
				className='text-lg max-w-full w-[60rem]'
			>
				AppWisp is a platform for mobile app insights. We provide a comprehensive overview of the mobile app ecosystem, including app store data, SDK usage, and more.
			</p>
			<div
				className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8 p-8'
			>
				<div
					className='flex flex-col items-center justify-center gap-4'
				>
					<StyledIcon icon={ faChartLine } className='text-primary-500' />
					<h5
						className='text-center font-bold text-lg'
					>
						Free app store data
					</h5>
					<p
						className='text-center text-md text-gray-700'
					>
						We provide free data on app store rankings, downloads and technology. Our data is updated daily and is available for both iOS and Android apps.
					</p>
				</div>
				<div
					className='flex flex-col items-center justify-center gap-4'
				>
					<StyledIcon icon={ faGear } className='text-primary-500' />
					<h5
						className='text-center font-bold text-lg'
					>
						SDK insights
					</h5>
					<p
						className='text-center text-md text-gray-700'
					>
						We provide insights into the SDKs used by mobile apps. Our data includes information on SDK usage, market share, and more.
					</p>
				</div>
				<div
					className='flex flex-col items-center justify-center gap-4'
				>
					<StyledIcon icon={ faCode } className='text-primary-500' />
					<h5
						className='text-center font-bold text-lg'
					>
						API access
					</h5>
					<p
						className='text-center text-md text-gray-700'
					>
						We offer an API that allows you to access our data programmatically. Our API is easy to use and provides access to all of our data.
					</p>
				</div>
			</div>
		</section>
	)
} )

export default Prefooter