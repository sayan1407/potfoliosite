import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>03.</span>
                    Experience & Education
                    <span style={{
                        height: '1px',
                        backgroundColor: 'var(--secondary-color)',
                        flex: 1,
                        marginLeft: '20px',
                        opacity: 0.5
                    }}></span>
                </h2>

                <div style={{ maxWidth: '800px' }}>
                    {/* Experience Placeholder - derived from summary */}
                    <div style={{ marginBottom: '3rem' }}>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-color)' }}>Software Engineer</h3>
                        <p style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                            5+ Years Experience
                        </p>
                        <ul style={{ listStyle: 'none', marginLeft: '0' }}>
                            <li style={{ marginBottom: '10px', color: '#8892b0', display: 'flex' }}>
                                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                Worked on enhancements for a critical web application that handles pension workflows for the client.
                                This application handles different schemes of pensions for employees across multiple companies.
                            </li>
                            <li style={{ marginBottom: '10px', color: '#8892b0', display: 'flex' }}>
                                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                Developed restful web API that dynamically generates letters in PDF format based on a template using
                                the Aspose document processing library

                            </li>
                            <li style={{ marginBottom: '10px', color: '#8892b0', display: 'flex' }}>
                                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                Developed batch jobs to implement essential business processes such as tax calculations, data
                                preparation for letters, upload data from Excel files. These batch jobs run periodically, ensuring timely
                                and accurate execution of critical tasks
                            </li>
                            <li style={{ marginBottom: '10px', color: '#8892b0', display: 'flex' }}>
                                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                Successfully created and maintained over 50 comprehensive reports using the Cognos Business
                                Intelligence (BI) tool. These reports provide vital insights, enabling informed decision-making and
                                strategic planning within the organization.

                            </li>
                            <li style={{ marginBottom: '10px', color: '#8892b0', display: 'flex' }}>
                                <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>▹</span>
                                Redesigned and migrated a legacy .NET Web Forms application to a modern, scalable architecture
                                using .NET 8 for the backend and React.js for the frontend.
                            </li>
                        </ul>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 style={{ fontSize: '1.3rem', color: 'var(--text-color)' }}>Education</h3>
                        <div style={{
                            borderLeft: '2px solid var(--accent-color)',
                            paddingLeft: '20px',
                            marginTop: '1rem'
                        }}>
                            <h4 style={{ color: 'var(--text-color)', marginBottom: '5px' }}>B.Tech, Computer Science</h4>
                            <p style={{ color: '#8892b0', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                                2015 - 2019
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
