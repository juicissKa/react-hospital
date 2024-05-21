import queryString from "query-string";
import { commonApi } from "../commonApi";
import {
  GetVisitsQueryParams,
  VisitFormData,
  VisitShortInfo,
} from "./model/model";
import { ARRIVAL_BASE_URL } from "../arrival/arrival";

const VISIT_BASE_URL = "visits";

const visitService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getVisitCreateFormData: builder.query<VisitFormData, void>({
      query: () => ({
        url: `${VISIT_BASE_URL}/create-form-data`,
        method: "GET",
      }),
    }),
    createVisit: builder.mutation<any, any>({
      query: (data) => ({
        url: `arrivals/${data.arrival_id}/${VISIT_BASE_URL}/create`,
        method: "POST",
        body: data.visit,
      }),
    }),
    getVisits: builder.query<VisitShortInfo[], GetVisitsQueryParams>({
      query: ({ id }) => ({
        url: `${ARRIVAL_BASE_URL}/${id}/${VISIT_BASE_URL}`,
        method: "GET",
      }),
      providesTags: ["Visit"],
    }),
    getVisitById: builder.query<any, { arrivalId: string; id: string }>({
      query: ({ arrivalId, id }) => ({
        url: `${ARRIVAL_BASE_URL}/${arrivalId}/${VISIT_BASE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Visit"],
    }),
    deleteVisit: builder.mutation<any, number>({
      query: (id) => ({
        url: `${VISIT_BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Visit"],
    }),
  }),
});

export const {
  useGetVisitCreateFormDataQuery,
  useCreateVisitMutation,
  useGetVisitByIdQuery,
  useDeleteVisitMutation,
  useGetVisitsQuery,
} = visitService;
