import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sample1 from "./pages/sample1";
import Comp4 from "./pages/comp4";

const MyApp = () => {
  return (
    <ChakraProvider
      theme={extendTheme({
        config: {
          useSystemColorMode: false,
          initialColorMode: "dark"
        },
        fonts: {
          heading: "Inter",
          body: "Inter"
        }
      })}
    >
      <Router>
        <Switch>
          <Route path="/sample1">
            <Sample1 />
          </Route>
          <Route path="/comp4">
            <Comp4 />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
};

const rootElement = document.getElementById("root");
render(
  <>
    <ColorModeScript initialColorMode="dark" />
    <MyApp />
  </>,
  rootElement
);
