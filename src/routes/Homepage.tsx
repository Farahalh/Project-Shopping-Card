import Header from "./Header";
import ProductList from "./ProductList";

export default function Homepage() {
  return (
    <div className="homepage">
      <Header />
      <div className="w-auto p-6">
        <ProductList />
      </div>
    </div>
  );
}
