import queryString from "query-string";
import { commonApi } from "../commonApi";
import { VisitFormData } from "./model/model";

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
        url: `${VISIT_BASE_URL}/create`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetVisitCreateFormDataQuery, useCreateVisitMutation } =
  visitService;
