import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, PawPrint, User } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const isLogin = false;

  return (
    <div className="shadow-sm p-2 bg-gray-100 z-50 sticky top-0 ">
      <section className="flex items-center justify-between max-w-7xl mx-auto px-2">
        {/*logo  */}

        <Link href="/">
          <img src="/logo.png" className="w-[4rem]" alt="" />
        </Link>

        {/* NavIttems */}
        <NavItems />
        {/* login */}
        {isLogin ? (
          <>
            <Link href="/profile" className="hidden md:flex">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </>
        ) : (
          <>
            <Link href="/login">
              <Button className="hidden md:flex bg-[#008966] text-white">
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
            </Link>
          </>
        )}

        {/* MobileVersion */}
        <MobileNav />
      </section>
    </div>
  );
};

export default Navbar;

const NavItems = () => {
  return (
    <NavigationMenu className="md:inline-flex hidden">
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/"
          >
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/profile"
          >
            Profile/Dashboard
          </Link>
        </NavigationMenuItem>

        {/* contact Us */}
        {/* <NavigationMenuItem>
          <Link
            className="inline-flex h-9 items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none"
            href="/contact"
          >
            Contact Us
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileNav = () => {
  const isLogin = true;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="mr-2 md:hidden">
          <Menu className="h-4 w-4" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col space-y-4 md:hidden">
          <Link href="/" className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6" />
            <span className="font-bold">PetAdopt</span>
          </Link>
          <nav className="flex flex-col space-y-2">
            <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
            </SheetTrigger>
            {isLogin ? (
              <SheetTrigger asChild className="flex items-start justify-start">
                <Link
                  href="/profile"
                  className="text-sm hover:underline"
                >
                  Profile/Dashboard
                </Link>
              </SheetTrigger>
            ) : null}

            {/* <SheetTrigger asChild className="flex items-start justify-start">
              <Link href="/contact" className="text-sm hover:underline">
                contact Us
              </Link>
            </SheetTrigger> */}
          </nav>
          {isLogin ? (
            <>
              <SheetTrigger asChild>
                <Link href="/profile">
                  <Button className="w-full" variant="default">
                    <User className="mr-2 h-4 w-4" /> Profile
                  </Button>
                </Link>
              </SheetTrigger>
            </>
          ) : (
            <>
              <SheetTrigger asChild>
                <Link href="/login">
                  <Button className="w-full" variant="default">
                    <User className="mr-2 h-4 w-4" /> Login
                  </Button>
                </Link>
              </SheetTrigger>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
