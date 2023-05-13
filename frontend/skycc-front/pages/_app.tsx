
import { QueryClient } from '@tanstack/query-core';
import { Hydrate, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
import { DefaultLayout } from '../layout/defaultLayout';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedProps}>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}