import { X } from "lucide-react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  isDismissable?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  onClose,
  isDismissable = true,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-screen flex items-center justify-center">
      {/* overlay */}
      <div
        onClick={() => {
          if (isDismissable) {
            onClose();
          }
        }}
        className="absolute inset-0 bg-black/50"
      ></div>

      {/* modal content */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg z-10">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-4">{title}</h2>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
