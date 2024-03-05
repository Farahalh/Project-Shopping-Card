import ProductList from './ProductList';
import Header from './Header';
import Cart from './Cart';
 
export default function Homepage() {
    return (
        <div id='homepage'>
            <Header />

            {/*<p>
                HomePage: The main component 
                that displays the list of 
                products.
            </p>*/}

            <ProductList />
            <Cart />
        </div>
        );
}

