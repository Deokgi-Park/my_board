"use client";
import { useEffect, useState } from "react";
import "./InputUser.css";
import LoginButton from "./LoginButton";

export default function InputUser() {
  const [selected, setSelected] = useState<String>("Login");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [regiId, setRegiId] = useState("");
  const [regiPassword, setRegiPassword] = useState("");
  const [regiPasswordChk, setRegiPasswordChk] = useState("");
  const [regiEmail, setRegiEmail] = useState("");

  const handleLogin = () => {
    // 로그인 버튼 클릭 시 처리하는 로직
    console.log("Username:", userId);
    console.log("Password:", password);
  };

  const handleRegistration = () => {
    // 회원가입 버튼 클릭 시 처리하는 로직
    console.log("RegiId:", regiId);
    console.log("RegiPasswordChk:", regiPasswordChk);
    console.log("RegiEmail:", regiEmail);

    // 유효성 검사
    if (
      regiId !== "" &&
      regiPasswordChk !== "" &&
      regiEmail !== "" &&
      regiId !== undefined &&
      regiPasswordChk !== undefined &&
      regiEmail !== undefined
    ) {
      // 유효성 검사 통과 후 처리할 로직
      console.log("회원가입 유효성 검사 통과");
    } else {
      console.log("입력값이 유효하지 않습니다.");
    }
  };

  useEffect(() => {
    const element = document.getElementById("loginForm")!;
    const element2 = document.getElementById("regiForm")!;
    const element3 = document.getElementById("layerButton")!;
    if (selected == "Login") {
      element3.classList.add("opacity-0");
      element2.classList.remove("slidein");
      element2.classList.add("slideout");
      setTimeout(() => {
        element3.classList.remove("opacity-0");
        element2.classList.add("hidden");
        element.classList.remove("hidden");
        element.classList.remove("slideout");
        element.classList.add("slidein");
      }, 1500);
    } else if (selected == "Regi") {
      element.classList.remove("slidein");
      element.classList.add("slideout");
      element3.classList.add("opacity-0");
      setTimeout(() => {
        element.classList.add("hidden");
        element2.classList.remove("hidden");
        element2.classList.remove("slideout");
        element2.classList.add("slidein");
        element3.classList.remove("opacity-0");
      }, 1500);
    }
  }, [selected]);
  return (
    <form className="relative transition-all duration-300">
      <div
        className="sm:col-span-4 z-1000 login overflow-hidden hidden"
        id="loginForm"
      >
        <label
          htmlFor="userId"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          User_id
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="text"
              name="userId"
              id="userId"
              autoComplete="userId"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your username."
              value={userId}
              onChange={(e) => {
                setUserId(e.target.value);
              }}
            />
          </div>
        </div>
        <label
          htmlFor="password"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          Password
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="password"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your password."
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="sm:col-span-4 z-1000 login overflow-hidden hidden ml-100"
        id="regiForm"
      >
        <label
          htmlFor="regiId"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          regi_Id
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="text"
              name="regiId"
              id="regiId"
              autoComplete="regiId"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your regiId."
              value={regiId}
              onChange={(e) => {
                setRegiId(e.target.value);
              }}
            />
          </div>
        </div>
        <label
          htmlFor="regiPassword"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          regi_Password
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="password"
              name="regiPassword"
              id="regiPassword"
              autoComplete="regiPassword"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your regiPassword."
              value={regiPassword}
              onChange={(e) => {
                setRegiPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <label
          htmlFor="regiPasswordChk"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          regi_Password_Check
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="password"
              name="regiPasswordChk"
              id="regiPasswordChk"
              autoComplete="regiPasswordChk"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your regiPasswordChk."
              value={regiPasswordChk}
              onChange={(e) => {
                setRegiPasswordChk(e.target.value);
              }}
            />
          </div>
        </div>
        <label
          htmlFor="regiEmail"
          className="mt-5 block text-sm font-medium leading-6 text-yellow-400"
        >
          regi_Email
        </label>
        <div className="mt-2">
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
            <span className="flex select-none items-center pl-3 text-cyan-800 "></span>
            <input
              type="email"
              name="regiEmail"
              id="regiEmail"
              autoComplete="regiEmail"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 "
              placeholder="Please enter your regiEmail."
              value={regiEmail}
              onChange={(e) => {
                setRegiEmail(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <LoginButton
        onSelect={setSelected}
        id={userId}
        password={password}
        regiId={regiId}
        regiPassword={regiPassword}
        regiPasswordChk={regiPasswordChk}
        regiEmail={regiEmail}
      />
    </form>
  );
}
