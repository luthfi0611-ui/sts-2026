import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4">
        
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            L
          </div>
          Logo
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            <NavigationMenuItem>
              <Link
                to="/"
                className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                Home
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/about"
                className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                About
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/testimony"
                className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                Testimony
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link
                to="/faq"
                className="rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                FAQ
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Link
          to="/signin"
          className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Sign In
        </Link>

      </div>
    </nav>
  );
}