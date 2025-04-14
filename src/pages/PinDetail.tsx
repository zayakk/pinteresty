
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "@/components/Header";
import { pins } from "@/lib/mockData";
import { Pin } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Download, Heart, MessageCircle, Share2 } from "lucide-react";
import MasonryGrid from "@/components/MasonryGrid";

const PinDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pin, setPin] = useState<Pin | null>(null);
  const [relatedPins, setRelatedPins] = useState<Pin[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundPin = pins.find((p) => p.id === id);
      if (foundPin) {
        setPin(foundPin);
        // Get pins by the same user or similar pins (random subset for demo)
        const filtered = pins.filter((p) => p.id !== id).slice(0, 6);
        setRelatedPins(filtered);
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [id, navigate]);
  
  if (!pin) return null;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-6 pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/5 bg-black flex items-center justify-center">
              <img 
                src={pin.imageUrl} 
                alt={pin.title} 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
            
            <div className="w-full md:w-2/5 p-6">
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
              
              <div className="flex items-center justify-between mt-6 mb-6">
                <div className="flex items-center">
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
                
                <Button variant="outline" size="sm" className="h-9">
                  Follow
                </Button>
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
        </div>
        
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">More like this</h2>
          <MasonryGrid pins={relatedPins} />
        </div>
      </main>
    </div>
  );
};

export default PinDetail;
