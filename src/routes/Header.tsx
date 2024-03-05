import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button"

  
 
export default function Header() {
    return (
        <div id='header' className="pb-6">

                <Menubar className="flex p-8">

                <MenubarMenu>
                    <MenubarTrigger className="flex-none">
                        <RxHamburgerMenu />  
                    </MenubarTrigger>
                        <h4 className="flex-1 w-64 px-6">FA.COM</h4>
                            <MenubarContent>
                                <MenubarItem>New Items</MenubarItem>
                                    <MenubarSeparator />
                                <MenubarItem>Clothes</MenubarItem>
                                    <MenubarSeparator />
                                <MenubarItem>Bags</MenubarItem>
                                    <MenubarSeparator />
                                <MenubarItem>Shoes</MenubarItem>
                            </MenubarContent>

                </MenubarMenu>

                <div className="flex-none">
                <Button variant="outline">
                <TiShoppingCart />
                </Button>
                </div>

                </Menubar>

        </div>
        );
}

