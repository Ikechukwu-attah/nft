import { View, Text, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton, CircleButton } from "./Button";
import { SubInfo, People, NTFTitle, EndDate, EthPrice } from "./SubInfo";

const NFTCards = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imageUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NTFTitle
          title={data.name}
          subTitle={data.creator}
          subTitleSize={SIZES.small}
          titleSize={SIZES.large}
        />
      </View>
      <View
        style={{
          marginTop: SIZES.font,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: SIZES.font,
        }}
      >
        <EthPrice price={data.price} />
        <RectButton
          minWidth={120}
          fontSize={SIZES.font}
          handlePress={() => navigation.navigate("Details", { data })}
        />
      </View>
    </View>
  );
};

export default NFTCards;
