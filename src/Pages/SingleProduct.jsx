import { useParams } from "react-router-dom";
import ProductPreview from "../components/ProductPreview.jsx";
import Productservice from "../modeles/services/Productservice.js";



function SingleProduct () {
    const {id} = useParams();
    const data = Productservice.getProducts();
    const product = data.find((e) => e.id === id);

    return(  
        <>
        <ProductPreview product = {product}  seeMore={true}  />
        
        </>
    )
}
export default SingleProduct;