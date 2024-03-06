import {
    Card,
    CardContent,
  } from "@/components/ui/card"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { FaRegTrashCan } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
 
export default function CartItem() {
    return (
        <div id='cartitem'>

<Card className="card flex flex-row flex-nowrap p-3">
<div className="productInfoAndSize flex">
<div className='productImg flex-intial w-32'>
    <img src="https://placehold.co/100" alt="1" />
  </div>

<div className="flex flex-col">
    <CardContent className="flex-initial ">
        <p>Product Name</p>
        <p>Color</p>
    </CardContent>

  <div className="dropDownSelectSize flex-initial">
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Size" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">M</SelectItem>
    <SelectItem value="dark">L</SelectItem>
    <SelectItem value="system">XL</SelectItem>
  </SelectContent>
</Select>
</div>
</div>
</div>

<div className="trashIcon flex-initial">
<Button variant="outline">
<FaRegTrashCan />
</Button>
</div>

</Card>
        </div>
        );
}

