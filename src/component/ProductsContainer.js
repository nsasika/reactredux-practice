import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/product/ProductActions";

// later implemented using hooks, initailly using connect HOC
const ProductsContainer = () => {
  const productsData = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(productsData);
  return (
    <div>
      {productsData.loading && <div>Loading....</div>}
      {productsData.error && <p>{productsData.error}</p>}
      {productsData.products &&
        productsData.products.map((product) => (
          <p key={product.id}>{product.title}</p>
        ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     productsData: state.product
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchProducts: () => dispatch(fetchProducts()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

export default ProductsContainer;
