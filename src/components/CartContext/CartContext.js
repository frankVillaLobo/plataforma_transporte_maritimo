import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0)

    const addItem = (item, quantity) => {
        if (!inCart(item.id)) {
            cart.push({item: item, quantity: quantity});
            setTotal(total + quantity * item.price);
        console.log(cart);
        } else {
            setCart([...cart,{item, quantity}])
            setTotal(total + quantity * item.price);
            console.log(cart)
        }
    }

    const inCart = (id) => {
        if (cart.filter(i => i.item.id === id) >= 0) {
            return true;
        } else {
            return false;
        }
    }

    const removeItem = (id)=>{
        setCart (cart.filter(({item})=> item.id !== id));
    }

    const clear = () => {
        setCart([]);
    }

    const totalPrice = cart.reduce(
        (total, current) => total + current.item.price * current.quantity, 0
    );

    const totalQuantity = cart.reduce(
        (total, current) => total + current.quantity, 0
    );
    return (
        <CartContext.Provider value={{cart, setCart, addItem, clear, removeItem, totalPrice, totalQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
}