import React from 'react';
import { Home, About, Contact, Portfolio, Skills } from './pages';
import Footer from './footer/Footer';

function App() {
    return (
        <div>
            <Home />
            <About />
            <Skills />
            <Portfolio/>
            <Contact />
            <Footer />
        </div>
    )
}

export default App;