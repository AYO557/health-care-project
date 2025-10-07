import React from "react";

interface AuthHeaderProps {
  title: string;
  desc: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title, desc }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-full xl:px-20">
      <h1 className="text-darkgreen text-2xl font-bold">{title}</h1>
      <p className="text-darkgreen text-sm">{desc}</p>
    </div>
  );
};

export default AuthHeader;
