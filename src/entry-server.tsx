import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppProviders, AppRoutes } from "./App";
import { seoPages, getSeoPage, getCanonicalUrl, getPreviewImage } from "./seo";
import "./index.css";

export { seoPages, getSeoPage, getCanonicalUrl, getPreviewImage };

export const render = (url: string) =>
  renderToString(
    <AppProviders>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </AppProviders>,
  );
