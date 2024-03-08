import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

//interface always outside of the component here ex Homepage
interface Product{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image?: string,
    rating: {
        rate: number,
        count: number,
    }
};

export default function ProductList() {
        const { data: products, error, isLoading } = useQuery({
            queryFn: () =>
            fetch('https://fakestoreapi.com/products?limit=10').then(
                (res) => res.json()
            ),
            queryKey: ['products'],
        });

        const navigate = useNavigate();

if(error) {
    return <div>Not able to fetch any products, try again later!</div>
}

if(isLoading) {
    return <p>Loading...</p>
}

    return (
        <div id="productlist">
            <div className='container flex-auto'>
                <div className="grid grid-cols-1 grid-flow-row gap-4">
                    <h1 className='text-base font-semibold py-4'>Welcome to FA Online Shop</h1>
             {products.map((product: Product) => (

                <Card>
                    <CardHeader>
                        <CardTitle>{product.title}</CardTitle>
                        <img src={product.image} alt="productImage" />
                        <CardDescription>{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>{product.price} sek</p>
                        <p>Rate: {product.rating.rate}</p>
                        <p className='py-4'>Reviews: {product.rating.count}</p>
                        <div className='goToProduct' onClick={() => navigate('/product/:productId')}>Go To Product</div>
                    </CardContent>
                </Card>
        ))}
            </div>
            </div>
        </div>
        );
}