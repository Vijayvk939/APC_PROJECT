import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WorshipServices from './components/sections/WorshipServices';
import Events from './components/sections/Events';
import Gallery from './components/sections/Gallery';
import VideoSection from './components/sections/VideoSection';
import About from './components/sections/About';
import Leadership from './components/sections/Leadership';
import Contact from './components/sections/Contact';

function App() {
  // Add global error handling
  React.useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled Promise Rejection:', event.reason);
      event.preventDefault();
    };

    const handleError = (event: ErrorEvent) => {
      console.error('Global Error:', event.error);
      event.preventDefault();
    };

    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WorshipServices />
      <Events />
      <VideoSection />
      <Leadership />
      <Gallery />
      <About /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;