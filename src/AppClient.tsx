import { Route, Routes, useNavigate } from 'react-router-dom';
import { NextUIProvider, Spinner } from "@nextui-org/react";
import React from 'react';
import {
  Home,
  SDKInsights,
  AppList,
  AppDetails,
  SDKView,
  About,
  Contact,
  ApiDocs,
  Stats,
} from './ClientRouter'
import Layout from 'components/Layout';

export const AppMain: React.FC = React.memo( () => {

  return (
    <Layout>
      <Routes>
        <Route path="/sdk/insights/*" element={ <SDKInsights /> } />
        <Route path="/sdk/insights" element={ <SDKInsights /> } />
        <Route path="/sdk/:id" element={ <SDKView /> } />
        <Route path="/app/:platform/list" element={ <AppList /> } />
        <Route path="/app/:platform/:id" element={ <AppDetails /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route index element={ <Home /> } />
      </Routes>
    </Layout>
  )

} )

const App: React.FC = React.memo( () => {

const navigate = useNavigate()

return (
    <NextUIProvider
      className="flex flex-col min-h-screen"
      navigate={ navigate }>
        <React.Suspense fallback={ (
          <div className="flex flex-col items-center justify-center h-screen">
            <Spinner />
          </div>
        ) }>
          <Routes>
            <Route path='/docs' element={ <ApiDocs /> } />
            <Route path='/__stats' element={ <Stats /> } />
            <Route path='*' element={ <AppMain /> } />
          </Routes>
        </React.Suspense>
      </NextUIProvider>
)
} )

export default App
