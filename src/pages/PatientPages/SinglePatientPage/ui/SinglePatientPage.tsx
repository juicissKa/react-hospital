import React from "react";
import { useGetPatientByIdQuery } from "../../../../shared/api/patient/patient";
import { PageWrapper } from "../../../../features/PageWrapper";
import { useLocation, useParams } from "react-router-dom";
import { Breadcrumbs } from "../../../../shared/ui/Breadcrumbs";
import { getBreadcrumbsLinks } from "../../../../shared/utils/paths";
import { convertDbTimeString } from "../../../../shared/utils/time";
import { PatientBaseInfo } from "../../../../widgets/PatientBaseInfo";
import { PatientTabs } from "../../../../widgets/PatientTabs";
import { Loader } from "../../../../shared/ui/Loader";

export const SinglePatientPage: React.FC = () => {
  const { id } = useParams();
  const location = useLocation();

  const { data, isLoading } = useGetPatientByIdQuery(id as string);

  const breadcrumbs_links = getBreadcrumbsLinks(location.pathname);

  data && breadcrumbs_links.push({ title: data.name, url: location.pathname });

  return (
    <PageWrapper>
      <Breadcrumbs links={breadcrumbs_links} />
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <PatientBaseInfo
            name={data.name}
            gender={data.gender.value}
            date_birth={convertDbTimeString(data.date_birth)}
            ib={data.ib}
          />
          <PatientTabs data={data} />
        </>
      ) : (
        <></>
      )}
    </PageWrapper>
  );
};
