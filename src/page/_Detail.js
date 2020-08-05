import * as React from "react";
import { MainTemplate,Navigation } from "../components";
import { DetailContainer } from "../containers";

const Detail = () => (
  <MainTemplate header={<Navigation />}>
    <DetailContainer />
  </MainTemplate>
);

export default Detail;
