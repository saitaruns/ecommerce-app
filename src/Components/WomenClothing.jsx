import { connect } from 'react-redux';
import ProductCard from './ProductCard';

const WomenClothing = ({womenclothes}) => {
  return (
    <div className="">
        <h1>Womens Clothing</h1>
        {womenclothes.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  );
};

const mapStoretoProps = (state)=>{
  return {
    womenclothes : state.womenclothes
  }
}

export default connect(mapStoretoProps)(WomenClothing);