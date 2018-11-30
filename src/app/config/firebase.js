import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCf4RAPN7hTdLakDKMh7xqk84Tjo5ITM8",
    authDomain: "foodbites-222503.firebaseapp.com",
    databaseURL: "https://foodbites-222503.firebaseio.com",
    projectId: "foodbites-222503",
    storageBucket: "foodbites-222503.appspot.com",
    messagingSenderId: "763080121058"

};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings ={ 
    timestampsInSnapshots : true 
}
firestore.settings(settings);
export default firebase;
