import React, {useContext} from 'react'
import {Link} from 'react-router-dom';
import {CartContext} from '../components/Context/CartContext';
import './_Cart.scss';

function CartView() {
    const {cart, removeItem, clear, totalPrice} = useContext(CartContext);

    return (
        <div>
            <div>
                <h2 className="titulo">Carrito de compras</h2>
            </div>
            <div>
                <section id="form">
                    <div className="form-cart cart">
                        { cart.length === 0 ? 
                            <div>
                                <p><b>TU CARRITO ESTÁ VACÍO</b></p>
                                <Link to="/products"><Button className="btn">Ir a productos</Button></Link>
                            </div>
                            :
                            <div className="cart-div">
                                {cart.map( i => 
                                    <div className="cart-item"  key={i.item.id}>
                                        <img src={i.item.img} alt="Imágen producto en carrito"></img>
                                        <p>{i.quantity} {i.item.title} ${i.item.price}</p>
                                        <p className="cart-p-item">total item: ${i.item.price * i.quantity}</p>
                                        <p className="remove-item" onClick={removeItem}>X</p>
                                    </div>
                                )}
                                <p className="cart-total">TOTAL:${totalPrice.toFixed(2)}</p>
                                <div className="cart-checkout">
                                    <button className="btn">PAGAR</button>
                                </div>
                                <div className="cart-buttons">
                                    <Link to="/products"><button className="btn">seguir comprando</button></Link>
                                    <button className="btn" onClick={clear}>Vaciar carrito</button>
                                </div>
                            </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
export default CartView;