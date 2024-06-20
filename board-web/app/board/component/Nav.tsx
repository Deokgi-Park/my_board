"use client";
import { useState } from "react";
import logo from "@/app/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Nav() {
  let route = useRouter();
  function removecookie() {
    Cookies.remove("userInfo", { path: "/" });
    route.push("/");
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full box-size noto-sans-kr">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex flex-1">
          <Image className="w-40 object-cover" src={logo} alt="" />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/board"
            className="text-sm font-semibold leading-6 text-white"
          >
            게시판
          </Link>
          <Link
            href="/myinfo"
            className="text-sm font-semibold leading-6 text-white"
          >
            내 정보
          </Link>
          <Link
            href="/myboard"
            className="text-sm font-semibold leading-6 text-white"
          >
            내 글 보기
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end mr-10">
          <Link
            onClick={removecookie}
            href="/"
            className="text-sm font-semibold leading-6 text-white"
          >
            Log out
            <svg
              className="fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
            </svg>
          </Link>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Image
              className="w-aut"
              src={logo}
              alt=""
              onClick={() => setMobileMenuOpen(false)}
            />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/board"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  게시판
                </Link>
                <Link
                  href="/myinfo"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  내 정보
                </Link>
                <Link
                  href="/myboard"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  내 글 보기
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="/"
                  onClick={removecookie}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log out
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
