"use client";
import EditProfie from "./EditProfie";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Profile = ({ data }: { data: any }) => {

  const [profile, setProfile] = useState({
    name: "N/A",
    contact: "N/A",
    address: "N/A",
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const logout = () => {
    localStorage.removeItem("user_data");
    location.reload();
  }

  useEffect(() => {
    // check if the user_data is available in the local storage
    if (!localStorage.getItem("user_data")) {
      window.location.href = "/login";
      return;
    }


    const User_Data = JSON.parse(localStorage.getItem("user_data") || "{}");
    if (User_Data.admin) {
      setProfile({
        name: "ADMIN",
        contact: "",
        address: "",
      });
      setIsAdmin(true);
    }
    else
      setProfile({
        name: data.name,
        contact: data.contact,
        address: data.address,
      });
  }, [data]);

  return (
    <div className="max-w-md mx-auto relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="relative">
        <img src="/img1.jpg" alt="Cover" className="w-full h-40 object-cover" />
        <img
          src="/logo.png"
          alt="Profile"
          className="w-28 h-28 ring-2 ring-[#008966] bg-white rounded-full border-4 object-cover border-white absolute top-28 left-4"
        />
      </div>
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          {profile.name}
        </h2>
        {/* <p className="text-gray-600">Software Engineer</p> */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-center gap-2">
            {
              isAdmin &&
              <>                
                <p className="mt-3">
                  You have the power to manage the users and their profiles.
                </p>
              </>
            }
            {!isAdmin &&
              <>
                <span className="text-gray-600 font-medium">Address:</span>
                <span className="text-gray-800">
                  {profile.address}
                </span></>
            }
          </div>
          {
            !isAdmin &&
            <div className="flex items-center justify-center gap-2">
              <span className="text-gray-600 font-medium">Contact:</span>
              <span className="text-gray-800">
                {profile.contact}
              </span>
            </div>
          }
          <div>
            {
              !isAdmin &&
              <>
                <EditProfie data={profile} />
                <br />
              </>
            }
            <Button variant="outline" className="mt-4" onClick={
              logout
            }>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
