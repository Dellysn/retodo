import '@/styles/global.css';
import { customTheme } from '@/utils/custom-theme-provide';
import { MantineProvider } from '@mantine/core';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import 'remixicon/fonts/remixicon.css';

 type ComponentWithPageLayout = AppProps & {
    Component: AppProps['Component'] & {
      PageLayout?: React.ComponentType | any;
    };
  };
  const ErrorPage = () => <div>Something went wrong</div>;
export default function App(props: ComponentWithPageLayout) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={customTheme}>
      {Component.PageLayout ? (
                    <Component.PageLayout>
                      <ErrorBoundary FallbackComponent={ErrorPage}>
                        <Component {...pageProps} />
                      </ErrorBoundary>
                    </Component.PageLayout>
                  ) : (
                    <ErrorBoundary FallbackComponent={ErrorPage}>
                      <Component {...pageProps} />
                    </ErrorBoundary>
                  )}
      </MantineProvider>
    </>
  );
}
