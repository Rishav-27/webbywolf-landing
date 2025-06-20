import React from "react";

interface MobileNavProps {
  closeNav: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeNav }) => {
  return (
    <div>
      <div
        className="fixed inset-0 bg-black opacity-70 z-50"
        onClick={closeNav}
      />

      <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6">
        <button onClick={closeNav} className="text-xl font-bold mb-6">
          ×
        </button>
        <ul className="space-y-4">
          <li className="text-lg font-medium">Home</li>
          <li className="text-lg font-medium">Services</li>
          <li className="text-lg font-medium">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
