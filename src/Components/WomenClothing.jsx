import Clothing from './../assets/Clothing.json';
import ProductCard from './ProductCard';

const WomenClothing = () => {
  return (
    <div className="">
        <h1>Womens Clothing</h1>
        {Clothing.map(item => <ProductCard key={item.id} item={item}/>)}
    </div>
  );
};

export default WomenClothing;