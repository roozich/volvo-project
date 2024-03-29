import type { AppProps } from "next/app";
import "../styles/globals.css";
import { StyleProvider, ThemePicker } from "vcc-ui";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Component {...pageProps} />
      </ThemePicker>
    </StyleProvider>
  );
}
export default MyApp;