import CartItem from "./CartItem";
import Header from "./Header";

export default function Cart() {
  return (
    <div className="cart">
      <Header />

      <h2 className="text-center text-2xl font-semibold py-2">Cart</h2>

      <CartItem />
      
    </div>
  );
}
