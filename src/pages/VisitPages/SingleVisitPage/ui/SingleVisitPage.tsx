import React from "react";
import { PageWrapper } from "../../../../features";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { useLocation, useParams } from "react-router-dom";
import { Loader } from "../../../../shared/ui/Loader";
import { useGetVisitByIdQuery } from "../../../../shared/api/visit/visit";
import { VisitBaseInfo } from "../../../../widgets/VisitBaseInfo";
import { VisitTabs } from "../../../../widgets/VisitTabs";
import { convertDbTimeString } from "../../../../shared/utils/time";

export const SingleVisitPage: React.FC = () => {
  const { id, arrivalId } = useParams();
  const location = useLocation();

  const { data, isLoading } = useGetVisitByIdQuery({
    arrivalId: arrivalId as string,
    id: id as string,
  });

  console.log(data);

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
                title: convertDbTimeString(data.arrival.date_arrive),
                url: `/arrivals/${arrivalId}`,
              },
              { title: "Посещения", url: `/arrivals/${arrivalId}/visits` },
              {
                title: convertDbTimeString(data.date_visit),
                url: `/arrivals/${arrivalId}/visits/${id}`,
              },
            ]}
          />
          <VisitBaseInfo data={data} />
          <VisitTabs data={data} />
        </>
      ) : (
        <></>
      )}
    </PageWrapper>
  );
};
