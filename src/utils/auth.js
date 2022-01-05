
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addClient, addEmploye } from "./addData";
import db from './config'

export const signup = async () => {


    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
          console.log(result);

        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        const userData = {
            email : user.email,
            nom : user.displayName,
            photo : user.photoURL,
            solde : '',
            statut : '',
            id : user.uid
        }
        user.displayName == 'Ghi pc' ? addEmploye({...userData,type : 'admin'}) : addClient(userData)
        /*     addClient({
          email: "athenagomez2000@gmail.com",
          dateNais: "1/1/1970",
          nom: "test",
          num_compte: 12,
          prenom: "test",
          solde: 3000,
          statut: "entreprise",
        });
        addVirement({
          montant: 2000,
          clientRec: "lFqxTSKl49OzaRBBp4MHA3H8VsX2",
          localisation: "Alger",
        }); */
        // ...
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

}
