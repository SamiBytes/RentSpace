import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./profile/Profile";
import UserDashboard from "../(dashboard)/user-dashboard/UserDashboard";
import AdminDashboard from "../(dashboard)/admin-dashboard/AdminDashboard";

export default () => {
  const isAdmin = false;
  return (
    <div className="container mx-auto p-4">
      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Profile />
        </TabsContent>
        <TabsContent value="Dashboard">
          {isAdmin ? <AdminDashboard /> : <UserDashboard />}
        </TabsContent>
      </Tabs>
    </div>
  );
};
