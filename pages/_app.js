import "../styles/globals.css";
import { wrapper } from "./../redux/reducer";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
