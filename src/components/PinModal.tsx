
import { Pin } from "@/types";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Heart, MessageCircle, Share2 } from "lucide-react";

interface PinModalProps {
  pin: Pin | null;
  isOpen: boolean;
  onClose: () => void;
}

const PinModal = ({ pin, isOpen, onClose }: PinModalProps) => {
  if (!pin) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-3/5 bg-black">
            <img 
              src={pin.imageUrl} 
              alt={pin.title} 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="w-full md:w-2/5 p-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <Button 
                className="bg-purple-light hover:bg-purple-DEFAULT text-white"
                size="sm"
              >
                Save
              </Button>
            </div>
            
            <h1 className="text-xl font-bold mb-2">{pin.title}</h1>
            {pin.description && (
              <p className="text-gray-600 mb-4">{pin.description}</p>
            )}
            
            <div className="flex items-center mt-6 mb-6">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={pin.user?.avatar} />
                <AvatarFallback className="bg-purple-light text-white">
                  {pin.user?.username.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium text-sm">{pin.user?.username}</p>
                <p className="text-xs text-gray-500">
                  {pin.user?.followersCount} followers
                </p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-medium mb-2">Comments</h3>
              <div className="flex items-center space-x-1 text-gray-500">
                <MessageCircle className="h-4 w-4" />
                <span className="text-sm">{pin.commentsCount} comments</span>
              </div>
              
              <div className="flex items-center mt-4">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={pin.user?.avatar} />
                  <AvatarFallback className="bg-purple-light text-white text-xs">
                    {pin.user?.username.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Add a comment" 
                    className="w-full py-2 px-3 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-light"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PinModal;
