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
  }),
});

export const { useGetVisitCreateFormDataQuery } = visitService;
