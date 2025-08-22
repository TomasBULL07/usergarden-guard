import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => {
        // Simple frontend-only navigation
        navigate("/dashboard");
    };
    const handleAdminLogin = () => {
        navigate("/admin");
    };
    return (<div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-primary rounded-2xl p-3 mr-3">
              <Utensils className="w-8 h-8 text-primary-foreground"/>
            </div>
            <h1 className="text-2xl font-bold text-foreground">SABOREA</h1>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold mb-2">
              Bienvenido a <span className="text-primary">SABOREA</span>
            </h2>
            <p className="text-muted-foreground">
              Mejorando tu experiencia gastronómica
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <Button variant="secondary" className="w-full py-3 text-base font-medium">
              Continuar con Google
            </Button>
            
            <div className="text-center text-muted-foreground">
              o con tu correo
            </div>

            <div className="space-y-4">
              <Input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} className="py-3"/>
              
              <Input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} className="py-3"/>
            </div>

            <Button onClick={handleLogin} className="w-full py-3 text-base font-medium">
              Entrar
            </Button>
          </div>

          <div className="text-center space-y-4">
            <Button variant="outline" className="w-full py-3" onClick={handleAdminLogin}>
              Consola de Administrador
            </Button>

            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">¿Olvidaste tu contraseña?</p>
              <p className="text-muted-foreground">
                ¿No tienes una cuenta?{" "}
                <span className="text-primary cursor-pointer">Regístrate</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>);
};
export default LoginPage;
