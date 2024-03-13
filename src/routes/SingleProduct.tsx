import { Button } from "@/components/ui/button";
import { useGetProduct } from "./hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAtom } from "jotai";
import { productAtom } from "@/atoms/product";

export default function SingleProduct() {
        const { singleProduct, error, isLoading } = useGetProduct();

        const [ productsAtom, setProductsAtom] = useAtom(productAtom);

        console.log(productsAtom);

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
                <Button onClick={() => setProductsAtom([...productsAtom,{id: singleProduct.id, image: singleProduct.image, name: singleProduct.title, price: singleProduct.price}])}>Add to Cart</Button>
            </CardContent>
            </Card>
        </div>
        </div>
        );
}

