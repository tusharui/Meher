import React from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Headerimg from './components/headerimg.jsx';
import Headerbtn from './components/Headerbtn.jsx';
import Headercard from './components/Headercard.jsx';
import Topsellingbtn from './components/Topselling/Topsellingbtn.jsx';
import Chooseus from './Whychooseus/choose.jsx';
import Products from './Allproducts/products.jsx';

import Footer from './footer/footer.jsx';
import HoverBox from './footer/footer.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Header/>
      <Headerimg/>
      <Headerbtn/>
      <Headercard/>
      <Topsellingbtn/>
      <Chooseus/>
      <Products/>
      <Footer/>
      <HoverBox/>
    </div>
  );
}

export default App;
