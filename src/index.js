import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

import Search from './Search'
import ListBooks from './ListBooks'

ReactDOM.render( <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} >
                        </Route>
                        <Route path='/search' element={<Search />}></Route>
                    </Routes>
                 </BrowserRouter> 
                 , document.getElementById('root'))
