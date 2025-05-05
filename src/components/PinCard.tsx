import { Pin } from "@/types";
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PinCardProps {
  pin: Pin;
}

const PinCard = ({ pin }: PinCardProps) => {
  const { id, title, imageurl, aspectRatio, savesCount, user } = pin;

  return (
    <div
      className="pin-appear rounded-lg overflow-hidden pin-hover-effect bg-white"
      style={{
        breakInside: "avoid",
        pageBreakInside: "avoid",
      }}
    >
      <div className="relative group">
        <Link to={`/pin/${id}`}>
          <img
            src={imageurl}
            alt={title}
            className="w-full rounded-lg object-cover"
            style={{ aspectRatio: aspectRatio }}
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <span className="text-white font-medium px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm">
              View
            </span>
          </div>
        </Link>

        <Button
          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-gray-700 rounded-full h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          size="sm"
          variant="ghost"
        >
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        <Button
          className="absolute bottom-2 right-2 bg-pink-light hover:bg-pink-DEFAULT text-pink-dark hover:text-white rounded-full h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
          size="sm"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-3">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-1">
            <Avatar className="h-6 w-6">
              <AvatarImage src={user?.avatar} />
              <AvatarFallback className="bg-purple-light text-white text-xs">
                {user?.username.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-gray-600">{user?.username}</span>
          </div>

          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1">{savesCount}</span>
            <Heart className="h-3 w-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PinCard;
