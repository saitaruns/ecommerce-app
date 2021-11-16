import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
// import { db } from '../firebase';
// import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductResults = () => {
  const [prodList, setProdList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const fetchData = ()=>{
    axios.get('https://fakestoreapi.com/products')
    .then(res=>res.data)
    .then((data)=>{
      setProdList(data)
      setisLoading(false)
    })
    .catch((err)=>console.log(err))
  }
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="list">
      <div className="sec1">
        <h3>Filters</h3>
      </div>
      <div className="sec2">
        <h3>Search Results</h3>
        {isLoading && <div className="loading">Loading.....</div>}
        {prodList && prodList.map(item => <Link key={item.id} to={`/product/${item.id}`}><ProductCard item={item} /></Link>)}
      </div>
    </div>
  );
};

export default ProductResults;