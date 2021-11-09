import './App.css';
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WomenClothing from './Components/WomenClothing';
import Cart from './Components/Cart';

function App() {
  
  return (
    <>
    <Router>
    <Nav title="Shopper" items={["Home","About","Contact",<Cart/>]}/>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/womenclothing" component={WomenClothing} />
      </Switch>
    </Router>
    </>
  )
}

export default App;
