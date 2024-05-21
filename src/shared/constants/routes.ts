import { PatientsPage } from "../../pages/PatientPages/PatientsPage";
import { ArrivalsPage } from "../../pages/ArrivalPages/ArrivalsPage";

export enum NavigationTitles {
  Patients = "patients",
  Arrivals = "arrivals",
}

export interface Route {
  name: string;
  title: string;
  component: React.FC;
}

export const routes: Record<NavigationTitles, Route> = {
  [NavigationTitles.Patients]: {
    name: NavigationTitles.Patients,
    title: "Пациенты",
    component: PatientsPage,
  },
  [NavigationTitles.Arrivals]: {
    name: NavigationTitles.Arrivals,
    title: "Поступления",
    component: ArrivalsPage,
  },
};
