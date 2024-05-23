import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignIn } from './pages/SignIn'
import { User } from './pages/User'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/User" element={<User />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
