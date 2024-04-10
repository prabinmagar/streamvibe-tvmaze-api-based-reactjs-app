import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { PageWrapper } from "../../styles/global/default";
import Footer from "../footer/Footer";

const BaseLayout = () => {
  return (
    <PageWrapper>
      <Header />
      {/* main content */}
      <main
        style={{
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </main>
      {/* end of main content */}
      <Footer />
    </PageWrapper>
  );
};

export default BaseLayout;
