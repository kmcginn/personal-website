import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

// fix for FontAwesomeIcons disappearing when favicon is set
import "@fortawesome/fontawesome-svg-core/styles.css";

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// initialize icon sets available to the FontAwesome library
library.add(fab);

export default MyApp;
