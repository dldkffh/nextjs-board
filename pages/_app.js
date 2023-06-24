import "../style/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../store";
import i18n from "@/lib/i18n";

function App({ Component, pageProps: { session, ...pageProps } }) {
   return (
      <ReduxProvider store={store}>
         <SessionProvider session={session}>
            <Component {...pageProps} />
         </SessionProvider>
      </ReduxProvider>
   );
}

export default App;
