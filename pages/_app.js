import "../style/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";

import Layout from "@/components/layout";

function App({ Component, pageProps: { session, ...pageProps } }) {
   return (
      <ReduxProvider store={store}>
         <SessionProvider session={session}>
            <Layout>
               <Component {...pageProps} />
            </Layout>
         </SessionProvider>
      </ReduxProvider>
   );
}

export default App;
