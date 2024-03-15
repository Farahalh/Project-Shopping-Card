import { Button } from "@/components/ui/button";
import { useGetProduct } from "./hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAtom } from "jotai";
import { productAtom } from "@/atoms/product";
import Header from "./Header";

export default function SingleProduct() {
  const { singleProduct, error, isLoading } = useGetProduct();

  const [productsAtom, setProductsAtom] = useAtom(productAtom);

  console.log(productsAtom);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    // single product page displaying product in card
    <div id="singleProduct">
      <Header />
      <div className="container py-8">
        <Card key={singleProduct.id}>
          <CardHeader>
            <img src={singleProduct.image} alt="productImage" />
            <CardTitle className="py-2">{singleProduct.title}</CardTitle>
            <CardDescription>
              <p>{singleProduct.description}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="pb-4">{singleProduct.price} sek</p>

            {/* onClick add product to empty [] displayed in CartItem and then Cart*/}
            <Button
              onClick={() => {
                setProductsAtom((prevProducts) => {
                  const index = prevProducts.findIndex(
                    (product) => product.id === singleProduct.id
                  );

                  if (index !== -1) {
                    const updatedProducts = [...prevProducts];
                    updatedProducts[index] = {
                      ...updatedProducts[index],
                      quantity: updatedProducts[index].quantity + 1,
                    };
                    return updatedProducts;
                  } else {
                    return [
                      ...prevProducts,
                      {
                        id: singleProduct.id,
                        image: singleProduct.image,
                        title: singleProduct.title,
                        price: singleProduct.price,
                        quantity: 1,
                      },
                    ];
                  }
                });
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
