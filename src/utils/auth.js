import { auth } from "../firebase";

 export function subscribeToAuth(doOnUserStateChange) {
  return auth.onAuthStateChanged(doOnUserStateChange);
}

export const signOut =()=> auth.signOut();