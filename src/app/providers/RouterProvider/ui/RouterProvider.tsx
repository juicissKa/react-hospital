import React from "react";
import {
  RouterProvider as RouterProviderLib,
  createBrowserRouter,
} from "react-router-dom";
import App from "../../../App";
import { CreatePatient } from "../../../../pages/PatientPages/CreatePatient";
import { PatientsPage } from "../../../../pages/PatientPages/PatientsPage";
import { ArrivalsPage } from "../../../../pages/ArrivalPages/ArrivalsPage";
import { SinglePatientPage } from "../../../../pages/PatientPages/SinglePatientPage";
import { CreateArrivalPage } from "../../../../pages/ArrivalPages/CreateArrivalPage";
import { SingleArrivalPage } from "../../../../pages/ArrivalPages/SingleArrivalPage";
import { SingleVisitPage } from "../../../../pages/VisitPages/SingleVisitPage";
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
        path: "/arrivals",
        element: <ArrivalsPage />,
      },
      {
        path: "/arrivals/create",
        element: <CreateArrivalPage />,
      },
      {
        path: "/patients/:id",
        element: <SinglePatientPage />,
      },
      {
        path: "/arrivals/:id",
        element: <SingleArrivalPage />,
      },
      {
        path: "/arrivals/:arrivalId/visits/:id",
        element: <SingleVisitPage />,
      },
      {
        path: "/arrivals/:arrivalId/visits/create",
        element: <CreateVisitPage />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <RouterProviderLib router={router} />;
};
