import Products from '../Products/Products';

const AdminView = ({ productsList, handleDeleteProduct }) => {

    const isAdmin = true;

    return (
        <Products productsList={productsList} isAdmin={isAdmin} handleDeleteProduct={handleDeleteProduct}/>
    )
}

export default AdminView;