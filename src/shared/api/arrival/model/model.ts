import { GetDefaultQueryParams } from "../../model/types";

export interface Arrival {
  id: number;
  date_arrive: string;
  date_leave: string;
  patient: {
    id: number;
    name: string;
  };
}

export interface GetArrivalsQueryParams extends GetDefaultQueryParams {
  patientId?: number;
}
