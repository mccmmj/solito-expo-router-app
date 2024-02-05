import { initializeApp } from 'firebase/app';
import {
    initializeAuth,
    browserPopupRedirectResolver,
    browserLocalPersistence,
    signInAnonymously as signInAnonymouslyFirebase,
    onAuthStateChanged as onAuthStateChangedFirebase,
} from 'firebase/auth';

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

    auth = initializeAuth(firebaseApp, {
        popupRedirectResolver: browserPopupRedirectResolver,
        persistence: browserLocalPersistence,
    })
}

const getIsSignedIn = () => Boolean(auth?.currentUser);

const signOut = () => auth.signOut();

const signInAnonymously = async () => {
    const { user } = await signInAnonymouslyFirebase(auth);

    return user;
}

const onAuthStateChanged = (callback: any) => {
    return onAuthStateChangedFirebase(auth, callback);
}

const getCurrentUser = () => auth.currentUser;

export {
    getIsSignedIn,
    signInAnonymously,
    signOut,
    onAuthStateChanged,
    getCurrentUser,
}