import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom'

const Home = () => <h1>Welcome Home</h1>
const About = () => <h1>About Us</h1>
const Contact = () => <h1>Contact Us</h1>
const Challenges = () => (
  <div>
    <h1>30 Days of React Challenge</h1>
  </div>
)

const NotFound = () => <h1>This is not the page your looking for</h1>
const NavBar = () => (
  <ul>
    <li>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li>
      <NavLink to='about'>About</NavLink>
    </li>
    <li>
      <NavLink to='contact'>Contact</NavLink>
    </li>
    <li>
      <NavLink to='challenges'>Challenges</NavLink>
    </li>
  </ul>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='challenges' element={<Challenges />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)