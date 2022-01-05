import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import db from "./config";

//////////////FULL////////////////

export const getClients = () => {
  const clients = [];
  const ClientRef = collection(db, "Clients");
  getDocs(ClientRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      clients.push({ ...document.data(), id: document.id });
    });
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
export const getPrets = () => {
  const Prets = [];
  const PretsRef = collection(db, "Prets");
  getDocs(PretsRef).then((snapshot) => {
    snapshot.docs.forEach((document) => {
      Prets.push({ ...document.data(), id: document.id });
    });
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

export const getClientWithId = async (id) => {
  const clientRef = doc(db, "Clients", id);
  const docSnap = await getDoc(clientRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getEmployerWithId = async (id) => {
  const EmployerRef = doc(db, "Employers", id);
  const docSnap = await getDoc(EmployerRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getVersementsWithId = async (id) => {
  const VersementsRef = doc(db, "Versements", id);
  const docSnap = await getDoc(VersementsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getVirementsWithId = async (id) => {
  const VirementsRef = doc(db, "Virements", id);
  const docSnap = await getDoc(VirementsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getRetraitsWithId = async (id) => {
  const RetraitsRef = doc(db, "Retraits", id);
  const docSnap = await getDoc(RetraitsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getPretsWithId = async (id) => {
  const PretsRef = doc(db, "Prets", id);
  const docSnap = await getDoc(PretsRef);
  return { ...docSnap.data(), id: docSnap.id };
};
export const getHistoriqueWithId = async (id) => {
  const HistoriqueRef = doc(db, "Historique", id);
  const docSnap = await getDoc(HistoriqueRef);
  return { ...docSnap.data(), id: docSnap.id };
};
