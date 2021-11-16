import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import Navigation from '../components/Navbar';
import Router from '../routes';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userObj = {
          uid: authed.uid,
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          username: authed.email.split('@')[0],
          isAdmin: authed.uid === 'mOjAp1n9OfXc99eBOZk3znU8ha72',
        };
        setUser(userObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div>
      <Navigation user={user} />
      <Router user={user} />
    </div>
  );
}

export default Initialize;
