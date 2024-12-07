"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./profile/Profile";
import UserDashboard from "../(dashboard)/user-dashboard/UserDashboard";
import AdminDashboard from "../(dashboard)/admin-dashboard/AdminDashboard";
import axios from "axios";
import { useState, useEffect } from "react";


const Page = () => {
  const [userData, setUserData] = useState<any>({
    name: "N/A",
    address: "N/A",
    contact: "N/A",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const User_Data = JSON.parse(localStorage.getItem("user_data") || "{}");
    setIsAdmin(User_Data.admin);

    if (!User_Data.access_token) {
      location.href = "/login";
    } else {
      if (!User_Data.is_admin) {
        try {

          axios.get(
            `${process.env.NEXT_PUBLIC_ROOT_URL}/users/profile/`,
            {
              headers: {
                Authorization: `Bearer ${User_Data.access_token}`,
              },
            }
          ).then((res) => {
            setUserData(res.data);
            console.log(res.data);
          });
        } catch (error: any) {
          console.log(error);
        }
      }
      else {
        setUserData({
          name: "ADMIN",
          address: "",
          contact: "",
        });
      }
    }
    setIsLoading(false);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {
        !isLoading &&
        < Tabs defaultValue="profile">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="Dashboard">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Profile data={userData} />
          </TabsContent>
          <TabsContent value="Dashboard">
            {isAdmin ? <AdminDashboard /> : <UserDashboard />}
          </TabsContent>
        </Tabs>
      }
    </div>
  );
};

export default Page;