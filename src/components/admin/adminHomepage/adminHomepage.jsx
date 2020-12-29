import { React } from "react";

import Header from "../../generalComponents/header/header";
import Footer from "../../generalComponents/footer/footer";
import AdminList from "./adminlist";

const HomepageAgent = () => {
  return (
    <div>
      <Header />
      <AdminList />
      <Footer />
    </div>
  );
};

export default HomepageAgent;
