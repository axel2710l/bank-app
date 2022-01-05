import { getAuth } from "firebase/auth";
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { getClientWithId } from "./getData";
import moment from 'moment'
import db from "./config";

export const addClient = (data) => {
  setDoc(doc(db, "Clients", data.id), data).then(() => {console.log("odne");});
};

export const addEmploye = (data) => {
  setDoc(doc(db, "Employers", data.id), data).then(() => {});
};

export const addPret = (data) => {
  const PretRef = collection(db, "Prets");
  const HistoriqueRef = collection(db, "Historique");
  const auth = getAuth();
  const user = auth.currentUser;
  let id = "anonyme";
  if (user !== null) {
    id = user.email;
  }
  const horaire = Timestamp.fromDate(new Date());
  addDoc(PretRef, { ...data, client: id, horaire }).then((res) => {
    const HistoriqueData = {
      action: "pret",
      horaire,
      idAction: res.id,
    };
    addDoc(HistoriqueRef, HistoriqueData).then(() => {});
  });
  return id;
};

export const addRetrait = (data) => {
  const RetraitRef = collection(db, "Retraits");
  const HistoriqueRef = collection(db, "Historique");
  const auth = getAuth();
  const user = auth.currentUser;
  let id = "anonyme";
  if (user !== null) {
    id = user.email;
  }
  const horaire = Timestamp.fromDate(new Date());
  addDoc(RetraitRef, { ...data, client: id, horaire }).then((res) => {
    const HistoriqueData = {
      action: "retrait",
      horaire,
      idAction: res.id,
    };
    addDoc(HistoriqueRef, HistoriqueData).then(() => {});
    getClientWithId(id).then((clientData) => {
      setDoc(doc(db, "Clients", id), {
        ...clientData,
        solde: clientData.solde - data.montant,
      }).then(() => {});
    });
  });
  return id;
};

export const addVersement = (data) => {
  const VersementRef = collection(db, "Versements");
  const HistoriqueRef = collection(db, "Historique");
  const auth = getAuth();
  const user = auth.currentUser;
  let id = "anonyme";
  if (user !== null) {
    id = user.email;
  }
  const horaire = Timestamp.fromDate(new Date());
  addDoc(VersementRef, { ...data, client: id, horaire }).then((res) => {
    const HistoriqueData = {
      action: "versement",
      horaire,
      idAction: res.id,
    };
    addDoc(HistoriqueRef, HistoriqueData).then(() => {});
    getClientWithId(id).then((clientData) => {
      setDoc(doc(db, "Clients", id), {
        ...clientData,
        solde: clientData.solde + data.montant,
      }).then(() => {});
    });
  });

  return id;
};

export const addVirement = (data) => {
  const VirementRef = collection(db, "Virements");
  const HistoriqueRef = collection(db, "Historique");
  const auth = getAuth();
  const user = auth.currentUser;
  let id = "anonyme";
  if (user !== null) {
    id = user.email;
  }
  const horaire = Timestamp.fromDate(new Date());
  addDoc(VirementRef, { ...data, clientEm: id, horaire }).then((res) => {
    const HistoriqueData = {
      action: "virement",
      horaire,
      idAction: res.id,
    };
    addDoc(HistoriqueRef, HistoriqueData).then(() => {});
    getClientWithId(data.clientRec).then((clientRecData) => {
      setDoc(doc(db, "Clients", data.clientRec), {
        ...clientRecData,
        solde: clientRecData.solde + data.montant,
      }).then(() => {});
    });
    getClientWithId(id).then((clientEmData) => {
      setDoc(doc(db, "Clients", id), {
        ...clientEmData,
        solde: clientEmData.solde - data.montant,
      }).then(() => {});
    });
  });
  return id;
};