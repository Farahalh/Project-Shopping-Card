import Header from "./Header";
import ProductList from "./ProductList";

export default function Homepage() {
  return (
    <div className="homepage container mx-auto md:max-w-2xl lg:max-w-3xl">
      <Header />

      <ProductList />
    </div>
  );
}
