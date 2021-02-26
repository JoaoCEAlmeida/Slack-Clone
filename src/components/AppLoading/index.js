import React from "react";
import { AppLoading, AppLoadingContents } from "./styles";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const MyAppLoading = () => {
  return (
    <AppLoading>
      <AppLoadingContents>
        <Loader type="TailSpin" color="#3f0f40" height={80} width={80} />
      </AppLoadingContents>
    </AppLoading>
  );
};

export default MyAppLoading;
