import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom';
import RootLayout from '../pages/RootLayout';
import Home from '../pages/Home';
import AboutPage from '../pages/About';
import PageNotFound from '../pages/PageNotFound';
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<RootLayout/>}>
                <Route index element={<Home />}/>
                <Route path='about' element={<AboutPage />}/>
                <Route path='*' element={<PageNotFound />}/>
            </Route>
        </>

    )
)

export default router