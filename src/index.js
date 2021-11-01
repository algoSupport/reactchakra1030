import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sample1 from "./pages/sample1";
import Comp4 from "./pages/comp4";
import Comp1 from "./pages/comp1";

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
        },
        styles: {
          global: {
            // styles for the `body`
            body: {
              bg:
                "linear-gradient(186.28deg, rgba(21, 156, 162, 0.2) 4.96%, rgba(0, 0, 0, 0) 53.7%), #050B1C;"
            }
          }
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
          <Route path="/comp1">
            <Comp1 />
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
