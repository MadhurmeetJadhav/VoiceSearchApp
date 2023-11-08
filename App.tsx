import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavgation from "./navigation/MainNavgation";
import { apiCall } from "./api/user";
const App = () => {
  return (
    <NavigationContainer>
      <MainNavgation />
    </NavigationContainer>
  );
};

export default App;
