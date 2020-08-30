import React, { Component } from 'react';
import Header from './components/Header';
// import Products from './components/Products';
// import Cart from './components/Cart';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
import Footer from './components/Footer';

export default function App() {
	return (
		<div>
			<Header/>
			<main id="mainContainer">
				<div className="container">
					<ProductsContainer/>
					<MessageContainer/>
					<CartContainer/>
				</div>
			</main>
			<Footer/>
		</div>
	)
}