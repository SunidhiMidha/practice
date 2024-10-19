import React, { Suspense } from 'react'
const LazyCompInParent = React.lazy(() => import("./LazyLoadingComp"))

export default function MainComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyCompInParent/>
      </Suspense>
    </div>
  )
}
