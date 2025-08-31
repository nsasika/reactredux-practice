import { connect } from "react-redux";
import { fetchProducts } from "./redux/product/ProductActions";
import { useEffect } from "react";

const ProductsContainer = ({ fetchProducts, productsData }) => {
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(productsData);
  return <div>
    {productsData.loading &&  <div>Loading....</div>}
    {productsData.error && <p>{productsData.error}</p>}
    {productsData.products && productsData.products.map(product => <p key={product.id}>{product.title}</p>)}    
  </div>;
};

const mapStateToProps = (state) => {
  return {
    productsData: state.product
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
