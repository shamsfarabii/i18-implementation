import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'loginSignup'], null, ['en', 'bn'])),
  },
})

export default appWithTranslation(App)