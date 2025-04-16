import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import CarouselImages from "./components/CarouselImages";
import beautyToysMore from './Data/beautyToysMore';
import ProductScroller from './components/ProductScroller';
import sportsHealthMore from './Data/sportsHealthMore';
import husbandMaterialBoys from "./Data/husbandMaterialBoys";
import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <Carousel images={CarouselImages} />
      <ProductScroller title="Beauty, Food, Toys & more" products={beautyToysMore} />
      <ProductScroller title="Sports, Healthcare & More" products={sportsHealthMore} />
      <ProductScroller title="Husband, Boyfriend, Friend" products={husbandMaterialBoys} />
    </div>
  );
}

export default App;
