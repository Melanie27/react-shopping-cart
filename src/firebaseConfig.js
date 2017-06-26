import firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCn5H-7jfDeT1ycx1435Wv4KqhDp4TwaL8",
    authDomain: "myshop-70a52.firebaseapp.com",
    databaseURL: "https://myshop-70a52.firebaseio.com",
    projectId: "myshop-70a52",
    storageBucket: "myshop-70a52.appspot.com",
    messagingSenderId: "22245092217"
};
firebase.initializeApp(config);
const firebaseDB = firebase.database();

export default firebaseDB;