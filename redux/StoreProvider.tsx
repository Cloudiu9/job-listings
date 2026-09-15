"use client";

import { Provider } from "react-redux";
import { store } from "./store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <main className="flex-1 px-4 py-8">{children}</main>
    </Provider>
  );
}
