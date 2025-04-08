import React from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// Layout & Page Components
import LayOut from "./components/LayOut.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Host from "./components/Host.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx"; // 👈 ErrorBoundary

// Vans Components
import VansLayOut from "./components/VansLayOut.jsx";
import Vans from "./components/vans/Vans.jsx";
import LuxuryVans from "./components/vans/LuxuryVans.jsx";
import SimpleVans from "./components/vans/SimpleVans.jsx";
import RuggedVans from "./components/vans/RuggedVans.jsx";
import VansDetail from "./components/vans/VansDetails.jsx";

// Vans Loaders
import VansLoader from "./components/vansloader/VansLoader.jsx";
import LuxuryVansLoader from "./components/vansloader/LuxuryVansLoader.jsx";
import SimpleVansLoader from "./components/vansloader/SimpleVansLoader.jsx";
import RuggedVansLoader from "./components/vansloader/RuggedVansLoader.jsx";
import VansDetailLoader from "./components/vansloader/VansDetailLoader.jsx";

// Error Elements
import VansDetailErrorElement from "./components/errorElements/VansDetailErrorElement.jsx";

// Auth Components
import LogIn from "./components/AuthComponents/LogIn.jsx";
import SignUp from "./components/AuthComponents/SignUp.jsx";

const checkAuth = () => true;

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* Public Routes */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected or conditional Routes */}
        <Route path="/" element={checkAuth() ? <LayOut /> : <LandingPage />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Vans Detail Route */}
          <Route
            path="vansdetail/:id"
            element={<VansDetail />}
            loader={VansDetailLoader}
            errorElement={<VansDetailErrorElement />}
          />

          {/* Vans Layout and Nested Categories */}
          <Route
            path="vanslayout"
            element={
              <ErrorBoundary>
                <VansLayOut />
              </ErrorBoundary>
            } // Wrap this part with ErrorBoundary to handle errors locally
            errorElement={<ErrorBoundary />} // Global error boundary for this route
          >
            <Route index element={<Vans />} loader={VansLoader} />
            <Route
              path="luxury"
              element={<LuxuryVans />}
              loader={LuxuryVansLoader}
            />
            <Route
              path="simple"
              element={<SimpleVans />}
              loader={SimpleVansLoader}
            />
            <Route
              path="rugged"
              element={<RuggedVans />}
              loader={RuggedVansLoader}
            />
          </Route>

          {/* Host Page */}
          <Route path="host" element={<Host />} />
        </Route>
      </>
    )
  );

  // Wrap the entire Router in the ErrorBoundary component
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
