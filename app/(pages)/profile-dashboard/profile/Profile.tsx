import EditProfie from "./EditProfie";

const Profile = ({ data }: { data: any }) => {



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
          {data.name}
        </h2>
        {/* <p className="text-gray-600">Software Engineer</p> */}
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-600 font-medium">Address:</span>
            <span className="text-gray-800">
              {data.address}
            </span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-gray-600 font-medium">Contact:</span>
            <span className="text-gray-800">
              {data.contact}
            </span>
          </div>
          <div>
            <EditProfie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
