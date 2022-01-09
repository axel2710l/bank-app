import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "./config";

//////////////FULL////////////////

export const getClients = async () => {
  const clients = [];
  const ClientRef = collection(db, "Clients");

  const result = await getDocs(ClientRef);
  result.docs.forEach((document) => {
    clients.push({ ...document.data(), id: document.id });
  });
  return clients;
};
export const getEmployes = () => {
  const employes = [];
  const employersRef = collection(db, "Employers");
  getDocs(employersRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      employes.push({ ...document.data(), id: document.id });
    });
  });

  return employes;
};
export const getHistorique = () => {
  const historique = [];
  const historiqueRef = collection(db, "Historique");
  getDocs(historiqueRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      historique.push({ ...document.data(), id: document.id });
    });
  });

  return historique;
};
export const getPrets = async () => {
  const Prets = [];
  const PretsRef = collection(db, "Prets");
  const pret = await getDocs(PretsRef);
  pret.docs.forEach((document) => {
    console.log(document);
    Prets.push({ ...document.data(), id: document.id });
  });

  return Prets;
};
export const getVirements = () => {
  const Virements = [];
  const VirementsRef = collection(db, "Virements");
  getDocs(VirementsRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      Virements.push({ ...document.data(), id: document.id });
    });
  });

  return Virements;
};

export const getVersements = () => {
  const Versements = [];
  const VersementsRef = collection(db, "Versements");
  getDocs(VersementsRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      Versements.push({ ...document.data(), id: document.id });
    });
  });

  return Versements;
};
export const getRetraits = () => {
  const Retraits = [];
  const RetraitsRef = collection(db, "Retraits");
  getDocs(RetraitsRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      Retraits.push({ ...document.data(), id: document.id });
    });
  });

  return Retraits;
};

////////////////With ID//////////////////

export const getClientWithId = async (myId) => {
  const clientRef = doc(db, "Clients", myId);
  const docSnap = await getDoc(clientRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getEmployerWithId = async (myId) => {
  const EmployerRef = doc(db, "Employers", myId);
  const docSnap = await getDoc(EmployerRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getVersementsWithId = async (myId) => {
  const VersementsRef = doc(db, "Versements", myId);
  const docSnap = await getDoc(VersementsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getVirementsWithId = async (myId) => {
  const VirementsRef = doc(db, "Virements", myId);
  const docSnap = await getDoc(VirementsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getRetraitsWithId = async (myId) => {
  const RetraitsRef = doc(db, "Retraits", myId);
  const docSnap = await getDoc(RetraitsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getPretsWithId = async (myId) => {
  const PretsRef = doc(db, "Prets", myId);
  const docSnap = await getDoc(PretsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getHistoriqueWithId = async (myId) => {
  const HistoriqueRef = doc(db, "Historique", myId);
  const docSnap = await getDoc(HistoriqueRef);
  return { ...docSnap.data(), id: docSnap.id };
};
