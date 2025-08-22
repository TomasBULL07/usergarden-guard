import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2, Users, FileText, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Mock data for demo
const mockUsers = [
    { id: 1, name: "Tomas Castro", email: "tomas@example.com", posts: 5, status: "active" },
    { id: 2, name: "Maria González", email: "maria@example.com", posts: 3, status: "active" },
    { id: 3, name: "Carlos López", email: "carlos@example.com", posts: 8, status: "inactive" },
    { id: 4, name: "Ana Martínez", email: "ana@example.com", posts: 2, status: "active" },
];
const mockPosts = [
    { id: 1, title: "Pasta carbonara recién preparada", author: "La Cocina del Chef", likes: 24, date: "2h" },
    { id: 2, title: "Increíble experiencia en Sushi Zen", author: "Maria González", likes: 18, date: "3h" },
    { id: 3, title: "Ceviche de camarones especial", author: "Mariscos del Puerto", likes: 31, date: "1d" },
    { id: 4, title: "Nueva carta de temporada", author: "Casa Vieja", likes: 12, date: "2d" },
    { id: 5, title: "Tacos especiales de fin de semana", author: "Tacos El Güero", likes: 27, date: "3d" },
];
const AdminConsole = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(mockUsers);
    const [posts, setPosts] = useState(mockPosts);
    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
    };
    const deletePost = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };
    return (<div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" onClick={() => navigate("/")} className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4"/>
              Volver
            </Button>
            <h1 className="text-3xl font-bold">Consola de Administrador</h1>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            Admin Panel
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">
                +2 desde el mes pasado
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{posts.length}</div>
              <p className="text-xs text-muted-foreground">
                +12 esta semana
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Usuarios Activos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground"/>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter(u => u.status === "active").length}
              </div>
              <p className="text-xs text-muted-foreground">
                85% del total
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="users">Gestión de Usuarios</TabsTrigger>
            <TabsTrigger value="posts">Gestión de Posts</TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Usuarios Registrados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (<div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-xs text-muted-foreground">{user.posts} posts publicados</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={user.status === "active" ? "default" : "secondary"}>
                          {user.status === "active" ? "Activo" : "Inactivo"}
                        </Badge>
                        <Button variant="destructive" size="sm" onClick={() => deleteUser(user.id)} className="flex items-center gap-1">
                          <Trash2 className="w-4 h-4"/>
                          Eliminar
                        </Button>
                      </div>
                    </div>))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="posts" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Posts Publicados</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {posts.map((post) => (<div key={post.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-semibold mb-1">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">Por {post.author}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{post.likes} likes</span>
                          <span>Hace {post.date}</span>
                        </div>
                      </div>
                      <Button variant="destructive" size="sm" onClick={() => deletePost(post.id)} className="flex items-center gap-1">
                        <Trash2 className="w-4 h-4"/>
                        Eliminar
                      </Button>
                    </div>))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>);
};
export default AdminConsole;
