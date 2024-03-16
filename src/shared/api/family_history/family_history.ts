import { commonApi } from "../commonApi";
import { Value } from "../model";

const FAMILY_HISTORIES_BASE_URL = "family-histories";

const familyHistorySpeciesService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFamilyHistories: builder.query<Value[], void>({
      query: () => ({
        url: FAMILY_HISTORIES_BASE_URL,
      }),
    }),
  }),
});

export const { useGetAllFamilyHistoriesQuery } = familyHistorySpeciesService;
