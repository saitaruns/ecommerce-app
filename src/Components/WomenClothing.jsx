import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const WomenClothing = ({ womenclothes }) => {
  return (
    <div className="list">
        <div className="sec1">
        <h3>Filters</h3>  
        </div>
        <div className="sec2">
        <h3>Women's Clothing</h3>
          {womenclothes && womenclothes.map(item => <Link to={`/product/${item.id}`}><ProductCard key={item.id} item={item} /></Link>)}
        </div>
    </div>
  );
};

const mapStoretoProps = (state) => {
  return {
    womenclothes: state.womenclothes
  }
}

export default connect(mapStoretoProps)(WomenClothing);