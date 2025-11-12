import Modal from "@/components/ui/modal";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onLogout,
}: LogoutModalProps) => {
  return (
    <Modal title="Logout" isOpen={isOpen} onClose={onClose}>
      <div className="text-black">
        <div className="flex flex-col gap-y-4">
          <h3 className="font-semibold text-lg">
            Are you sure you want to logout?
          </h3>

          <div className="flex items-center gap-x-4">
            <button
              className="flex-1 bg-red-700 text-white rounded-full p-3 hover:opacity-75 transition cursor-pointer font-bold"
              onClick={onLogout}
            >
              Log Out
            </button>
            <button
              className="flex-1 bg-white border border-gray-300 rounded-full p-3 hover:opacity-75 transition cursor-pointer font-bold"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
