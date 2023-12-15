import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@efr/medservice-web-presentation-ui';

class ProductText extends React.Component {
    render() {
        return (
            <div className="product-text">
                {this.props.title &&
                    <span className="product-template-data-item-details product-template-data-item-name-table-description">
                        {this.props.title}
                        {this.props.children &&
                            <span>:</span>
                        }
                    </span>
                }

                {this.props.children &&
                    <span>
                        {this.props.break &&
                            <Divider type="clear"/>
                        }

                        {this.props.children}
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
         * Признак необходимости отображения в 2 строки
         */
        break: PropTypes.bool
    };
}

export default ProductText