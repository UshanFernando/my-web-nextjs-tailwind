import "../styles/globals.css";
import React,{ useEffect, useState } from "react";
import Loading from "../components/Loading";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 5000);
    console.log("Page Loaded")
  }, []);

  return (
    <>
      {loading ? (
        <React.Fragment>
          <Component {...pageProps} />
        </React.Fragment>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default MyApp;
