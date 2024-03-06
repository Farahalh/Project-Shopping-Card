import ProductList from './ProductList';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function Homepage() {
    return (
        <div id='homepage'>
            <div className='px-3 flex'>
                
                <div id='accordion' className='flex-intial w-32 '>
                <Accordion type="single" collapsible>

                <AccordionItem value="item-1" className='py-2'>
                    <AccordionTrigger>Clothes</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className='py-2'>
                    <AccordionTrigger>Bags</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className='py-2'>
                    <AccordionTrigger>Shoes</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className='py-2'>
                    <AccordionTrigger>Hair</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className='py-2'>
                    <AccordionTrigger>MakeUp</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className='py-2'>
                    <AccordionTrigger>Accessories</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                </Accordion>
                </div>

                <ProductList />
            </div>
        </div>
    );
}

