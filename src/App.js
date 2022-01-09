import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion";
import AjoutSolde from "./Pages/AjoutSolde";
import ProfilClient from "./Pages/ProfilClient";
import DepotRetrait from "./Pages/DepotRetrait";
import Transfert from "./Pages/Transfert";
import ConfirmTransfert from "./Pages/ConfirmTransfert";
import DemandePret from "./Pages/DemandePret";
import HistoriqueClient from "./Pages/HistoriqueClient";
import ProfilAdmin from "./Pages/ProfilAdmin";
import HistoriqueAdmin from "./Pages/HistoriqueAdmin";
import PretAdmin from "./Pages/PretAdmin";
import ListeClientsAdmin from "./Pages/ListeClientsAdmin";
import Error404 from "./Pages/Error404";
import { AuthProvider } from "./context/authContex";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/sign-up" exact component={Inscription} />
          <Route path="/sign-in" exact component={Connexion} />
          <Route path="/Solde" exact component={AjoutSolde} />
          <Route path="/Profil" exact component={ProfilClient} />
          <Route path="/User/DepotRetrait" exact component={DepotRetrait} />
          <Route path="/User/Transfert" exact component={Transfert} />
          <Route
            path="/User/Transfert/Confirm"
            exact
            component={ConfirmTransfert}
          />
          <Route path="/User/DemandePret" exact component={DemandePret} />
          <Route path="/User/Historique" exact component={HistoriqueClient} />
          <Route path="/ProfilAdmin" exact component={ProfilAdmin} />
          <Route path="/Admin/Historique" exact component={HistoriqueAdmin} />
          <Route path="/Admin/Pret" exact component={PretAdmin} />
          <Route
            path="/Admin/ListeClients"
            exact
            component={ListeClientsAdmin}
          />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
