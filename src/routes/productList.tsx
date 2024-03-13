import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetProducts } from "./hooks";
import { useNavigate } from "react-router-dom";
import Product from "./types";

export default function ProductList() {
  const { products, error, isLoading } = useGetProducts();

  const navigate = useNavigate();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div id="productlist">
      <div className="container flex-auto">
        <div className="grid grid-cols-1 grid-flow-row gap-4">
          <h1 className="text-base font-semibold py-4">
            Welcome to FA Online Shop
          </h1>
          {products.map((product: Product) => (
            <Card key={product.id}>
              <CardHeader>
                <img src={product.image} alt="productImage" />
                <CardTitle className="pt-4">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="pb-3">
                  {product.description}
                </CardDescription>
                <p>{product.price} sek</p>
                <p className="py-1">Rate: {product.rating.rate}</p>
                <p className="py-1">Reviews: {product.rating.count}</p>
                <Button>
                  <div
                    className="goToProduct"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    Go To Product
                  </div>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
