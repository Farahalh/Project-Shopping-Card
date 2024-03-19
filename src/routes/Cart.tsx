import CartItem from "./CartItem";
import Header from "./Header";
import { useAtom } from "jotai";
import { productAtom } from "@/atoms/product";

export default function Cart() {
  const [productsAtom] = useAtom(productAtom);

  // if cart is empty, display message
  const emptyCart = () => {
    if (productsAtom.length === 0) {
      return "Your cart is empty!";
    }
  };

  // calculate the total amount and updating if icremented or decremented
  const totalSum = productsAtom.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="cart">
      <Header />

      <h2 className="text-center text-2xl font-semibold py-4">Cart</h2>

      <h5 className="text-center font-semibold">{emptyCart()}</h5>
      <CartItem />

      <h5 className="text-right font-bold p-4">Total amount: {totalSum.toFixed(2)} sek</h5>
    </div>
  );
}
