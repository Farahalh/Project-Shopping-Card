import { Button } from "@/components/ui/button";
import { useGetProduct } from "./hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
  
export default function SingleProduct() {
        const { singleProduct, error, isLoading } = useGetProduct();

        const navigate = useNavigate();

        if(error) {
            return <div>{error.message}</div>
        }

        if(isLoading) {
            return <p>Loading...</p>
        }

    return (
        <div id='singleProduct'>
                    <div className='container py-8'>
            <Card key={singleProduct.id}>
            <CardHeader>
                <img src={singleProduct.image} alt="productImage" />
                <CardTitle className="py-2">{singleProduct.title}</CardTitle>
                <CardDescription><p >{singleProduct.description}</p></CardDescription>
            </CardHeader>
            <CardContent>
                <p className="pb-4">{singleProduct.price} sek</p>

                {/* todo:
                - use stateManagement to actually input this into the cartItem 
                - this navigation solution is temporary and not correct for this purpose*/}
                <Button>
                <div className='addToCart' onClick={() => navigate(`cart`)}>Add to Cart</div> 
                </Button>
            </CardContent>
            </Card>
        </div>
        </div>
        );
}

