import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
 
export default function CartItem() {
    return (
        <div className='cartItem'>

<Card className="card flex flex-row flex-nowrap p-4">
<div className="productInfo flex">
<div className='productImg flex-intial w-32'>
    <img src="https://placehold.co/100" alt="1" />
  </div>

<div className="flex flex-col">
    <div className="flex-initial">
        <p className="productName">Product Name</p>
        <div className="countbuttons flex flex-row py-6">
        <Button variant="outline">
          -
        </Button>
        <p className="px-3">1</p>
        <Button variant="outline">
          +
        </Button>
        </div>
    </div>
</div>

</div>

<div className="trashIcon flex-initial pl-12">
<Button variant="outline">
<FaRegTrashCan />
</Button>
</div>

</Card>
        </div>
        );
}

