import queryString from "query-string";
import { commonApi } from "../commonApi";

import { GetDefaultQueryParams } from "../model/types";
import { Arrival, GetArrivalsQueryParams } from "./model/model";

export const ARRIVAL_BASE_URL = "arrivals";

const arrivalService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getArrivals: builder.query<Arrival[], GetArrivalsQueryParams>({
      query: (queryParams) => ({
        url: `${ARRIVAL_BASE_URL}?${queryString.stringify(queryParams)}`,
        method: "GET",
      }),
      providesTags: ["Arrival"],
    }),
    createArrival: builder.mutation<any, any>({
      query: (data) => ({
        url: `${ARRIVAL_BASE_URL}/create`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Arrival", "Visit"],
    }),
    getArrivalById: builder.query<any, string>({
      query: (id) => ({
        url: `${ARRIVAL_BASE_URL}/${id}`,
        method: "GET",
      }),
      providesTags: ["Arrival", "Visit"],
    }),
    deleteArrival: builder.mutation<any, number>({
      query: (id) => ({
        url: `${ARRIVAL_BASE_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Arrival", "Visit"],
    }),
  }),
});

export const {
  useCreateArrivalMutation,
  useGetArrivalsQuery,
  useGetArrivalByIdQuery,
  useDeleteArrivalMutation,
} = arrivalService;
