import React, { Suspense } from "react";
import Loading from "./Loader";
import ErrorBoundary from "./ErrorBoundary";
import { LazyLoadProps } from "../types/lazyload";

const LazyLoad: React.FC<LazyLoadProps> = ({ Component }) => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading size={50} message="Loading..." />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyLoad;
