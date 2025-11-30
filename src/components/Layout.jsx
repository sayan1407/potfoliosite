import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <main className="container">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--secondary-color)', marginTop: '2rem' }}>
                <p style={{ color: '#8892b0', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} Sayan Saha. Built with <span style={{ color: 'var(--accent-color)' }}>React</span> & <span style={{ color: 'var(--accent-color)' }}>Coffee</span>.
                </p>
            </footer>
        </div>
    );
};

export default Layout;
