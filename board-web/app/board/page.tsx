"use client";
import Cookie from "js-cookie";
import Nav from "@/app/board/component/Nav";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import BoardList from "./component/BoardList";
import Pagination from "./component/Pagination";
import BoardModal from "./component/BoardModal";
/* 파이어 베이스 사용 임포트 */
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import * as firebase from "../FirebaseConfig";
const app = initializeApp(firebase.default);
const database = getDatabase(app);
let people: any = [];
function getData(run: Function) {
  firebase
    .getAllPosts(database)
    .then((posts) => {
      console.log("All posts:", posts);
      people = posts;
    })
    .then(() => {
      run(people.length);
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
}
export default function Board() {
  const [count, setCount] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const router = useRouter();
  useEffect(() => {
    getData(setCount);
    let cookieValue = Cookie.get("userInfo");
    if (!cookieValue) {
      router.push("/");
      alert("로그인 정보가 만료되었습니다. 메인 화면으로 돌아갑니다.");
    }
  });
  return (
    <main
      className="flex flex-col items-center
    relative place-items-center before:absolute  before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white  before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 h-100% w-full vh-full"
    >
      <div className="flex flex-col  w-full vh-10 text-left box-size">
        <Nav />
        <BoardList people={people} />
        <BoardModal openModal={modal} setModal={closeModal} />
        <Pagination modalOn={openModal} />
      </div>
    </main>
  );
}
