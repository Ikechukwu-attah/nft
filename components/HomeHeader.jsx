import { View, Text, Image, TextInput } from "react-native";
import { COLORS, FONTS, SIZES, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View style={{ backgroundColor: COLORS.primary, padding: SIZES.font }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />

          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              width: 25,
              height: 25,
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello Anthony 👋
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Lets find a way
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          backgroundColor: COLORS.gray,
          alignItems: "center",
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small - 2,
          borderRadius: 5,
        }}
      >
        <Image
          source={assets.search}
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
          resizeMode="contain"
        />
        <TextInput
          placeholder="Search"
          style={{ flex: 1 }}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
