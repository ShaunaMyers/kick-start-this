import Products from '../Products/Products';
import { AllProducts } from '../../types';

interface Props {
    productsList: AllProducts,
    handleDeleteProduct: Function
}

const AdminView = ({ productsList, handleDeleteProduct }: Props) => {

    const isAdmin = true;

    return (
        <Products productsList={productsList} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct}/>
    )
}

export default AdminView;