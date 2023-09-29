import React from 'react';
import Header from './Header';
import Features from './Features';
import Pricing from './Pricing';
import FAQ from './FAQ';
import ProductCard from './ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Pricing />
      <FAQ />
      <ProductCard />
    </div>
  );
}

export default App;
