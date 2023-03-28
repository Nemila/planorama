import Layout from "@/components/Layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Layout session={session}>
      <Component {...pageProps} />
    </Layout>
  );
}
