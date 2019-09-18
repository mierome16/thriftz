import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
 return (
  <div>
   <header className="mainheader">
     <Link to="/"><div>Home</div></Link>
     <Link to="/about"><div>About</div></Link>
     <div className="headerlogo">Thriftz</div>
     <Link to="/shop"><div>Shop</div></Link>
     <Link to="/contact"><div>Contact</div></Link>
   </header>
  </div>
 )
}
