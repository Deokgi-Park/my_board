import {
  getDatabase,
  ref,
  set,
  update,
  push,
  child,
  get,
} from "firebase/database";
import Cookie from "js-cookie";

const FirebaseConfig = {
  apiKey: "AIzaSyDenh9WVjxr1GlrtTTjxCYNzsEIWuj5cWk",
  authDomain: "myboard-b0860.firebaseapp.com",
  databaseURL: "https://myboard-b0860-default-rtdb.firebaseio.com",
  projectId: "myboard-b0860",
  storageBucket: "myboard-b0860.appspot.com",
  messagingSenderId: "178781118548",
  appId: "1:178781118548:web:16a86532a45eceb1a94dc1",
  measurementId: "G-6V8F7198TC",
};

export default FirebaseConfig;

export function writeData(userId, password, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    userId: userId,
    password: password,
    email: email,
    profile_picture: imageUrl,
    createdAt: new Date().toISOString(),
  });
}
export function writeBoardData(db, title, content, userId, imageUrl, email) {
  console.log(title, content, userId, imageUrl);

  // 현재 최대 ID를 찾고, 새로운 ID를 생성하여 데이터 추가
  const postsRef = ref(db, "posts");

  get(postsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const posts = snapshot.val();
        const ids = Object.keys(posts).map((key) => Number(key));
        const maxId = Math.max(...ids);
        const newId = maxId + 1;

        set(ref(db, `posts/${newId}`), {
          userId: userId,
          title: title,
          content: content,
          createdAt: new Date().toISOString(),
          profile_picture: imageUrl,
          email: email,
        }).catch((error) => {
          console.error("Error writing to Firebase Database:", error);
        });

        console.log("New post added with ID:", newId);
      } else {
        // 처음 데이터를 추가할 때
        set(ref(db, "posts/1"), {
          userId: userId,
          title: title,
          content: content,
          createdAt: new Date().toISOString(),
          profile_picture: imageUrl,
          email: email,
        }).catch((error) => {
          console.error("Error writing to Firebase Database:", error);
        });
      }
    })
    .catch((error) => {
      console.error("Error reading from Firebase Database:", error);
    });
}

export function readRegiData(where, id) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${where}/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return true;
      } else {
        return undefined;
      }
    })
    .catch((error) => {
      alert("ERROR");
      window.location.reload();
    });
}

export function readLoginData(where, id, password) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${where}/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        if (snapshot.val()["password"] == password) {
          alert("로그인 성공");
          let snapshotData = snapshot.val();
          let cookieValue = JSON.stringify(snapshotData);
          const expirationTime = 3 / 24;
          Cookie.set("userInfo", cookieValue, {
            expires: expirationTime,
            path: "/",
          });
          window.location = "/board";
          return true;
        } else {
          alert("로그인 실패: 비밀번호를 확인 바랍니다.");
          return undefined;
        }
      } else {
        alert("로그인 실패: 해당되는 정보가 없습니다.");
        return undefined;
      }
    })
    .catch((error) => {
      alert("ERROR");
      window.location.reload();
    });
}

export function readData(where, id) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `${where}/${id}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot;
      }
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });
}

export function updateData(uid, username, picture, title, body) {
  const db = getDatabase();

  // A post entry.
  const postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture,
  };

  // Get a key for a new Post.
  const newPostKey = push(child(ref(db), "posts")).key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates["/posts/" + newPostKey] = postData;
  updates["/user-posts/" + uid + "/" + newPostKey] = postData;

  return update(ref(db), updates);
}

export function removeData(uid, username, picture, title, body) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: null,
    email: null,
    profile_picture: null,
  })
    .then(() => {
      // Data saved successfully!
    })
    .catch((error) => {
      // The write failed...
    });
}

export const getAllPosts = async (db) => {
  try {
    const postsRef = ref(db, "posts");
    const snapshot = await get(postsRef); // 데이터 스냅샷 가져오기

    if (!snapshot.exists()) {
      console.log("No data available");
      return [];
    }

    // 데이터를 JSON 배열로 변환
    const posts = Object.entries(snapshot.val()).map(([key, value]) => ({
      id: key,
      ...value,
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
