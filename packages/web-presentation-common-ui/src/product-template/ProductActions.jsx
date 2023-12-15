import React from 'react';

class ProductActions extends React.Component {
    render() {
        return (
            <div className="product-template-actions">
                <div className="product-template-actions-item">
                    {this.props.children}
                </div>
            </div>
        )}
}

export default ProductActions