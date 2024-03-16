import { commonApi } from "../commonApi";
import { Value } from "../model";

const EDUCATION_BASE_URL = "education";

const familyHistorySpeciesService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllEducation: builder.query<Value[], void>({
      query: () => ({
        url: EDUCATION_BASE_URL,
      }),
    }),
  }),
});

export const { useGetAllEducationQuery } = familyHistorySpeciesService;
