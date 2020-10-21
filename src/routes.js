import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import Home from './pages/Home'

export default function Routes () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/home" component={Home} />
        </BrowserRouter>
    )
}