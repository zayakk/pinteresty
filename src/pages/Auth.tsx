import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Auth = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Нэвтрэх мэдээлэл:", { loginEmail, loginPassword });
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Бүртгүүлэх мэдээлэл:", { registerEmail, registerPassword, registerUsername });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center auth-gradient p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-8">
        <div className="flex justify-center mb-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-light to-pink-DEFAULT flex items-center justify-center">
            <span className="text-white font-bold text-xl">P</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-purple-DEFAULT to-pink-DEFAULT bg-clip-text text-transparent">
          PinPurple-д тавтай морил
        </h1>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="w-full mb-6">
            <TabsTrigger value="login" className="flex-1">Нэвтрэх</TabsTrigger>
            <TabsTrigger value="register" className="flex-1">Бүртгүүлэх</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="И-мэйл"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Нууц үг"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              
              <div className="text-right">
                <a href="#" className="text-sm text-purple-DEFAULT hover:text-purple-dark">
                  Нууц үгээ мартсан уу?
                </a>
              </div>
              
              <Button 
                type="submit" 
                className="w-full text-white"
              >
                Нэвтрэх
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="register">
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Хэрэглэгчийн нэр"
                  value={registerUsername}
                  onChange={(e) => setRegisterUsername(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="И-мэйл"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              
              <div>
                <Input
                  type="password"
                  placeholder="Нууц үг"
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  required
                  className="bg-gray-50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full text-white"
              >
                Бүртгүүлэх
              </Button>
            </form>
          </TabsContent>
        </Tabs>
        
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-gray-500 hover:text-purple-DEFAULT">
            Зочиноор үргэлжлүүлэх
          </Link>
        </div>
        
        <div className="mt-8 text-xs text-center text-gray-500">
          Үргэлжлүүлснээр та PinPurple-ийн Үйлчилгээний нөхцөлтэй санал нийлж, 
          Хувийн нууцлалын бодлогыг уншсан гэдгээ зөвшөөрч байна.
        </div>
      </div>
    </div>
  );
};

export default Auth;
