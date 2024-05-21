import React from "react";
import { PageWrapper } from "../../../../features";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { CreateArrivalForm } from "../../../../widgets/CreateArrivalForm";
import { useGetArrivalByIdQuery } from "../../../../shared/api/arrival/arrival";
import { useParams } from "react-router-dom";
import { convertDbTimeString } from "../../../../shared/utils/time";
import { Loader } from "../../../../shared/ui/Loader";

export const CreateVisitPage: React.FC = () => {
  const { arrivalId } = useParams();
  const { data, isLoading } = useGetArrivalByIdQuery(arrivalId as string);
  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Breadcrumbs
            links={[
              { title: "Поступления", url: "/arrivals" },
              {
                title: convertDbTimeString(data.date_arrive),
                url: `/arrivals/${arrivalId}`,
              },
              {
                title: "Создание посещения",
                url: `/arrivals/${arrivalId}/visits/create`,
              },
            ]}
          />
          <CreateArrivalForm isVisitForm={true} />
        </>
      )}
    </PageWrapper>
  );
};
