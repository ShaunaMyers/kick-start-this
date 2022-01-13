import Products from '../Products/Products';
import { SingleProduct } from '../../types';

interface Props {
    productsList: SingleProduct[],
    handleDeleteProduct: Function
}

const AdminView = ({ productsList, handleDeleteProduct }: Props) => {

    const isAdmin = true;

    return (
        <Products productsList={productsList} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct}/>
    )
}

export default AdminView;