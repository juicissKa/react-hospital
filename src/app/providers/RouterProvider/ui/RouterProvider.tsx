import React from "react";
import {
  RouterProvider as RouterProviderLib,
  createBrowserRouter,
} from "react-router-dom";
import App from "../../../App";
import { CreatePatient } from "../../../../pages/PatientPages/CreatePatient";
import { PatientsPage } from "../../../../pages/PatientPages/PatientsPage";
import { VisitsPage } from "../../../../pages/VisitPages/VisitsPage";
import { SinglePatientPage } from "../../../../pages/PatientPages/SinglePatientPage";
import { CreateVisitPage } from "../../../../pages/VisitPages/CreateVisitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/patients",
        element: <PatientsPage />,
      },
      {
        path: "/patients/create",
        element: <CreatePatient />,
      },
      {
        path: "/visits",
        element: <VisitsPage />,
      },
      {
        path: "/visits/create",
        element: <CreateVisitPage />,
      },
      {
        path: "/patients/:id",
        element: <SinglePatientPage />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <RouterProviderLib router={router} />;
};
