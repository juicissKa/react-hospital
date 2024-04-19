import { PatientsPage } from "../../pages/PatientPages/PatientsPage";
import { VisitsPage } from "../../pages/VisitPages/VisitsPage";

export enum NavigationTitles {
  Patients = "patients",
  Visits = "visits",
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
  [NavigationTitles.Visits]: {
    name: NavigationTitles.Visits,
    title: "Визиты",
    component: VisitsPage,
  },
};
