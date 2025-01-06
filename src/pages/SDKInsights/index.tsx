import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SDKCategoryView from './SDKCategoryView'
import SDKHome from './SDKHome'
import SDKCategories from './SDKCategories'

const SDKInsights = React.memo( () => {

	return (
		<div
			className="flex flex-col gap-8 md:flex-row"
		>
			<div
				className="w-full md:w-1/4"
			>
				<SDKCategories />
			</div>
			<div
				className="w-full md:w-3/4"
			>
				<Routes>
					<Route path="/:id" Component={ SDKCategoryView } />
					<Route path="/" Component={ SDKHome } />
				</Routes>
			</div>
		</div>
	)
} )

export default SDKInsights
