import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = {
        "Programming Languages": ["C#", "Java"],
        "Backend": [".NET Core", ".NET MVC", "Restful API", "Entity Framework", "Dapper", "Razor Pages"],
        "Frontend": ["React.js", "Bootstrap", "HTML", "CSS", "JavaScript"],
        "Cloud & DevOps": ["Azure", "GitHub", "Jira"],
        "Databases": ["SQL", "PL/SQL", "Oracle", "MS SQL Server"],
        "Other": ["Cognos BI", "XUnit"]
    };

    return (
        <section id="skills" style={{ padding: '100px 0' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
                    <span style={{ color: 'var(--accent-color)', marginRight: '10px' }}>02.</span>
                    Skills
                    <span style={{
                        height: '1px',
                        backgroundColor: 'var(--secondary-color)',
                        flex: 1,
                        marginLeft: '20px',
                        opacity: 0.5
                    }}></span>
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} style={{
                            backgroundColor: '#112240',
                            padding: '20px',
                            borderRadius: '4px',
                            border: '1px solid #233554'
                        }}>
                            <h3 style={{ color: 'var(--text-color)', fontSize: '1.1rem', marginBottom: '1rem' }}>{category}</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {items.map((skill, i) => (
                                    <li key={i} style={{
                                        fontSize: '0.9rem',
                                        color: '#8892b0',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}>
                                        <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>▹</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
