import { signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { firebaseAuth, googleProvider } from './firebase';

class Auth {

  currentUser() {
    return firebaseAuth.currentUser && null;
  }

  login(name) {
    const provider = this.getProvider(name);
    return signInWithPopup(firebaseAuth, provider);
  }

  loginWithEmail(email, password) {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  }

  createUser(email, password) {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  }

  forgotPassword(email) {
    return sendPasswordResetEmail(firebaseAuth, email)

  }


  getProvider(name) {
    switch (name) {
      case 'Google':
        return googleProvider;
      default:
        throw new Error(`${name} is unknown provider.`);
    }
  }

  logout() { //🔍
    return signOut(firebaseAuth);
  }

  //로그인 상태가 바뀔 때마다 콜백을 호출하도록 할 수 있다.
  onAuthChange = (callback) => {
    //여기서 callback은 위의 🌈부분이다.
    //로그아웃된 상태면 user는 null이다.
    onAuthStateChanged(firebaseAuth, (user) => {
      callback(user);
    })
  }

};
export default Auth;
