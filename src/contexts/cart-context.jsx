import { createContext, useState, useEffect } from 'react';

//const [cartItems, setCartItems] = useState([]);

const addCartItem = (cartItems, productToAdd) => {
    return;
};

let Object1 = function (a, b) {
    this.url = a;
    this.title = b
}

export const CartContext = createContext({
    cartItmes: [],
    addItemTocCart: () => { },
});

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    const [array, setArray] = useState([]);

    useEffect(() => {
        let newItem = new Object1('a', 'b');
        setArray(pervious => [...pervious, newItem])
    }, []);

    const value = { cartItems };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
