import React from 'react';

class ProductData extends React.Component {
    render() {
        return (
            <div className="product-template-data">
                <div className="product-template-data-item">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ProductData