import { Navbar, Footer  } from '../components';
import { Hero, Explore, About, Feedback, GetStarted, Insight, WhatsNew, World } from '../sections';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Explore />
    {/* <GetStarted />
    <WhatsNew />
    <World />
    <Insight />
    <Feedback /> */}
    <Footer />
  </div>
);

export default Home;