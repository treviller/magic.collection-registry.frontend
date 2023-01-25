import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from "@/components/layout";
import '@/styles/globals.css'
import {wrapper} from "@/store/store";
import {Provider} from "react-redux";

function App({ Component, pageProps }: AppProps) {
    const {store, props} = wrapper.useWrappedStore(pageProps)

  return (
      <Provider store={store}>
        <Layout>
          <Component {...props} />
        </Layout>
      </Provider>
  )
}

export default App