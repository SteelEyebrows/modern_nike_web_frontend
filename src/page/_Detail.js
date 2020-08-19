import * as React from "react";
import { MainTemplate} from "../components";
import { DetailContainer,NavigationContainer } from "../containers";

const Detail = () => (
  <MainTemplate header={<NavigationContainer />} >
    <DetailContainer />
  </MainTemplate>
);

export default Detail;
