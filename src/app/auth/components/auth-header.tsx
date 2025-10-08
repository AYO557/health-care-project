import { ArrowLeftCircle } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

interface AuthHeaderProps {
  title: string;
  desc: string;
  showBack?: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  desc,
  showBack = false,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-10 items-center h-full xl:px-20 py-10">
      {showBack && (
        <ArrowLeftCircle
          size={30}
          className="cursor-pointer"
          onClick={() => navigate(-1)}
        />
      )}
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="text-darkgreen text-2xl font-bold">{title}</h1>
        <p className="text-darkgreen text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default AuthHeader;
