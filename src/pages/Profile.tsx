
import { useState } from "react";
import Header from "@/components/Header";
import { currentUser, pins } from "@/lib/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MasonryGrid from "@/components/MasonryGrid";
import PinModal from "@/components/PinModal";
import { Pin } from "@/types";
import { Share2 } from "lucide-react";

const Profile = () => {
  const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
  const userPins = pins.filter(pin => pin.userId === currentUser.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-6 pb-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback className="bg-purple-light text-white text-xl">
              {currentUser.username.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          <h1 className="text-2xl font-bold mb-1">{currentUser.username}</h1>
          <p className="text-gray-600 mb-3">@{currentUser.username}</p>
          
          {currentUser.bio && (
            <p className="text-center max-w-md mb-4">{currentUser.bio}</p>
          )}
          
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span><strong>{currentUser.followersCount}</strong> followers</span>
            <span className="text-gray-300">•</span>
            <span><strong>{currentUser.followingCount}</strong> following</span>
          </div>
          
          <div className="flex space-x-2">
            <Button className="bg-purple-light hover:bg-purple-DEFAULT text-white">
              Edit profile
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="created" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="created" className="flex-1">Created</TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">Saved</TabsTrigger>
          </TabsList>
          
          <TabsContent value="created">
            {userPins.length > 0 ? (
              <MasonryGrid pins={userPins} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">You haven't created any pins yet</h3>
                <p className="text-gray-500 mb-4">Start creating and sharing your ideas</p>
                <Button className="bg-pink-DEFAULT hover:bg-pink-dark text-white">
                  Create pin
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="saved">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No saved pins yet</h3>
              <p className="text-gray-500 mb-4">Pins you save will appear here</p>
              <Button 
                variant="outline" 
                className="border-purple-light text-purple-DEFAULT hover:bg-purple-light/10"
                asChild
              >
                <a href="/">Find ideas to save</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <PinModal 
        pin={selectedPin}
        isOpen={!!selectedPin}
        onClose={() => setSelectedPin(null)}
      />
    </div>
  );
};

export default Profile;
