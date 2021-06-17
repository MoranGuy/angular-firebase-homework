const firebaseConfig = {
  apiKey: "AIzaSyBqIfls9g9d6RKtQP8DQ0nPYc96Bc4pWr4",
  authDomain: "angular-homework-firebase.firebaseapp.com",
  databaseURL:
    "https://angular-homework-firebase-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-homework-firebase",
  storageBucket: "angular-homework-firebase.appspot.com",
  messagingSenderId: "804878511289",
  appId: "1:804878511289:web:292e71bb7b6078827c7f68",
};
const albums = require("./albums.json");
const firebase = require("firebase");

require("firebase/firestore");
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

albums.forEach(function (obj) {
  db.collection("albums")
    .add({
      name: obj.name,
      band: obj.band,
      genre: obj.genre,
      label: obj.label,
      producer: obj.producer,
      releaseDate: new Date(obj.releaseDate),
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
