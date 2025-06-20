import { useState } from 'react'
import './App.css'
import ContactBar from './components/ContactBar'
import Background from './components/Background'
import FooterComponent from './components/FooterComponent'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Router>
            <>
                <Background></Background>
                <ContactBar></ContactBar>
                    <NavBar></NavBar>
                <Routes>
                    <Route
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        path="/gallery"
                        element={<Gallery />}
                    />
                    <Route
                        path="/contact"
                        element={<Contact />}
                    />
                </Routes>
                    <FooterComponent></FooterComponent>
                </>
            </Router>

        </>
    )
}

export default App
