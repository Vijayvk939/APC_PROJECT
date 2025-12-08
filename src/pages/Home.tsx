import Hero from '../components/sections/Hero';
import WorshipServices from '../components/sections/WorshipServices';
import Events from '../components/sections/Events';
import Gallery from '../components/sections/Gallery';
import VideoSection from '../components/sections/VideoSection';
import About from '../components/sections/About';
import Leadership from '../components/sections/Leadership';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <WorshipServices />
      <Events />
      <VideoSection />
      <Leadership />
      <Gallery />
      <About /> 
      <Contact />
    </main>
  );
};

export default Home;
