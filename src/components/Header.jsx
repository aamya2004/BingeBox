import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userSlice, { login, clearUser } from "../Store/slice";
import { db } from "../firebase-config";
import {
  collection,
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import Home from "../Home";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { selectUser } from "../Store/slice";

const Header = () => {
  const user = useSelector(selectUser);
  // const user = null;
  const dispatch = useDispatch();
  const usersReference = collection(db, "users");
  const handleSetUser = (decode) => {
    dispatch(login(decode));
  };

  const createUser = async () => {
    if (user) {
      const docRef = doc(usersReference, user.email);
      console.log(docRef);
      if (docRef) console.log("user already exists. Logged in");
      else {
        const userData = {
          Email: user.email,
          Name: user.name,
        };

        setDoc(docRef, userData)
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      }
    }
  };

  // const createUser = async () => {
  //   if (user) {
  //     try {
  //       const docRef = usersReference.doc(user.email);
  //       const docSnapshot = await getDoc(docRef);

  //       if (docSnapshot.exists()) {
  //         // Document with the custom ID already exists (old user)
  //         console.log("Old User: Document already exists");
  //         // You can handle this case accordingly, e.g., update the existing document
  //         // or display an error message to the user.
  //       } else {
  //         // Document with the custom ID doesn't exist (new user)
  //         console.log("New User: Creating a new document");
  //         await setDoc(docRef, { Email: user.email, Name: user.name });
  //       }
  //     } catch (error) {
  //       console.error("Error creating user:", error.message);
  //       // Handle the error appropriately, e.g., show an error message to the user.
  //     }
  //   }
  // };

  useEffect(() => {
    createUser();
  }, [user]);
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/",
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      path: "/Search",
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      path: "/WatchList",
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      path: "/Movies",
    },
    {
      name: "SERIES",
      icon: HiTv,
      path: "/Series",
    },
  ];

  return (
    <div className="flex items-center gap-8 p-5 justify-between w-[98vw] ">
      <div className="flex gap-8 items-center">
        <h1 className="text-white text-3xl font-bold">
          Binge<span className="text-xl text-amber-500 font-bold">Box</span>
        </h1>
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} path={item.path} />
          ))}
        </div>

        <div className="flex  md:hidden gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={" "} Icon={item.icon} />
          )}
        </div>

        <div className="flex  md:hidden " onClick={() => setToggle(!toggle)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div
              className="absolute mt-3 bg-[#121212]
          border-[1px] border-gray-700 p- px-5 py-4 "
            >
              {menu.map(
                (item, index) =>
                  index > 2 && <HeaderItem name={item.name} Icon={item.icon} />
              )}
            </div>
          ) : null}
        </div>
      </div>

      {user ? (
        <div className="flex gap-5 items-center">
          <h1 className="text-white">{user.name}</h1>
          <img
            className="rounded-3xl w-[40px] h-[40px] cursor-pointer"
            src={user.picture}
          ></img>
          <button
            onClick={() => {
              dispatch(clearUser());
            }}
            className="text-white bg-gray-800 p-3 rounded-md"
          >
            Logout
          </button>
          {/* <button onClick={createUser}>Add user</button> */}
        </div>
      ) : (
        <>
          <GoogleOAuthProvider clientId="625084352952-bqur65m8h5l7gk3tnfjm00ki1q3d4m0m.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                var decoded = jwt_decode(credentialResponse.credential);
                handleSetUser(decoded);
                console.log(decoded);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </>
      )}
    </div>
  );
};

export default Header;
