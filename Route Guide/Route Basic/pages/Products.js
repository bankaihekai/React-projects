import { Link } from "react-router-dom";

const Products = () => {
  const product = [
    { id: "p1", title: "product-1" },
    { id: "p2", title: "product-2" },
    { id: "p3", title: "product-3" },
  ];
  return (
    <>
      <h2>Product Page</h2>
      <ul>
        {product.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
