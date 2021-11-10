import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
<link
  rel="stylesheet"
  href="https://bootswatch.com/5/vapor/bootstrap.min.css"
/>;
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
