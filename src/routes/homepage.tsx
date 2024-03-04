import ProductList
 from './ProductList';
 import Cart from './Cart';
 
export default function Homepage() {
    return (
        <div id='homepage'>
            Hello from Homepage

            <p>
                HomePage: The main component 
                that displays the list of 
                products.
            </p>

            <ProductList />
            <Cart />
        </div>
        );
}

