import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Contact = lazy(() => import('./Contact'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
