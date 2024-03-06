import ProductList from './ProductList';
import Header from './Header';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
export default function Homepage() {
    return (
        <div id='homepage'>
            <div className='px-2 flex'>
                
                <div id='accordion' className='flex-intial w-32 '>
                <Accordion type="single" collapsible>

                <AccordionItem value="item-1">
                    <AccordionTrigger>Clothes</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>Bags</AccordionTrigger>
                    <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Shoes</AccordionTrigger>
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

