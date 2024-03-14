import { Card } from "@/components/ui/card";
// import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { productAtom } from "@/atoms/product";
import { Product } from "@/atoms/product";

export default function CartItem() {

  const [productsAtom, setProductsAtom] = useAtom(productAtom);

  console.log(productsAtom);

  return (
    <div className="cartItem">
      {productsAtom.map((productsAtom: Product) => (
        <Card
          key={productsAtom.id}
          className="card flex flex-row flex-nowrap p-4"
        >
          <div className="productInfo flex">
            <div className="productImg flex-intial w-32">
              <img src={productsAtom.image} alt="1" />
            </div>

            <div className="flex flex-col">
              <div className="flex-initial">
                <p className="productName">{productsAtom.title}</p>

                <div className="countbuttons flex flex-row py-6">
                  <Button variant="outline">-</Button>
                  <span className="px-3">{productsAtom.quantity}</span>
                  <Button variant="outline">+</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="trashIcon flex-initial pl-12">
            <Button variant="outline">Remove</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
