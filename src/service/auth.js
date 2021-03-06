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

  logout() { //๐
    return signOut(firebaseAuth);
  }

  //๋ก๊ทธ์ธ ์ํ๊ฐ ๋ฐ๋ ๋๋ง๋ค ์ฝ๋ฐฑ์ ํธ์ถํ๋๋ก ํ  ์ ์๋ค.
  onAuthChange = (callback) => {
    //์ฌ๊ธฐ์ callback์ ์์ ๐๋ถ๋ถ์ด๋ค.
    //๋ก๊ทธ์์๋ ์ํ๋ฉด user๋ null์ด๋ค.
    onAuthStateChanged(firebaseAuth, (user) => {
      callback(user);
    })
  }

};
export default Auth;
