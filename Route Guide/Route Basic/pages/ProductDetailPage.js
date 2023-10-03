// absolute path with '/' while relative does not 
import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
      
      // <Link to='..' relative='path' >Go Back</Link>
    </>
  );
}

export default ProductDetailPage;
