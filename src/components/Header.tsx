
import { Bell, Home, MessageCircle, PlusCircle, Search, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-10 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 py-2 px-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-light to-pink-DEFAULT flex items-center justify-center">
            <span className="text-white font-bold text-lg">P</span>
          </div>
          {!isMobile && (
            <span className="ml-2 font-bold text-lg bg-gradient-to-r from-purple-DEFAULT to-pink-DEFAULT bg-clip-text text-transparent">
              PinPurple
            </span>
          )}
        </Link>

        <div className="hidden md:flex relative flex-1 max-w-lg mx-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Search for inspiration..."
            className="pl-10 bg-gray-50 border-none"
          />
        </div>

        <div className="flex items-center space-x-1 md:space-x-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className={location.pathname === "/" ? "text-pink-DEFAULT" : ""}
          >
            <Link to="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>

          {!isMobile && (
            <>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="h-5 w-5" />
              </Button>
            </>
          )}

          <Button
            variant="ghost"
            size="icon"
            asChild
            className={
              location.pathname === "/profile" ? "text-pink-DEFAULT" : ""
            }
          >
            <Link to="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button variant="ghost" size="icon">
            <PlusCircle className="h-5 w-5" />
          </Button>

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
