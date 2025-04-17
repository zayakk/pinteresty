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

  // Хэрэглэгчийн өөрийн оруулсан пинуудыг шүүнэ
  const userPins = pins.filter(pin => pin.userId === currentUser.id);
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Толгой хэсэг */}
      <Header />
      
      <main className="pt-6 pb-20 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-8">
          {/* Хэрэглэгчийн дүрс зураг */}
          <Avatar className="h-20 w-20 mb-4">
            <AvatarImage src={currentUser.avatar} />
            <AvatarFallback className="bg-purple-light text-white text-xl">
              {currentUser.username.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          
          {/* Хэрэглэгчийн нэр болон хэрэглэгчийн нэрийн доорх нэр */}
          <h1 className="text-2xl font-bold mb-1">{currentUser.username}</h1>
          <p className="text-gray-600 mb-3">@{currentUser.username}</p>
          
          {/* Хэрэв био байгаа бол */}
          {currentUser.bio && (
            <p className="text-center max-w-md mb-4">{currentUser.bio}</p>
          )}
          
          {/* Дагагч болон дагаж буй тоо */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
            <span><strong>{currentUser.followersCount}</strong> дагагч</span>
            <span className="text-gray-300">•</span>
            <span><strong>{currentUser.followingCount}</strong> дагаж буй</span>
          </div>
          
          {/* Профайл засах болон хуваалцах товчлуурууд */}
          <div className="flex space-x-2">
            <Button className="bg-purple-light hover:bg-purple-DEFAULT text-white">
              Профайл засах
            </Button>
            <Button variant="outline" size="icon" className="h-9 w-9 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Tab хэсэг: бүтээсэн ба хадгалсан */}
        <Tabs defaultValue="created" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-6">
            <TabsTrigger value="created" className="flex-1">Таны</TabsTrigger>
            <TabsTrigger value="saved" className="flex-1">Хадгалсан</TabsTrigger>
          </TabsList>
          
          {/* Бүтээсэн пинууд */}
          <TabsContent value="created">
            {userPins.length > 0 ? (
              <MasonryGrid pins={userPins} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">Та хараахан пин үүсгээгүй байна</h3>
                <p className="text-gray-500 mb-4">Санаагаа хуваалцан үүсгэж эхлээрэй</p>
                <Button className="bg-pink-DEFAULT hover:bg-pink-dark text-white">
                  Пин үүсгэх
                </Button>
              </div>
            )}
          </TabsContent>
          
          {/* Хадгалсан пинууд */}
          <TabsContent value="saved">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Одоогоор хадгалсан пин байхгүй</h3>
              <p className="text-gray-500 mb-4">Хадгалсан пинүүд тань энд харагдана</p>
              <Button 
                variant="outline" 
                className="border-purple-light text-purple-DEFAULT hover:bg-purple-light/10"
                asChild
              >
                <a href="/">Хадгалахаар санаа хайх</a>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      {/* Пин дэлгэрэнгүй харах цонх */}
      <PinModal 
        pin={selectedPin}
        isOpen={!!selectedPin}
        onClose={() => setSelectedPin(null)}
      />
    </div>
  );
};

export default Profile;
