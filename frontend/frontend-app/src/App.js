import React, { Component } from 'react';
import './App.css';
import Product from './Product/Product';
import axios from 'axios';

class App extends Component {

  fetchedProducts = [];
  state = {};

  constructor(props) {
    super(props);
    this.fetchProducts();
  }

  fetchProducts = async (searchQuery = '') => {
    const endpoint_url = `http://localhost:4000/api/products/search?q=${searchQuery}`;
    const response = await axios.get(endpoint_url);

    this.fetchedProducts = response.data.products.docs;

    // check if no result exist
    if (this.fetchedProducts.length === 0) {
      this.setState({products: 'No Results Found'});
    } else {
      const products = this.fetchedProducts.map(product => {
        return <Product key={product._id} product={product} />
      });
  
      this.setState({ products });
    }
    
  }


  productSearchHandler = event => {
    this.fetchProducts(event.target.value);
  }


  render() {
    return (
      <div className="App">
        <table className="headerBar">
          <tbody>
            <tr>
              <td>
                <img src="header_img.jpg" width="100" height="100" alt="Elprices" />
              </td>
              <td>
                <h1>Product Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="searchBar" onChange={this.productSearchHandler} placeholder="Enter Product Name" />

        {this.state.products}

      </div>
    );
  }
}

export default App;
