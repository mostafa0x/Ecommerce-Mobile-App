import Appbar from "@/components/Appbar";
import CategorySection from "@/components/CategorySection";
import ProductsSection from "@/components/Products/ProductsSection";
import SearchbarFC from "@/components/SearchbarFC";
import { rh } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    >
      <Appbar />
      <View style={styles.serachbarContainer}>
        <SearchbarFC />
      </View>
      <View style={styles.categoryContainer}>
        <CategorySection />
      </View>
      <View style={styles.productsContianer}>
        <ProductsSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  serachbarContainer: {},
  categoryContainer: {},
  productsContianer: {
    marginTop: rh(24),
    gap: rh(50),
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: rh(100),
  },
});
