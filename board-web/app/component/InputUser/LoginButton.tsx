"use client";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import FirebaseConfig, {
  writeData,
  readRegiData,
  readLoginData,
} from "@/app/FirebaseConfig";
import {
  getRandomNumber,
  getPokemonFrontImage,
} from "@/app/component/poketmonImage/PoketmonImage";

const app = initializeApp(FirebaseConfig);

const database = getDatabase(app);

interface LoginButtonProps {
  onSelect: Function;
  id: string | null;
  password: string | null | void;
  regiId: string | null;
  regiPassword: string | null | void;
  regiPasswordChk: string | null | void;
  regiEmail: string | null;
}

export default function LoginButton({
  onSelect,
  id,
  password,
  regiId,
  regiPassword,
  regiPasswordChk,
  regiEmail,
}: LoginButtonProps) {
  const [kind, setKind] = useState<String>("Login");
  let Button1 = "로그인";
  let Button2 = "회원가입";

  function moveLogin() {
    if (kind == "Login" && readLoginData("users", id, password) != undefined) {
      alert("로그인에 실패했습니다. \n기입하신 정보를 확인 바랍니다.");
      return;
    }
    onSelect("Login");
    setTimeout(() => {
      setKind("Login");
    }, 500);
  }

  function moveRegi() {
    if (readRegiData("users", regiId) != undefined && kind == "Regi") {
      alert("ID를 미기입 했거나 중복된 ID 입니다. \nID를 수정 바랍니다.");
      return;
    }
    onSelect("Regi");
    setTimeout(() => {
      setKind("Regi");
    }, 500);

    if (
      regiId != undefined &&
      regiPasswordChk != undefined &&
      regiEmail != undefined &&
      regiId != "" &&
      regiPasswordChk != "" &&
      regiEmail != "" &&
      kind == "Regi"
    ) {
      if (regiPassword == regiPasswordChk) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(regiEmail)) {
          alert("이메일 규격이 올바르지 않습니다.");
          return;
        }
        getPokemonFrontImage(getRandomNumber(896))
          .then((url) => {
            writeData(regiId, regiPasswordChk, regiEmail, url);
          })
          .catch(() => {
            alert("에러 발생");
          })
          .finally(() => {
            console.log(regiId, regiPasswordChk, regiEmail);
            regiId = "";
            regiPassword = "";
            regiPasswordChk = "";
            regiEmail = "";
            alert("가입 완료, 가입한 아이디로 로그인 바랍니다.");
            moveLogin();
            //window.location.reload();
          });
      } else {
        alert("비밀번호 체크가 올바르지 않습니다. 같은 지 확인 바랍니다.");
      }
    } else if (kind == "Regi") {
      console.log(regiId, regiPasswordChk, regiEmail);
      alert("입력되지 않은 정보가 있습니다. \n다시 확인 바랍니다.");
    }
  }

  if (kind == "Regi") {
    Button1 = "이전";
    Button2 = "등록";
  } else {
    Button1 = "로그인";
    Button2 = "회원가입";
  }

  return (
    <div
      className="mt-6 flex items-center justify-end gap-x-6 transition-all duration-500 opacity-0"
      id="layerButton"
    >
      <button
        type="button"
        className="rounded-md bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={moveLogin}
      >
        {Button1}
      </button>
      <button
        type="button"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={moveRegi}
      >
        {Button2}
      </button>
    </div>
  );
}
