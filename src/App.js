import React, { Suspense } from 'react';

import Routes from 'main/routes';

function App() {
  return (
    <Suspense fallback={<div/>}>
      <Routes />
    </Suspense>
  );
}

export default App;
