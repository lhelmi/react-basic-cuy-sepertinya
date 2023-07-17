import React from 'react';
import './App.css';
import {
  Route,
  Routes,
  NavLink
} from 'react-router-dom';
import routes from './routes';
function App () {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <ul className="menu">
          <li>
            <NavLink to="/" className={
              ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "" 
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/product" className={
              ({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""
            }>Product</NavLink>
          </li>
        </ul>
        <div className="main">
          <Routes>
          

          {routes.map((route, i) => {
            const {
            path,
            Component
            } = route
            return <Route path={path} key={i} element={ <Component/> } >
            </Route>
            })}
                
          </Routes>
        </div>
      </div>
    </React.Suspense>
  )
}
export default App