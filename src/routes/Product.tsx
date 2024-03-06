import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  
export default function Product() {
    return (
        <div id='product' className="container pt-14">

<div className="carousel flex pb-14">
<div className="flex-initial w-20 h-24 py-7 pr-2">

<Carousel orientation="vertical">
<CarouselPrevious />
  <CarouselContent>
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <img src="https://placehold.co/400" alt="mainProductImg" />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <img src="https://placehold.co/400" alt="mainProductImg" />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <img src="https://placehold.co/400" alt="mainProductImg" />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <img src="https://placehold.co/400" alt="mainProductImg" />
        </CarouselItem>

        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <img src="https://placehold.co/400" alt="mainProductImg" />
        </CarouselItem>
  </CarouselContent>
  <CarouselNext />
</Carousel>
</div>

<div className="mainProductImg flex-intial w-96 py-12 mx-10">
<img src="https://placehold.co/400" alt="mainProductImg"/>
</div>
</div>

<div className="productDescripton pt-6">
<div className="">
<h2>Product Title</h2>
<p className="">
Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
Debitis, at et! Itaque, officiis? Quas quis illum iure accusamus <br />
totam in consectetur natus quam culpa vitae, alias, non rem enim tenetur?
</p>
</div>

<div className="productDetail pt-6">
<h2 className="pb-2">Price</h2>
<p className="pb-2">Color</p>
<p className="pb-2">Size</p>
<a href="/">Size guide</a>

<div className="pt-8">
<Button>Add to bag</Button>
</div>

</div>
</div>

        </div>
        
        );
}

