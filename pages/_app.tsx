import { AppProps } from "next/app";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import '../styles/index.sass';

export default function App({ Component, pageProps }: AppProps) {



    return (<Component {...pageProps} />)
}