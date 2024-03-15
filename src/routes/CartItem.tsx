import { Card } from "@/components/ui/card";
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { productAtom } from "@/atoms/product";
import { Product } from "@/atoms/product";

export default function CartItem() {
  const [productsAtom, setProductsAtom] = useAtom(productAtom);

  // deleting product from array based on id onClick, keeping rest of array
  const deleteItem = (productId: number) => {
    setProductsAtom((prevProducts) => {
      const index = prevProducts.findIndex(
        (product) => product.id === productId
      );
      if (index !== -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts.splice(index, 1);
        return updatedProducts;
      }
      return prevProducts;
    });
  };

  console.log(productsAtom);

  return (
    <div className="cartItem">
      {/* mapping through productsAtom that was saved in array and displayes each in below Card */}
      {productsAtom.map((productsAtom: Product) => (
        <Card
          key={productsAtom.id}
          className="card flex flex-row flex-nowrap p-4"
        >
          <div className="productInfo flex">
            <div className="productImg flex-intial w-32">
              <img src={productsAtom.image} alt="productImg" className="p-1" />
            </div>

            <div className="flex flex-col">
              <div className="flex-initial">
                <p className="productName p-2">{productsAtom.title}</p>
                <p className="productName p-2">{productsAtom.price} sek</p>

                <div className="countbuttons flex flex-row py-6">
                  {/* Decrement onClick search index of array*/}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setProductsAtom((prevProducts) => {
                        const index = prevProducts.findIndex(
                          (product) => product.id === productsAtom.id
                        );

                        // if more than 1 decrement
                        if (index !== -1 && prevProducts[index].quantity > 1) {
                          const updatedProducts = [...prevProducts];
                          updatedProducts[index] = {
                            ...updatedProducts[index],
                            quantity: updatedProducts[index].quantity - 1,
                          };
                          return updatedProducts;
                        }

                        // if less or equal than 1 remove from array
                        if (index !== -1 && prevProducts[index].quantity <= 1) {
                          const updatedProducts = [...prevProducts];
                          updatedProducts.splice(index, 1);
                          return updatedProducts;
                        }

                        return prevProducts;
                      });
                    }}
                  >
                    -
                  </Button>

                  {/* displayes produc quantity */}
                  <span id="quantity" className="px-3">
                    {productsAtom.quantity}
                  </span>

                  {/* Increment onClick search index of array*/}
                  <Button
                    variant="outline"
                    onClick={() => {
                      setProductsAtom((prevProducts) => {
                        const index = prevProducts.findIndex(
                          (product) => product.id === productsAtom.id
                        );

                        // if not -1 increment
                        if (index !== -1) {
                          const updatedProducts = [...prevProducts];
                          updatedProducts[index] = {
                            ...updatedProducts[index],
                            quantity: updatedProducts[index].quantity + 1,
                          };
                          return updatedProducts;
                        }

                        return prevProducts;
                      });
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* button for remove product entirely from cart */}
          <div className="trashIcon flex-initial pl-12">
            <Button
              variant="outline"
              onClick={() => deleteItem(productsAtom.id)}
            >
              <FaRegTrashCan />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
