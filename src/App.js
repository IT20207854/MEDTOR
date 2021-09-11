import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar";
import ManageStaff from './components/pages/manageStaff';
import AddStaff from './components/pages/addStaff';
import ViewStaff from './components/pages/viewStaff';
import EditStaff from './components/pages/editStaff';
import CalcSalary from './components/pages/calcSalary';
import ViewSalary from './components/pages/viewSalary';
import SearchStaff from './components/pages/seachStaff';
import SearchSalary from './components/pages/searchSalary';
import Dashboard from "./components/Dashboard";
import NavMain from "./components/layout/NavMain";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";

//Hashini
import AdmitPatient from "./components/pages/AdmitPatient";
import PatientList from "./components/pages/PatientList";
import EditPatient from "./components/pages/EditPatient";
import managePatient from "./components/PatientServices/managePatient";
import ChargeCalculate from "./components/pages/ChargeCalculate";
import ViewCharge from "./components/pages/viewCharge";

//Ishani
import AddChannel from './components/pages/AddChannel';
import EditChannel from './components/pages/EditChannel';
import manageChannel from './components/ChannelServices/manageChannel';
import ViewChannel from './components/pages/viewChannel';

//Bodhitha
import AddLab from "./components/pages/AddLab";
import EditLab from "./components/pages/EditLab";
import LabView from "./components/pages/LabView";
import manageLab from "./components/LabService/manageLab";
import calCost from "./components/pages/calCost";
import viewcalCost from "./components/pages/viewcalCost";

//Naveen
import ManagePharmacy from './components/PharmacyServices/managePharmacy';
import AddMadicine from "./components/pages/create";
import MadicineList from "./components/pages/madicine-list";
import EditPatientPharmacy from "./components/pages/editpatientPharm";
import AddPatientPharmacy from "./components/pages/create-patient";

//Venura
import RegisterVaccine from "./components/pages/registerVaccine";
import Tfee from "./components/pages/tfee";
import Editp from "./components/pages/editp";
import Viewp from "./components/pages/viewp";
import CovidManage from "./components/CovidManage/covidManage";
import ViewTfee from './components/pages/viewTfee';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <NavMain />

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <div>
              <Navbar />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route path='/manageStaff' component={ManageStaff} />
              <Route path='/addStaff' component={AddStaff} />
              <Route path='/viewStaff' component={ViewStaff} />
              <Route path='/searchStaff' component={SearchStaff} />
              <Route path='/searchSalary' component={SearchSalary} />
              <Route path='/calcSalary' component={CalcSalary} />
              <Route path='/viewSalary' component={ViewSalary} />
              <Route path='/editStaff/:id' component={EditStaff} />

              <Route path='/managePatient' component={managePatient} />
              <Route path="/admitPatient" component={AdmitPatient} />
              <Route path="/patientList" component={PatientList} />
              <Route path="/editPatient/:id" component={EditPatient} />
              <Route path="/chargeCalculate" component={ChargeCalculate} />
              <Route path='/viewCharge' component={ViewCharge} />

              <Route path="/addChannel" component={AddChannel} />
              <Route path="/editChannel/:id" component={EditChannel} />
              <Route path="/viewChannel" component={ViewChannel} />
              <Route path='/manageChannel' component={manageChannel} />

              <Route path="/addLab" component={AddLab} />
              <Route path="/labView" component={LabView} />
              <Route path="/editLab/:id" component={EditLab} />
              <Route path="/manageLab" component={manageLab} />
              <Route path="/calCost" component={calCost} />
              <Route path="/viewcalCost" component={viewcalCost} />

              <Route path='/managePharmacy' component={ManagePharmacy} />
              <Route path="/create" component={AddMadicine} />
              <Route path="/madicine-list" component={MadicineList} />
              <Route path="/editpatientPharm/:id" component={EditPatientPharmacy} />
              <Route path="/create-patient" component={AddPatientPharmacy} />

              <Route path="/registerVaccine" component={RegisterVaccine} />
              <Route path="/tfee" component={Tfee} />
              <Route path="/editp/:id" component={Editp} />
              <Route path="/viewp" component={Viewp} />
              <Route path="/covidManage" component={CovidManage} />
              <Route path="/viewTfee" component={ViewTfee} />
            </div>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;