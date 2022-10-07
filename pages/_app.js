import "../styles/globals.css";
import { app } from "../firebase";
import { store } from "../redux/store";
import { Provider } from "react-redux";
function MyApp({ Component, pageProps }) {
  app;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
