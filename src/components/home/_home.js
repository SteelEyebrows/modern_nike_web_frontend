import * as React from "react";
import Slime from './_slime';

const Home = ({ departments }) => {
    return (
      <>
        <Slime image="https://blog.lolli.com/content/images/2019/11/image.jpg" right={-5} top={-5} size={40} typenumber={1}  title={"Animating"} disc={"Animating"}/>
        {departments}
      </>
    );
  };

export default Home;