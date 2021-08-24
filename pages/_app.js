import React from "react";
import "../styles/globals.css";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Initialise Hotjar only client side
    hotjar.initialize(2569441, 6);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
