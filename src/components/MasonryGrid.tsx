
import { Pin } from "@/types";
import PinCard from "./PinCard";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface MasonryGridProps {
  pins: Pin[];
}

const MasonryGrid = ({ pins }: MasonryGridProps) => {
  const isMobile = useIsMobile();
  const [columns, setColumns] = useState<Pin[][]>([]);
  
  // Distribute pins across columns for a masonry-like layout
  useEffect(() => {
    const columnCount = isMobile ? 2 : 5;
    const columnArray: Pin[][] = Array.from({ length: columnCount }, () => []);
    
    pins.forEach((pin, index) => {
      const columnIndex = index % columnCount;
      columnArray[columnIndex].push(pin);
    });
    
    setColumns(columnArray);
  }, [pins, isMobile]);
  
  return (
    <div className="w-full px-2 md:px-4">
      <div className="flex space-x-2 md:space-x-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 space-y-4">
            {column.map((pin) => (
              <PinCard key={pin.id} pin={pin} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasonryGrid;
