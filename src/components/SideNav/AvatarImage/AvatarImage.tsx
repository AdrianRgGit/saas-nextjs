import { useUserData } from "@/store/userStore";
import { Avatar } from "@nextui-org/react";
import React from "react";

const AvatarImage = () => {
  const avatar = useUserData((state) => state.avatar);
  return (
    <div className="flex items-center gap-3">
      <Avatar src={avatar} className="h-12 w-12" />
    </div>
  );
};

export default AvatarImage;
