import React from "react";
import { StyleSheet } from "react-native";
import FillterModalContextProvider from "./FillterModalContext";

export default function AllContextProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <FillterModalContextProvider>{children}</FillterModalContextProvider>;
}

const styles = StyleSheet.create({});
