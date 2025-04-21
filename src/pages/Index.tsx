// import { useState } from "react";
// import Header from "@/components/Header";
// import MasonryGrid from "@/components/MasonryGrid";
// import PinModal from "@/components/PinModal";
// import { pins } from "@/lib/mockData";
// import { Pin } from "@/types";
// import { useNavigate, useParams } from "react-router-dom";

// const Index = () => {
//   const navigate = useNavigate();
//   const { pinId } = useParams<{ pinId: string }>();
//   const [selectedPin, setSelectedPin] = useState<Pin | null>(
//     pinId ? pins.find((p) => p.id === pinId) || null : null
//   );

//   const handleCloseModal = () => {
//     setSelectedPin(null);
//     // Хэрэв URL дээр pin ID байгаа бол түүнийг цэвэрлэнэ
//     if (pinId) {
//       navigate("/", { replace: true });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <main className="pt-6 pb-20 px-2 md:px-6 max-w-7xl mx-auto">
//         <MasonryGrid pins={pins} />
//       </main>

//       <PinModal
//         pin={selectedPin}
//         isOpen={!!selectedPin}
//         onClose={handleCloseModal}
//       />
//     </div>
//   );
// };

// export default Index;

"use client";

import { useEffect, useState } from "react";

interface User {
  userid: number;
  username: string;
  email: string;
  profile_picture_url: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/apipinterest/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action: "getuser" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          setUsers(data.data);
        } else {
          console.warn("Хэрэглэгчид олдсонгүй");
        }
      })
      .catch((err) => {
        console.error("Алдаа:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Хэрэглэгчид</h1>
      {loading ? (
        <p>Уншиж байна...</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user.userid} className="flex items-center space-x-4">
              <img
                src={user.profile_picture_url}
                alt={user.username}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-gray-500">{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
