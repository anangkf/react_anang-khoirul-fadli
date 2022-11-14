import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <main>
        <Hero />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
