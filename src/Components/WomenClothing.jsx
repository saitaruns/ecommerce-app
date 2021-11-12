import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from 'react';

const WomenClothing = () => {
  const [prodList, setProdList] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const fetchData = ()=>{
    const colRef = collection(db, 'products')
    getDocs(colRef).then((snapshot) => {
      const newstate = []
      snapshot.docs.forEach((doc) => {
        newstate.push({...doc.data(),id:doc.id})
      })
      setisLoading(false)
      setProdList(newstate)
    })
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
        <h3>Women's Clothing</h3>
        {isLoading && <div className="loading">Loading.....</div>}
        {prodList && prodList.map(item => <Link key={item.id} to={`/product/${item.id}`}><ProductCard item={item} /></Link>)}
      </div>
    </div>
  );
};

// const mapStoretoProps = (state) => {
//   return {
//     womenclothes: state.womenclothes
//   }
// }

export default WomenClothing;