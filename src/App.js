import React, { Component } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';

export default function App() {
	return (
		<div>
			<Header/>
			<main id="mainContainer">
				<div className="container">
					<ProductsContainer/>
					<Message/>
					<Cart/>
				</div>
			</main>

			<Footer/>
		</div>
	)
}