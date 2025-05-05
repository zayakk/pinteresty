import { useState, useEffect } from "react";
import Header from "@/components/Header";
import MasonryGrid from "@/components/MasonryGrid";
import PinModal from "@/components/PinModal";
import { pins } from "@/lib/mockData";
import { Pin } from "@/types";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { fetchData, ResponseInterface } from "../utils/needful";

const API_URL = "http://127.0.0.1:8000/apipinterest/";

const Index = () => {
  const navigate = useNavigate();
  const { pinId } = useParams<{ pinId: string }>();

  const [selectedPin, setSelectedPin] = useState<Pin | null>(
    pinId ? pins.find((p) => p.id === pinId) || null : null
  );
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState([]);

  const fetchEvent = async () => {
    try {
      setError("");
      const res = await axios.post(API_URL, { action: "getalluserinfo" });
      if (Array.isArray(res.data.data)) {
        setEvents(res.data.data);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Fetch алдаа:", error);
      setError("Сервертэй холбогдож чадсангүй.");
    } finally {
      setLoading(false);
    }
  };

  const fetchList = async () => {
    try {
      const data = await fetchData({
        url: "http://127.0.0.1:8000/apipinterest/",
        // url: "http://issw.mandakh.org/apihabit/",
        method: "POST",
        body: { action: "getallpin" },
      });
      setResponse(data.data);
      console.log(data.data);
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchEvent();
    setLoading(true);
    fetchList();
  }, []);

  const handleCloseModal = () => {
    setSelectedPin(null);
    if (pinId) {
      navigate("/", { replace: true });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-6 pb-20 px-2 md:px-6 max-w-7xl mx-auto">
        <MasonryGrid pins={response} />
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
