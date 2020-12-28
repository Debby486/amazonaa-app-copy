import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {useSpring, animated} from 'react-spring';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


function App() {
    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
      })
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            {/* <div>
                <a href="/" className="brand">
                  amazona
                  </a>
            </div> */}
            <animated.a style={props} className="brand">amazona</animated.a>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </main>
        <footer className="row center">All rights reserved</footer>
    </div>
    </BrowserRouter>
  );
}


export default App;
