import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase-config';
import { useSelector } from 'react-redux';
import { selectUser } from '../Store/slice';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const WatchList = () => {
  const user = useSelector(selectUser);
  const [fav, setFav] = useState([]);
  const usersReference = collection(db, 'users');

  const getUsers = async () => {
    if (user) {
      const userDoc = doc(usersReference, user.email);
      try {
        const docSnapshot = await getDoc(userDoc);
        if (docSnapshot.exists()) {
          const userData = docSnapshot.data();
          if (userData && userData.Fav) {
            console.log('Fav array from Firestore:', userData.Fav);
            setFav(userData.Fav);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, [user]);

  console.log('Current fav state:', fav);

  return (
    <>
      <Header />
      <div className='flex gap-20 p-5'>
      {fav && fav.length > 0 ? (
        fav.map((item) => (
            <img  className="w-[180px] h-[250px] object-cover rounded-lg" src={IMAGE_BASE_URL+item.poster_path}></img>
            ))
            ) : (
              <p>No favorites found.</p>
              )}
    </div>
    </>
  );
};

export default WatchList;
