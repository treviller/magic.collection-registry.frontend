import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Layout from "@/components/layout";
import '@/styles/globals.css'
import {wrapper} from "@/store/store";
import {Provider} from "react-redux";
import {IntlProvider} from "react-intl";
import fr from '../lang/fr.json';
import en from '../lang/en.json';
import {useRouter} from "next/router";
import {config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

const messages: Record<string, Record<string, string>> = {
    en,
    fr
}

function App({Component, pageProps}: AppProps) {
    const {store, props} = wrapper.useWrappedStore(pageProps)
    let {locale} = useRouter()

    if (locale === undefined) {
        locale = 'fr'
    }

    return (
        <IntlProvider locale={locale} messages={messages[locale]}>
            <Provider store={store}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </Provider>
        </IntlProvider>
    )
}

export default App