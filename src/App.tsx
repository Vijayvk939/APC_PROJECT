import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WorshipServices from './components/WorshipServices';
import Events from './components/Events';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import About from './components/About';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';

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