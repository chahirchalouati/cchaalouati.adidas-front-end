import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Loading from "../Components/Loading/Loading";
import Logo from "../Components/Logo/Logo";
import { store } from "../Redux";
import RouteWrapper from "../Routes/RouteWrapper";

function App() {
  const [isReady, setReady] = useState(false);
  const [isRole, setRole] = useState("USER");
  useEffect(() => {
    setTimeout(() => {
      setReady(() => true);
    }, 1000);
  }, []);

  if (isReady) {
    return (
      <Provider store={store}>
        <RouteWrapper></RouteWrapper>
      </Provider>
    );
  } else if (!isReady) {
    return (
      <div className="welcome_loading">
        <Logo />
        <Loading />
      </div>
    );
  }
}

export default App;

/**  const getColors = async () => {
    try {
      const { data } = await httpClient.get("https://color-names.herokuapp.com/v1/");
      console.log(data);
      await httpClient.post("http://localhost:8080/colors", data.colors);

    } catch (error) {
      console.log(error);

    }
  } */
