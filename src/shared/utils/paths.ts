import { endpoints } from "../constants/endpoints";

export interface BreadcrumbsLink {
  title: string;
  url: string;
}

export const getBreadcrumbsLinks = (path: string) => {
  const path_endpoints = path.split("/");
  path_endpoints.shift();
  let current_path: any = endpoints;
  const breadcrumbs_links: BreadcrumbsLink[] = [];

  path_endpoints.some((endpoint) => {
    current_path = current_path[endpoint];
    if (current_path) {
      breadcrumbs_links.push({
        title: current_path.title,
        url: current_path.url,
      });
      return false;
    }
    return true;
  });
  return breadcrumbs_links;
};
