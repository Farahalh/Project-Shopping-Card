export default function ProductList() {
    return (
        <div id="productlist">

<div className='container flex-auto py-4'>
                    <h1 className='text-base font-semibold'>Welcome to FA Online Shop</h1>

                    <div className="grid grid-cols-1 grid-flow-row gap-3 pt-3">
                        <div className='productImg'>
                        <img src="https://placehold.co/400" alt="1" />
                        <div className='productText'>
                            <h6>FA</h6>
                            <p>Lorem ipsum dolor...</p>
                            <p>200 sek</p>
                        </div>
                        </div>
                    
                        <div className='productImg'>
                        <img src="https://placehold.co/400" alt="2" />
                        <div className='productText'>
                            <h6>FA</h6>
                            <p>Lorem ipsum dolor...</p>
                            <p>200 sek</p>
                        </div>
                        </div>

                        <div className='productImg'>
                        <img src="https://placehold.co/400" alt="3" />
                        <div className='productText'>
                            <h6>FA</h6>
                            <p>Lorem ipsum dolor...</p>
                            <p>200 sek</p>
                        </div>
                        </div>

                    </div>
                </div>
        </div>
        );
}