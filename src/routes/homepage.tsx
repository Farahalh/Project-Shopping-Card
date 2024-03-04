import ProductList
 from './ProductList';
 import Cart from './Cart';
 
export default function Homepage() {
    return (
        <div id='homepage'>
            Hello from Homepage
            <ProductList />
            <Cart />
        </div>
        );
}

