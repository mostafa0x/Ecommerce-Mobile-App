import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const queryClinet = new QueryClient();

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
}
