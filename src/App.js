import './App.css';
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CartPage from './Components/CartPage';
import DetailsPage from './Components/DetailsPage';
import ProductResults from './Components/ProductResults';


function App() {
  return (
    <>
    <Router>
    <Nav title="Shopper"/>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/frombanner" component={ProductResults} />
        <Route path="/product/:id" component={DetailsPage} />
        <Route path="/yourcart" component={CartPage}/>
      </Switch>
    </Router>
    </>
  )
}

export default App;
