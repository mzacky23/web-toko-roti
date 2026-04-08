
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';

import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen flex flex-col w-full bg-background-light dark:bg-background-dark font-display text-warm-brown dark:text-[#f4f3f1] antialiased overflow-x-hidden pt-20">
        <Navbar />
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
