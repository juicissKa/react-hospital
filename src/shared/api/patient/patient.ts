import queryString from "query-string";
import { PatientData } from "../../../widgets/CreatePatientForm/ui/CreatePatientForm";
import { commonApi } from "../commonApi";
import {
  CreatePatientFormData,
  GetPatientsQueryParams,
  PatientShortInfo,
} from "./model/model";

const PATIENT_BASE_URL = "patients";

const patientService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getPatientCreateFormData: builder.query<CreatePatientFormData, void>({
      query: () => ({
        url: `${PATIENT_BASE_URL}/create-form-data`,
        method: "GET",
      }),
    }),
    createPatient: builder.mutation<any, PatientData>({
      query: (data) => ({
        url: `${PATIENT_BASE_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
    getPatients: builder.query<PatientShortInfo[], GetPatientsQueryParams>({
      query: (queryParams) => ({
        url: `${PATIENT_BASE_URL}?${queryString.stringify(queryParams)}`,
        method: "GET",
      }),
    }),
    getPatientById: builder.query<any, string>({
      query: (id) => ({
        url: `${PATIENT_BASE_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPatientCreateFormDataQuery,
  useCreatePatientMutation,
  useGetPatientsQuery,
  useGetPatientByIdQuery,
} = patientService;
