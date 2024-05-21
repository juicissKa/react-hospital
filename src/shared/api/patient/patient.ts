import queryString from "query-string";
import { PatientData } from "../../../widgets/CreatePatientForm/ui/CreatePatientForm";
import { commonApi } from "../commonApi";
import { CreatePatientFormData, PatientShortInfo } from "./model/model";
import { GetDefaultQueryParams } from "../model/types";

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
      invalidatesTags: ["Patient"],
    }),
    getPatients: builder.query<PatientShortInfo[], GetDefaultQueryParams>({
      query: (queryParams) => ({
        url: `${PATIENT_BASE_URL}?${queryString.stringify(queryParams)}`,
        method: "GET",
      }),
      providesTags: ["Patient"],
    }),
    getPatientById: builder.query<any, string>({
      query: (id) => ({
        url: `${PATIENT_BASE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Patient"],
    }),
    deletePatient: builder.mutation<any, number>({
      query: (id) => ({
        url: `${PATIENT_BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Patient"],
    }),
  }),
});

export const {
  useGetPatientCreateFormDataQuery,
  useCreatePatientMutation,
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useDeletePatientMutation,
} = patientService;
