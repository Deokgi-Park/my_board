import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
/* 파이어 베이스 사용 임포트 */
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import * as firebase from "@/app/FirebaseConfig";

const app = initializeApp(firebase.default);
const database = getDatabase(app);
firebase.writeData;

export default function BoardModalcomment({ openModal, setModal }: any) {
  const [open, setOpen] = useState(true);

  if (!openModal) {
    setModal();
    return null;
  }
  function writeDB() {
    setModal();
  }
  return (
    <Transition show={open}>
      <Dialog className="relative z-10" onClose={setModal}>
        <TransitionChild
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-500 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <DialogTitle
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        <label htmlFor="">제목: </label>
                        <input
                          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                          name="title"
                          id="title"
                          type="text"
                        />
                      </DialogTitle>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          <textarea
                            className="resize-none border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            name="boardContent"
                            id="boardContent"
                            cols={40}
                            rows={10}
                          ></textarea>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-gray-0 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 sm:ml-3 sm:w-auto border-2"
                    onClick={() => setModal()}
                    data-autofocus
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 hover:bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300  sm:mt-0 sm:w-auto"
                    onClick={writeDB}
                  >
                    작성하기
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
