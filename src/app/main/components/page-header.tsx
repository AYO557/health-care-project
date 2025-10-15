import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router";

interface PageHeaderProps {
  showBackButton?: boolean;
  backNavigate?: string;
  desc?: string;
  title: string;
  rightComponent?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  showBackButton = false,
  backNavigate,
  desc,
  title,
  rightComponent,
}) => {
  const navigate = useNavigate();

  function handleBackButton() {
    if (backNavigate) {
      navigate(backNavigate);
      return;
    }
    navigate(-1);
  }

  return (
    <div className="flex justify-between items-end text-darkgreen h-[5%]">
      <div className="flex items-center xl:gap-4 sm:gap-2 gap-1">
        {showBackButton && (
          <ArrowLeft className="cursor-pointer" onClick={handleBackButton} />
        )}

        <div className="space-y-2">
          <h1 className="2xl:text-2xl xl:text-xl lg:text-lg font-bold">
            {title}
          </h1>
          {desc && <p className="text-sm italic text-darkgreen/70">{desc}</p>}
        </div>
      </div>

      {rightComponent && <div>{rightComponent}</div>}
    </div>
  );
};

export default PageHeader;
