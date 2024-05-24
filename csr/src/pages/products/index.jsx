import React from "react";
import { SimpleLayout } from "../../layouts/SimpleLayout";
import useProducts from "../../hooks/products";
// react-query

function Products() {
  const [, searchedProducts, keyword, setKeyword, isLoading] = useProducts();

  return (
    <SimpleLayout>
      <h2>Products</h2>
      {/* keyword */}
        {isLoading && <p style={{
            fontSize: '200px',
        }}>Loading...</p>}
      <div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <ul>
        {searchedProducts?.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: "100px",
                height: "100px",
              }}
            />
          </li>
        ))}
      </ul>
    </SimpleLayout>
  );
}

export default Products;
