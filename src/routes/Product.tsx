import { Button } from "@/components/ui/button";
  
export default function Product() {
    return (
        <div id='product' className="container pt-4">

                <div className="mainProductImg pb-10">
                <img src="https://placehold.co/400" alt="productImage"/>
                </div>

                <div className="productDescripton pt-2">
                <div className="">
                <h2 className="productName pb-2">Product Title</h2>
                <p className="productDetail">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Debitis, at et! Itaque, officiis? Quas quis illum iure accusamus <br />
                totam in consectetur natus quam culpa vitae, alias, non rem enim tenetur?
                </p>
                </div>

                <div className="productDetail pt-6">
                <h2 className="pb-2">Price</h2>

                <div className="pt-4 py-4">
                <Button>Add to bag</Button>
                </div>

                </div>
                </div>
        </div>
        );
}

