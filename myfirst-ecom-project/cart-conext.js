import React, { createContext, useReducer } from 'react';

export const CartContext = createContext({
  totalAmount: 0,
  quantity: 0,
  items: [],
  addCart: (items) => {},
  removeCart: (id) => {},
  deleteCart: (id) => {},
});

const defaultReducer = {
  items: [],
  totalAmount: 0,
  quantity: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART') {
    let updatedItems = state.items.concat(action.item);
    // console.log('state', state.items);
    let cartIndex = state.items.findIndex((item) => item.id === action.item.id);
    // console.log(action.item.id);
    let indexProduct = state.items[cartIndex];

    if (indexProduct) {
      indexProduct = {
        ...indexProduct,
        amount: indexProduct.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[cartIndex] = indexProduct;
    }
    // console.log('index', indexProduct);
    // console.log(updatedItems);
    let totalAmount = updatedItems.reduce((sum, cu) => {
      return sum + cu.price * cu.amount;
    }, 0);
    let quantity = updatedItems.reduce((sum, cu) => {
      return sum + cu.amount;
    }, 0);

    return {
      items: updatedItems,
      totalAmount: totalAmount,
      quantity: quantity,
    };
  } else if (action.type === 'REMOVE_CART') {
    let cartIndex = state.items.findIndex((item) => item.id === action.id);
    let indexProduct = state.items[cartIndex];
    let updatedItems;
    updatedItems = state.items;
    if (indexProduct.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      console.log(updatedItems);
    } else {
      updatedItems[cartIndex] = {
        ...indexProduct,
        amount: indexProduct.amount - 1,
      };
    }

    // console.log(indexProduct);
    let totalAmount = updatedItems.reduce((sum, cu) => {
      return sum + cu.price * cu.amount;
    }, 0);
    let quantity = updatedItems.reduce((sum, cu) => {
      return sum + cu.amount;
    }, 0);
    return {
      items: updatedItems,
      totalAmount: totalAmount,
      quantity: quantity,
    };
  } else if (action.type === 'DELETE_CART') {
    let updatedItems;
    updatedItems = state.items.filter((item) => item.id !== action.id);

    // console.log(indexProduct);
    let totalAmount = updatedItems.reduce((sum, cu) => {
      return sum + cu.price * cu.amount;
    }, 0);
    let quantity = updatedItems.reduce((sum, cu) => {
      return sum + cu.amount;
    }, 0);
    return {
      items: updatedItems,
      totalAmount: totalAmount,
      quantity: quantity,
    };
  }
  return state;
};

export const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultReducer);
  // console.log('cartState', cartState);
  const addCartHandler = (product) => {
    dispatch({ type: 'ADD_CART', item: product });
  };
  const removeCartHandler = (id) => {
    dispatch({ type: 'REMOVE_CART', id: id });
  };
  const deleteCartHandler = (id) => {
    dispatch({ type: 'DELETE_CART', id: id });
  };
  const cartValue = {
    totalAmount: cartState.totalAmount,
    quantity: cartState.quantity,
    items: cartState.items,
    addCart: addCartHandler,
    removeCart: removeCartHandler,
    deleteCart: deleteCartHandler,
  };
  return (
    <CartContext.Provider value={cartValue}>
      {props.children}
    </CartContext.Provider>
  );
};
