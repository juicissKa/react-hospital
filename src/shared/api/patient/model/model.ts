import { Value } from "../../model";

export interface CreatePatientFormData {
  migration: {
    regions: Value[];
  };
  genders: Value[];
  nationalities: Value[];
  somatotypes: Value[];
}

export interface PatientShortInfo {
  id: number;
  name: string;
  ib: string;
  date_birth: string;
  gender: {
    id: number;
    value: string;
  };
}
