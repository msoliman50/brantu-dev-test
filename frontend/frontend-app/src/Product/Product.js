import React from 'react';
import './Product.css';

const product = (props) => {
    return (
        <table>
        <tbody>
          <tr>
            <td>
              <img src={props.product.image} alt={props.product.name} height="200" width="150" />
            </td>
            <td>
              <h4>{props.product.name}</h4>
              <p>
                  <span className="price">Price:</span> {props.product.price}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    );
};

export default product;