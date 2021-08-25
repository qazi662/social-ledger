// libraries
import React from "react";
import { useNavigation } from "@react-navigation/native";

// components
import { TouchableOpacity } from "react-native";
import { Box, Flex, Text, Divider } from "native-base";

// assets
import {
  accentLight,
  grayColor,
  greenColor,
  secondayLight,
  textColor,
  textDark,
} from "../../assets/colors";

// icons
import { MaterialIcons } from "@expo/vector-icons";

// utils
import { windowHeight, windowWidth } from "../../utils/dimensions";
import { getTotal } from "../../utils/helper";

const Item = ({ data }) => {
  // navigation
  const navigation = useNavigation();

  const getFirstChar = () => {
    return data.name.charAt(0);
  };

  const convertToStr = (_amount) => {
    let str = _amount.toString();
    return str.replace("-", "");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", {
          id: data.id,
          title: data.name,
        });
      }}
    >
      <Flex direction="row" my={2}>
        <Flex
          bg="blue.500"
          w={12}
          h={12}
          borderRadius={Math.round(windowWidth + windowHeight) / 2}
          justify="center"
          alignItems="center"
        >
          <Text color={textColor}>{getFirstChar()}</Text>
        </Flex>
        <Box ml={2} flexGrow={1} pt={1}>
          <Flex
            direction="row"
            justify="space-between"
            alignItems="center"
            mr={4}
          >
            <Text color={textColor} fontSize="md" textTransform="capitalize">
              {data.name}
            </Text>
            <Text
              color={
                getTotal(data.trades).diff > 0
                  ? grayColor
                  : getTotal(data.trades).diff == 0
                  ? grayColor
                  : greenColor
              }
              fontSize="sm"
              fontWeight="bold"
            >
              Rs {convertToStr(getTotal(data.trades).diff)}
            </Text>
          </Flex>
          <Flex
            direction="row"
            justify="space-between"
            alignItems="center"
            mr={4}
          >
            <Text color={textDark} fontSize="sm">
              {data.date.prettier.fromNow}
            </Text>
            <Text color={grayColor} fontSize="sm" fontWeight="bold">
              {getTotal(data.trades).diff > 0
                ? "You will get"
                : getTotal(data.trades).diff == 0
                ? ""
                : "You will give"}
            </Text>
          </Flex>
          <Divider bg={accentLight} mt={4} />
        </Box>
      </Flex>
    </TouchableOpacity>
  );
};

export default Item;
