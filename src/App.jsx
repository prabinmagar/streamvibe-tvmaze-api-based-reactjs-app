import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import { theme } from "./styles/theme/theme";
import routeConstants from "./constant/routeConstants";
import { BaseLayout } from "./components";
import { Home, PageNotFound, Search, ShowDetail, Shows } from "./screens";

// separate routes configuration
const routes = [
  {
    path: routeConstants.HOME,
    element: <BaseLayout />, // main layout
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: routeConstants.SHOWS,
        element: <Shows />,
      },
      {
        path: `${routeConstants.SHOWS}/:id`,
        element: <ShowDetail />,
      },
      {
        path: routeConstants.SEARCH,
        element: <Search />,
      },
    ],
  },
  {
    path: "*", element: <PageNotFound />
  }
];

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyles />

          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}>
                {route.children &&
                  route.children.map((childRoute, childIndex) => (
                    <Route
                      key={childIndex}
                      path={childRoute.path}
                      element={childRoute.element}
                    />
                  ))}
              </Route>
            ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
