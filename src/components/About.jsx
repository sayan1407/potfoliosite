import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>01.</span>
                    About Me
                    <span style={{
                        height: '1px',
                        backgroundColor: 'var(--secondary-color)',
                        flex: 1,
                        marginLeft: '20px',
                        opacity: 0.5
                    }}></span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                    <div className="about-text">
                        <p style={{ marginBottom: '1.5rem', color: '#8892b0' }}>
                            Hello! My name is Sayan and I enjoy creating things that live on the internet.
                            I am an experienced Software Engineer with over 5 years of hands-on experience in designing, developing, and maintaining web applications and backend systems.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: '#8892b0' }}>
                            I am proficient in <span style={{ color: 'var(--accent-color)' }}>.NET Core</span> and <span style={{ color: 'var(--accent-color)' }}>React.js</span> with a strong understanding of database systems including Oracle and MS SQL Server.
                        </p>
                        <p style={{ marginBottom: '1.5rem', color: '#8892b0' }}>
                            Skilled in building REST APIs, implementing batch processes, and migrating legacy systems to modern tech stacks.
                            Adept at delivering business-critical solutions and collaborating across teams for agile delivery.
                        </p>
                    </div>

                    <div className="about-img" style={{ position: 'relative' }}>
                        {/* Placeholder for an image or a terminal-like graphic */}
                        <div style={{
                            width: '100%',
                            height: '300px',
                            border: '2px solid var(--accent-color)',
                            borderRadius: '4px',
                            position: 'relative',
                            backgroundColor: 'rgba(0, 255, 65, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span style={{ color: 'var(--accent-color)', fontSize: '5rem' }}>&lt;/&gt;</span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
