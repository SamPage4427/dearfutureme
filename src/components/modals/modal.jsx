import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useModals } from "../../hooks/use-modal";

const Modal = ({ title, children }) => {
  let [isOpen, setIsOpen] = useState(true);

  const { closeModal } = useModals();

  function closeThisModal() {
    setIsOpen(false);
    setTimeout(() => {
      closeModal();
    }, 250);
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center w-[500px] h-[480px]">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeThisModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button
                    className="w-5 h-5 absolute top-5 right-5 z-50 focus-visible:outline-none"
                    type="button"
                    onClick={closeThisModal}
                  >
                    <CloseIcon className="hover:text-slate-400" />
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-tourneyReg leading-6 text-gray-900 text-center mt-4 mb-6"
                  >
                    {title}
                  </Dialog.Title>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
