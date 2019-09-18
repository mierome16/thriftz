import React, {useState} from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import { Provider } from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Shop from './Shop'
import Contact from './Contact'
import Headerz from './Headerz'

export default props => {


  return (
    <Provider store={store}>
        <Router>
          <div className="thriftzpage">
            <Headerz />
            <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/shop" component={Shop}/>
              <Route exact path="/contact" component={Contact}/>
              </div>
          </div>
        </Router>
    </Provider>
  )
}