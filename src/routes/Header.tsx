import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RxHamburgerMenu } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div id="header" className="container mx-auto md:max-w-2xl lg:max-w-3xl">
      <Menubar className="flex p-8">
        <MenubarMenu>
          <MenubarTrigger className="">
            <RxHamburgerMenu />
          </MenubarTrigger>
          <Link to={"/"} className="flex-1">
            FA.COM
          </Link>
          {/* static menu */}
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

        <Link to={"/cart"}>
          <Button
            variant="outline"
            // onClick={() => (window.location.href = "/cart")}
          >
            <TiShoppingCart />
          </Button>
        </Link>
      </Menubar>
    </div>
  );
}
