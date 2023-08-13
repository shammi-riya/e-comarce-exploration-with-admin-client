import axios from "axios";
import { useEffect, useState } from "react";

const Product = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/products') 
      .then(response => {
        setProductData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching product data:", error);
        setLoading(false); 
      });
  }, []);



  return [productData,loading];
};

export default Product;
