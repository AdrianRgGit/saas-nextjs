import { Avatar } from "@nextui-org/react";
import React from "react";

const AvatarImage = () => {
  return (
    <div className="flex items-center gap-3">
      <Avatar
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        className="h-12 w-12"
      />
    </div>
  );
};

export default AvatarImage;
