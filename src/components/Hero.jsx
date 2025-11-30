import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const name = "Sayan Saha";
    const title = "Software Engineer";

    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '60px' // Offset for fixed navbar
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ color: 'var(--accent-color)', marginBottom: '1rem', fontSize: '1.2rem' }}>
                    &gt; Hello, World! I am
                </p>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    color: 'var(--text-color)',
                    lineHeight: 1.1,
                    marginBottom: '1rem'
                }}>
                    {name}.
                </h1>
                <h2 style={{
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    color: 'var(--secondary-color)',
                    lineHeight: 1.1,
                    marginBottom: '2rem'
                }}>
                    I build things for the web.
                </h2>
                <p style={{
                    maxWidth: '600px',
                    fontSize: '1.1rem',
                    color: '#8892b0',
                    marginBottom: '3rem'
                }}>
                    I'm a {title} specializing in building (and occasionally designing) exceptional digital experiences.
                    Currently, I'm focused on building accessible, human-centered products.
                </p>

                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        borderRadius: '4px',
                        fontSize: '1rem'
                    }}
                >
                    Get In Touch
                </motion.a>
            </motion.div>
        </section>
    );
};

export default Hero;
