import Products from '../Products/Products';

const AdminView = ({ productsList }) => {

    const isAdmin = true;

    return (
        <Products productsList={productsList} isAdmin={isAdmin} />
    )
}

export default AdminView;