import React, { Component } from 'react';
import { connect } from 'react-redux';

class Products extends Component {
	render() {
		return (
			<section className="section">
				<h1 className="section-heading">Danh Sách Sản Phẩm</h1>
				<div className="row">
					{ this.props.children}
				</div>
			</section>
		)
	}

	
}

const mapStateToProps = state => {
	return {
		products : state.products //<- product trong reducers index
	}
}


export default connect(mapStateToProps, null)(Products);