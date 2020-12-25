import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDQwJnwDTRvjStE_QB5RdIBjNe3shjY31A",
    authDomain: "crwn-db-cb499.firebaseapp.com",
    projectId: "crwn-db-cb499",
    storageBucket: "crwn-db-cb499.appspot.com",
    messagingSenderId: "948763135654",
    appId: "1:948763135654:web:fa771ae62344a8ca78ae67",
    measurementId: "G-T62MHRKZ1Y"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try{
        
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef;
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;