import { getAuth } from "firebase/auth";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getClientWithId } from "./getData";
import moment from "moment";
import db from "./config";

export const addClient = (data) => {
  const id = data.id;
  delete data.id;
  setDoc(doc(db, "Clients", id), data).then(() => {});
};

export const addEmploye = (data) => {
  const id = data.id;
  delete data.id;
  setDoc(doc(db, "Employers", id), data).then(() => {});
};

export const addPret = async (data) => {
  const PretRef = collection(db, "Prets");
  const HistoriqueRef = collection(db, "Historique");

  const horaire = Timestamp.fromDate(new Date());
  const pret = await addDoc(PretRef, { ...data, confirme: false, horaire });
  const HistoriqueData = {
    action: "pret",
    horaire,
    idAction: pret.id,
  };
  await addDoc(HistoriqueRef, HistoriqueData);
};

export const addRetrait = async (data) => {
  const RetraitRef = collection(db, "Retraits");
  const HistoriqueRef = collection(db, "Historique");

  const horaire = Timestamp.fromDate(new Date());
  const retrait = await addDoc(RetraitRef, {
    ...data,
    horaire,
  });
  const HistoriqueData = {
    action: "retrait",
    horaire,
    idAction: retrait.id,
  };
  await addDoc(HistoriqueRef, HistoriqueData);
  await setDoc(
    doc(db, "Clients", data.client),
    { soldeEx:data.clientExSolde ,solde: data.clientExSolde - data.montant },
    { merge: true }
  );
  alert("Retrait avec succes");
};
export const addVersement = async (data) => {
  const VersementRef = collection(db, "Versements");
  const HistoriqueRef = collection(db, "Historique");

  const horaire = Timestamp.fromDate(new Date());
  const Versement = await addDoc(VersementRef, {
    ...data,
    horaire,
  });
  const HistoriqueData = {
    action: "versement",
    horaire,
    idAction: Versement.id,
  };
  await addDoc(HistoriqueRef, HistoriqueData);
  await setDoc(
    doc(db, "Clients", data.client),
    {  soldeEx:data.clientExSolde, solde: data.clientExSolde + data.montant },
    { merge: true }
  );
  alert("Versement avec succes");
};
export const addVirement = async (data) => {
  const VirementRef = collection(db, "Virements");
  const HistoriqueRef = collection(db, "Historique");

  const horaire = Timestamp.fromDate(new Date());
  const Virement = await addDoc(VirementRef, {
    ...data,
    horaire,
  });
  const HistoriqueData = {
    action: "Virement",
    horaire,
    idAction: Virement.id,
  };
  await addDoc(HistoriqueRef, HistoriqueData);
  await setDoc(
    doc(db, "Clients", data.clientEm),
    { soldeEx:data.clientEmExSolde, solde: data.clientEmExSolde - data.montant },
    { merge: true }
  );
  await setDoc(
    doc(db, "Clients", data.clientRec),
    { soldeEx : data.clientRecExSolde, solde: data.clientRecExSolde + data.montant },
    { merge: true }
  );
  alert("Virement avec succes");
};

// export const addVersement = (data) => {
//   const VersementRef = collection(db, "Versements");
//   const HistoriqueRef = collection(db, "Historique");
//   const auth = getAuth();
//   const user = auth.currentUser;
//   let id = "anonyme";
//   if (user !== null) {
//     id = user.email;
//   }
//   const horaire = Timestamp.fromDate(new Date());
//   addDoc(VersementRef, { ...data, client: id, horaire }).then((res) => {
//     const HistoriqueData = {
//       action: "versement",
//       horaire,
//       idAction: res.id,
//     };
//     addDoc(HistoriqueRef, HistoriqueData).then(() => {});
//     getClientWithId(id).then((clientData) => {
//       setDoc(doc(db, "Clients", id), {
//         ...clientData,
//         solde: clientData.solde + data.montant,
//       }).then(() => {});
//     });
//   });

//   return id;
// };

export const updateClient = async (id, data) => {
  const clientRef = doc(db, "Clients", id);
  await setDoc(clientRef, data, { merge: true });
};
export const updatePret = async (id, data) => {
  const PretRef = doc(db, "Prets", id);
  const pretUpdate = await setDoc(PretRef, data, { merge: true });
  alert("Pret approuvé avec succes");
};
