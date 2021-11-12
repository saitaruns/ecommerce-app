import './App.css';
import Homepage from './Components/Homepage';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import WomenClothing from './Components/WomenClothing';
import Cart from './Components/Cart';
import CartPage from './Components/CartPage';
import DetailsPage from './Components/DetailsPage';

function App() {
  return (
    <>
    <Router>
    <Nav title="Shopper" items={[<Link to="/">Home</Link>,"About","Contact",<Link to="/yourcart"><Cart/></Link>]}/>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/womenclothing" component={WomenClothing} />
        <Route path="/product/:id" component={DetailsPage} />
        <Route path="/yourcart" component={CartPage}/>
      </Switch>
    </Router>
    </>
  )
}

export default App;
