import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
import formatCurrency from '../util';
import { withRouter } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { fetchProduct } from '../actions/productActions';
import { removeProductFromModal } from '../actions/productActions';
import { connect } from 'react-redux';
import Home from './Home';

class ProductModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.modalProduct
        };
    }

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    }

    closeModal = () => {
        this.props.removeProductFromModal();
        this.setState({ product: null });
        window.history.pushState({}, 'URL Rewrite', `/`);
    };

    render() {
        const product = this.props.modalProduct;

        return (
            <div>
                <Home />
                {product ? (
                    <div>
                        <Modal isOpen={true} onRequestClose={this.closeModal}>
                            <Zoom>
                                <button
                                    className="close-modal"
                                    onClick={this.closeModal}
                                >
                                    x
                                </button>
                                <div className="product-details">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                    />
                                    <div className="product-details-description">
                                        <p>
                                            <strong>{product.title}</strong>
                                        </p>
                                        <p>{product.description}</p>
                                        <p>
                                            Available Sizes
                                            {product.availableSizes.map(x => (
                                                <span>
                                                    {' '}
                                                    <button className="button">
                                                        {x}
                                                    </button>
                                                </span>
                                            ))}
                                        </p>
                                        <div className="product-price">
                                            <div>
                                                {formatCurrency(product.price)}
                                            </div>
                                            <button
                                                className="button primary"
                                                onClick={() => {
                                                    this.props.addToCart(
                                                        product
                                                    );
                                                    this.closeModal();
                                                }}
                                            >
                                                Add To Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        </Modal>
                    </div>
                ) : (
                    <div>Loading...</div>
                )}
            </div>
        );
    }
}

export default connect(
    state => ({ modalProduct: state.products.modalProduct }),
    {
        fetchProduct,
        addToCart,
        removeProductFromModal
    }
)(withRouter(ProductModal));
