
import { useState } from "react";
import Header from "@/components/Header";
import MasonryGrid from "@/components/MasonryGrid";
import PinModal from "@/components/PinModal";
import { pins } from "@/lib/mockData";
import { Pin } from "@/types";
import { useNavigate, useParams } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const { pinId } = useParams<{ pinId: string }>();
  const [selectedPin, setSelectedPin] = useState<Pin | null>(
    pinId ? pins.find((p) => p.id === pinId) || null : null
  );

  const handleCloseModal = () => {
    setSelectedPin(null);
    // Remove pin ID from URL if it exists
    if (pinId) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-6 pb-20 px-2 md:px-6 max-w-7xl mx-auto">
        <MasonryGrid pins={pins} />
      </main>
      
      <PinModal 
        pin={selectedPin}
        isOpen={!!selectedPin}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
