import { useState } from "react";
import { useGetIdentity } from "react-admin";
import { PassWordForm } from "./PassWordForm";

export const Profile = () => {
  const data = useGetIdentity();
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const handleClick = () => {};
  // const handleAction = (childData: any) => {
  //   setAction(childData);
  //   return childData;
  // };
  const handleOpen = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h2>🐷 My Profile</h2>
      <span>
        {data && <p style={{ color: "green" }}>Email: {data.data?.fullName}</p>}
      </span>
      <button onClick={handleOpen}> 🍃Change Password🍃</button>
      {isModalOpen && <PassWordForm onClose={handleCloseModal} />}
    </>
  );
};
