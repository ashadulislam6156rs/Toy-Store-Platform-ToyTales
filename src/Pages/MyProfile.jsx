import React, { useContext, useEffect, useState } from "react";
import Container from "../Container/Container";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  useEffect(() => {
    if (user) {
      setDisplayName(user?.displayName || "");
      setPhotoURL(user?.photoURL || "");
    }
  }, [user]);

  const handleUpdateProfile = () => {
    updateProfile(user, { displayName, photoURL })
      .then(() => {
        setDisplayName(displayName);
        setPhotoURL(photoURL);

        setUser({
          ...user,
          displayName,
          photoURL,
        });
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="md:py-15">
      <title>My Profile</title>
      <Container>
        <div className=" mx-auto mt-4 md:mt-10 p-6 bg-white rounded-lg flex md:flex-row flex-col gap-10 items-center">
          <div className="flex flex-col items-center shadow p-3 rounded-lg">
            <img
              src={photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border-3 border-blue-500"
            />
            <h2 className="text-xl font-semibold text-blue-700">
              {displayName}
            </h2>
            <p className="text-[#258184] font-semibold">{user?.email}</p>
          </div>

          <div className="md:mt-6 space-y-4 max-w-lg p-5">
            <input
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Photo URL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
            <button
              onClick={handleUpdateProfile}
              className="w-full cursor-pointer bg-linear-to-r hover:bg-linear-to-l from-purple-600 to-pink-500 text-white py-2 rounded-md"
            >
              Update Profile
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyProfile;
