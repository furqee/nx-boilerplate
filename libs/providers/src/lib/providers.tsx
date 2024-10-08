import React from 'react';
import StoreProvider from './store/store.provider';

// React server components are async so you make database or API calls.
export async function Provider({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
