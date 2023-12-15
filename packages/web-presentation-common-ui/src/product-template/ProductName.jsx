import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from '@efr/medservice-web-presentation-ui';

class ProductName extends React.Component {
    render() {
        return (
            <div className="product-text product-text-table">
                {this.props.title &&
                    <span className="product-template-data-item-details product-template-data-item-name-table-description product-text-table-cell nowrap">{this.props.title}:</span>
                }

                {this.props.children &&
                    <span className={classNames('product-text-table-cell product-text-table-cell-name', {'green': this.props.action}, {'black': !this.props.action})}>
                        {this.props.action &&
                            <Link onClick={this.props.action} dataId={this.props.dataId}><span className="size16 flex-text">{this.props.children}</span></Link>
                        }
                        {!this.props.action &&
                            <span className="bold size16 black flex-text table-cell-block">{this.props.children}</span>
                        }
                    </span>
                }
            </div>
        )}

    static propTypes = {
        /**
         * Заголовок продукта
         */
        title: PropTypes.any,
        /**
         * onClick функция продукта
         */
        action: PropTypes.func,
        /**
         * Уникальный идентификатор активного элемента
         */
        dataId: PropTypes.string
    };
}

export default ProductName