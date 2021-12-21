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

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import EmailIcon from '@material-ui/icons/Email';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import React, { useState, useEffect } from 'react';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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



  const toggleDrawer = () => {
    setState(true)
  }

  const toggleWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=919762228932&text=Hi.')
    handleClose()

  }

  const toggleEmail = () => {
    window.open('mailto:')
    handleClose()
  }

    // check toggle state [boolean]
    const [state, setState] = useState(false)

  const actions = [
    { icon: <EmailIcon onClick={toggleEmail} />, name: 'Email' },
    { icon: <WhatsAppIcon onClick={toggleWhatsapp} />, name: 'Whatsapp' },
  ];

  const style = {
    margin: 0,
    right: 20,
    bottom: 20,
    position: 'fixed',
  
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


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




      <SpeedDial 
        ariaLabel="SpeedDial openIcon example"
        style={style}
        hidden={false}
        icon={<QuestionAnswerIcon openicon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction style={{backgroundColor: "#323232"}}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
            href={action.link}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default App;
