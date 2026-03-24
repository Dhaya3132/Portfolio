import React from 'react';

const BackgroundPattern = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 bg-[var(--bg-color)] pointer-events-none overflow-hidden">
            <div className="noise-overlay" />
        </div>
    );
};

export default BackgroundPattern;
