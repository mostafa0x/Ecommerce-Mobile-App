import AvatarFC from "@/components/AvatarFC";
import CategorySection from "@/components/CategorySection";
import CartIcon from "@/components/Icons/CartIcon";
import ProductsSection from "@/components/Products/ProductsSection";
import SearchbarFC from "@/components/SearchbarFC";
import { Colors, Fonts } from "@/constants";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
      <View style={styles.appBarContainer}>
        <AvatarFC />
        <Text style={styles.appbarTxt}>FoFo Store</Text>
        <TouchableOpacity>
          <CartIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.serachbarContainer}>
        <SearchbarFC />
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
  appBarContainer: {
    paddingHorizontal: rw(24),
    paddingTop: rh(63),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  appbarTxt: {
    fontSize: rf(24),
    fontFamily: Fonts.circularstdmedium500,
    fontWeight: "700",
    color: Colors.text,
  },
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
