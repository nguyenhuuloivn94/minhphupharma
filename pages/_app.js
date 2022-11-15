import "../styles/globals.css";
import { wrapper } from "./../redux/reducer";
import { Provider } from "react-redux";
import Layout from "components/Layout/Index";

function MyApp({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
