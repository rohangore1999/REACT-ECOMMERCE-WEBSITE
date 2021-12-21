import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';
import ProductList from './pages/ProductList';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';


function App() {

  function ScrollToTop() {
    const history = useHistory()
    useEffect(() => {
      const unlisten = history.listen((location, action) => {
        if (action !== 'POP') {
          window.scrollTo(0, 0)
        }
      })
      return () => unlisten()
    }, [])
    return (null)
  }


  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          {/* after : >> it is a parameter */}
          <Route path="/products/:category" exact>
            <ProductList />
          </Route>

          {/* after : >> it is a parameter */}
          <Route path="/product/:name" exact>
            <Product />
          </Route>

          <Route path="/cart" exact>
            <Cart />
          </Route>

        </Switch>
      </Router>
      {/* <Home /> */}
      {/* <ProductList/> */}
      {/* <Product/> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
