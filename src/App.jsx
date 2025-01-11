// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from './components/layout';
import { ScrollToTop, BackToTopButton, PageTransition, ScrollRestoration } from './components/utils';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollRestoration />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <Home />
                  </PageTransition>
                } 
              />
              <Route 
                path="/services" 
                element={
                  <PageTransition>
                    <Services />
                  </PageTransition>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                } 
              />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
      <BackToTopButton />
    </Router>
  );
}

export default App;