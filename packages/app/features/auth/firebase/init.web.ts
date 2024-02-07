// please note that firebase auth adds about 30kb to your bundle size on W
import { Platform } from 'react-native';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  initializeAuth,
  browserPopupRedirectResolver,
  browserLocalPersistence,
  signInAnonymously as signInAnonymouslyFirebase,
  onAuthStateChanged as onAuthStateChangedFirebase,
} from 'firebase/auth';
import { Firebase } from './types';

let auth: ReturnType<typeof initializeAuth>;

if ((typeof window) !== 'undefined') {
  const firebaseApp = initializeApp({
      apiKey: "AIzaSyBbWasnImygbk65-at-W3pGH-0fknm77FY",
      authDomain: "solito-expo-router-app.firebaseapp.com",
      projectId: "solito-expo-router-app",
      storageBucket: "solito-expo-router-app.appspot.com",
      messagingSenderId: "1001084598468",
      appId: "1:1001084598468:web:164584dda22a63007cb191"
  });

  if (Platform.OS == 'web' ) {
    console.log("init.web: Initializing auth for web")
    auth = initializeAuth(firebaseApp, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: browserLocalPersistence,
    });
  } else {
    console.log("init.web: Initializing auth for native")
    auth = getAuth(firebaseApp)
  }
}

const getIsSignedIn: Firebase['getIsSignedIn'] = () =>
  Boolean(auth?.currentUser);

const signOut: Firebase['signOut'] = () => auth.signOut();

const signInAnonymously: Firebase['signInAnonymously'] = async () => {
  console.log("signInAnonymously: auth=",auth);
  return (await signInAnonymouslyFirebase(auth)).user;
}

const onAuthStateChanged: Firebase['onAuthStateChanged'] = (callback) => {
  return onAuthStateChangedFirebase(auth, callback);
}

const getCurrentUser: Firebase['getCurrentUser'] = () => auth.currentUser;

export {
  getIsSignedIn,
  signInAnonymously,
  signOut,
  onAuthStateChanged,
  getCurrentUser,
}

