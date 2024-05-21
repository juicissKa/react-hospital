import React from "react";
import { PageWrapper } from "../../../../features";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { ArrivalBaseInfo } from "../../../../widgets/ArrivalBaseInfo";
import { useLocation, useParams } from "react-router-dom";
import { useGetArrivalByIdQuery } from "../../../../shared/api/arrival/arrival";
import { Loader } from "../../../../shared/ui/Loader";
import { convertDbTimeString } from "../../../../shared/utils/time";

export const SingleArrivalPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();

  const { data, isLoading } = useGetArrivalByIdQuery(id as string);

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Breadcrumbs
            links={[
              { title: "Поступления", url: "/arrivals" },
              {
                title: convertDbTimeString(data.date_arrive),
                url: `/arrivals/${id}`,
              },
            ]}
          />
          <ArrivalBaseInfo data={data} />
        </>
      ) : (
        <></>
      )}
    </PageWrapper>
  );
};
