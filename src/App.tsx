import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Slide from './components/Slide';
import Footer from './components/Footer';

//

function App(props: any) {
  const title: string[] = ['Home', 'About', 'Shop', 'Contact']
  return (
    <>
      <Header title={title}></Header>
      <Slide></Slide>
      <Product></Product>
      <Footer></Footer>
    </>
  );
}

export default App;
