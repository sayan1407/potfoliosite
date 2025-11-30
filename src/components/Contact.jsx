import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '100px 0', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', marginBottom: '1rem' }}>04. What's Next?</p>
                <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', color: 'var(--text-color)' }}>Get In Touch</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', color: '#8892b0' }}>
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:sayan199783@gmail.com"
                    style={{
                        display: 'inline-block',
                        padding: '1.25rem 1.75rem',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        fontWeight: 'bold'
                    }}
                >
                    Say Hello
                </a>

                <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8892b0' }}>
                        <span style={{ color: 'var(--accent-color)' }}>Email:</span>
                        <a href="mailto:sayan199783@gmail.com" style={{ color: '#8892b0' }}>sayan199783@gmail.com</a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8892b0' }}>
                        <span style={{ color: 'var(--accent-color)' }}>Phone:</span>
                        <a href="tel:+917980371581" style={{ color: '#8892b0' }}>+1 123 456 7890</a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
