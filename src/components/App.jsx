import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="home" element={<Home />} /> */}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
