import type { ComponentType } from "react";
import React, { Suspense } from "react";

// import Loading from "components/Loading";

import lazyWithRetry from "./lazyWithRetry";

const Loading = () => <div>Loading...</div>;

type ImportFunction = () => Promise<{ default: ComponentType<any> }>;

const lazyLoad = (importFunction: ImportFunction) => {
  const LazyComponent = lazyWithRetry(importFunction);

  const Component = (props: any) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );

  return Component;
};

export default lazyLoad;
