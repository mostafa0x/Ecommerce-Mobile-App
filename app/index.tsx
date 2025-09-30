import Appbar from "@/components/Appbar";
import CategorySection from "@/components/CategorySection";
import ProductsSection from "@/components/Products/ProductsSection";
import SearchbarFC from "@/components/SearchbarFC";
import { rh, rw } from "@/utils/dimensions";
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
        <SearchbarFC widthSize={342} />
      </View>
      <View style={styles.categoryContainer}>
        <CategorySection />
      </View>
      <View style={styles.productsContianer}>
        <ProductsSection />
        <ProductsSection />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  serachbarContainer: {
    paddingHorizontal: rw(24),
    paddingVertical: rh(24),
  },
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
