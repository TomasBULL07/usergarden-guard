import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Index = () => {
    const navigate = useNavigate();
    return (<div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Dashboard de Saborea</h1>
        <p className="text-xl text-muted-foreground mb-8">¡Bienvenido al sistema!</p>
        <div className="space-x-4">
          <Button onClick={() => navigate("/admin")}>
            Ir a Admin Console
          </Button>
          <Button variant="outline" onClick={() => navigate("/")}>
            Volver al Login
          </Button>
        </div>
      </div>
    </div>);
};
export default Index;
