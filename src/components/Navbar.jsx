import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: '~/home', href: '#hero' },
        { name: '~/about', href: '#about' },
        { name: '~/skills', href: '#skills' },
        { name: '~/experience', href: '#experience' },
        { name: '~/contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(10, 10, 10, 0.9)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            borderBottom: '1px solid var(--secondary-color)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
                <div className="logo" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    <span style={{ color: 'var(--accent-color)' }}>&gt;</span> Sayan_Saha
                </div>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} style={{ fontSize: '0.9rem' }}>
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
