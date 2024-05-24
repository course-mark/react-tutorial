import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/products.api';

function useProducts() {
    const [products, setProducts] = useState([]);
    const [searchedProducts, setSearchedProducts] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getProducts().then((data) => {
            setProducts(data);
            setSearchedProducts(data);
            setIsLoading(false)
        });
        return () => {};
      }, []);

      useEffect(() => {
        setSearchedProducts(
          products.filter((product) => {
            return product.title.toLowerCase().includes(keyword.toLowerCase());
          })
        );
    
        return () => {
          console.log("cleanup");
        };
      }, [keyword, products]);

      return [products, searchedProducts, keyword, setKeyword, isLoading]
}

export default useProducts