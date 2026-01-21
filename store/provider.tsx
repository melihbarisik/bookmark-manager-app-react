// src/store/providers.tsx
'use client';

import { Provider } from 'react-redux';
import { store } from './index'; // Store dosyanın yolu

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}