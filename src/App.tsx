import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Navigation,
  Footer,
} from "./components";
import AboutMe from './components/AboutMe';
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<'dark' | 'light'>('dark'); // Explicit type

    const handleModeChange = () => {
        setMode(prevMode => prevMode === 'dark' ? 'light' : 'dark');
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main mode={mode} /> {/* Pass mode prop here */}
                <AboutMe />
                <Expertise />
                <Timeline />
                <Project />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;