import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React,{useState, useEffect} from 'react'
import { commerce } from './lib/commerce'

import {Navbar, Banner, Fotter, Products, JwPlayerCommer, Cart, Checkout } from './components'
import pic from './Assets/Blue-Front.png'

function App() {
  const[products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async() =>{
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  
  const fetchCart = async() =>{
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async(productId, quntity) =>{
    const {cart} = await commerce.cart.add(productId, quntity);

    console.log(cart)
    setCart(cart)
  };

  const handleUpdateCartQty = async(productId, quantity) =>{
    const response = await commerce.cart.update(productId, { quantity });
    
    setCart(response.cart)
  };

  const handleRemoveFromCart = async(productId) =>{
    const {cart} = await commerce.cart.remove(productId);
    
    setCart(cart)
  };
  
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };


  const handleEmptyCart = async() =>{
    const {cart} = await commerce.cart.empty();
    setCart(cart)
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      console.log("Emty Cart1")
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      console.log("Emty Cart2")
      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);
  return (   
    <Router>
    <div className="app">
      <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path="/">
            <Banner />
            <Products  products={products} onAddToCart={handleAddToCart}/>
            <JwPlayerCommer />
          </Route>
          <Route exact path="/cart"> 
            <Cart cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
          </Route>
        </Switch>
      <Fotter />
    </div>
    </Router>
  );
}

export default App;
