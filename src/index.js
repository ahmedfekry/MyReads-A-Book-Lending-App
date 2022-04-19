import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import Search from './Search'

ReactDOM.render( <Router>
                    <Routes>
                        <Route exact path='/' element={<App />} />
                        <Route path='/search' element={<Search />} />

                    </Routes>
                 </Router> 
                 , document.getElementById('root'))
