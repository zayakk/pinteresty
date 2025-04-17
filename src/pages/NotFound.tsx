import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 алдаа: Хэрэглэгч дараах замаар хуудас руу нэвтрэхийг оролдсон:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Уучлаарай! Хуудас олдсонгүй</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Нүүр хуудас руу буцах
        </a>
      </div>
    </div>
  );
};

export default NotFound;
