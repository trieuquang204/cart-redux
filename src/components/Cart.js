import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';

class Cart extends Component {
	render() {
		return (
			<table className="table product-table">
				<thead>
					<tr>
						<th></th>
						<th>Sản Phẩm</th>
						<th>Giá</th>
						<th>Số Lượng</th>
						<th>Tổng Cộng</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<CartItem />
					<CartItem />
					<CartItem />
					<CartResult />
				</tbody>
			</table>
		)
	}
}

export default Cart;