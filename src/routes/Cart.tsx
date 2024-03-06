import CartItem from "./CartItem";

export default function Cart() {
    return (
        <div id='cart'>
            <h2 className='text-center text-2xl font-semibold py-2'>
              Cart
            </h2>

            <CartItem />

            <CartItem />
        </div>
        );
}

