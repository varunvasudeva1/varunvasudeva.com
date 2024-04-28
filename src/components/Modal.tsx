import ReactDom from "react-dom";
import { MdClose } from "react-icons/md";

import React, { useEffect, useState } from "react";

type Props = {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

export default function Modal({ active, setActive, children }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => {
      setActive(false);
    }, 300);
  };

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  if (!active) return null;

  return ReactDom.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      data-visible={isVisible ? "true" : "false"}
      onClick={closeModal}
      className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center data-[visible=true]:opacity-100 data-[visible=true]:visible data-[visible=false]:opacity-0 data-[visible=false]:invisible transition-all duration-300 bg-gray-500/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full lg:w-4/5 2xl:w-2/3 group-data-[visible=true]:opacity-100 group-data-[visible=true]:visible group-data-[visible=false]:opacity-0 group-data-[visible=false]:invisible flex-col items-center justify-center rounded-base border-2 border-black bg-stone-200 p-4 pt-12 m-4 font-base shadow-base transition-all duration-300"
      >
        <button onClick={closeModal}>
          <MdClose className="absolute right-3 top-3 h-6 w-6" />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
}
