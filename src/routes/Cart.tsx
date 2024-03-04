import CartItem from './CartItem';
import Product from './Product';
 
export default function Cart() {
    return (
        <div id='cart'>
            Hello from Cart

            <p>
                Cart: The main component that 
                displays the cart items.
            </p>

            <Product />
            <CartItem />
        </div>
        );
}

