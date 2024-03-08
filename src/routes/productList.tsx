import { useQuery } from '@tanstack/react-query'

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

if(error) {
    return <div>Not able to fetch any products, try again later!</div>
}

if(isLoading) {
    return <p>Loading...</p>
}

    return (
        <div id="productlist">

             {products.map((product: Product) => (

<div className='container flex-auto py-4'>
<h1 className='text-base font-semibold py-4'>Welcome to FA Online Shop</h1>

<div className="grid grid-cols-1 grid-flow-row gap-3 pt-3">
    <div className='productImg'>
    <img src={product.image} alt="1" />
    <div className='productText py-4'>
        <h6 className="productName font-medium py-4">{product.title}</h6>
        <p className="productDetail py-4">Description: {product.description}</p>
        <p className="productPrice">Price: {product.price} sek</p>
    </div>
    <div className='productRating'>
        <p className='productRate'>Rate: {product.rating.rate}</p>
        <p className='productCount'>Reviews: {product.rating.count}</p>
    </div>
    </div>

</div>
</div>
        ))}
        </div>
        );
}