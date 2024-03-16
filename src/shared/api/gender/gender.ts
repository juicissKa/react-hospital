import { commonApi } from "../commonApi";
import { Value } from "../model";

const GENDER_BASE_URL = "genders";

const genderService = commonApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllGenders: builder.query<Value[], void>({
      query: () => ({
        url: GENDER_BASE_URL,
      }),
    }),
  }),
});

export const { useGetAllGendersQuery } = genderService;
