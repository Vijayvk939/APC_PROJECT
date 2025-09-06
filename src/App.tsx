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