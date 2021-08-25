// libs
import React from "react";
import * as SMS from "expo-sms";

// components
import { Flex, Text, Divider } from "native-base";
import { TouchableOpacity, Share } from "react-native";

// assets
import {
  darkGrayColor,
  deleteColor,
  grayColor,
  greenColor,
  secondaryDark,
  successColor,
  textColor,
} from "../../assets/colors";

// icons
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Stats = ({ amount, data }) => {
  // handle sms button click
  const handeSmsClick = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      await SMS.sendSMSAsync(
        [data.phone],
        `Dear Sir/Madam, Your payment of Rs.${amount} is pending.`
      );
    } else {
      console.log("No sms available.");
    }
  };

  // handle reminder button click
  const handeReminderClick = async () => {
    try {
      await Share.share({
        title: "Social Ledger Reminder",
        message: `Social Ledger Reminder\n\nDear Sir/Madam, Your payment of Rs.${amount} is pending.`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const convertToStr = () => {
    let str = amount.toString();
    return str.replace("-", "");
  };

  return (
    <Flex
      my={3}
      mx={3}
      px={4}
      py={4}
      backgroundColor={secondaryDark}
      borderRadius={8}
    >
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Text color={textColor} bold fontSize="md">
          You will {amount > 0 ? "get" : "give"}
        </Text>
        <Text
          color={amount > 0 ? grayColor : greenColor}
          fontWeight={600}
          fontSize="md"
        >
          Rs. {convertToStr()}
        </Text>
      </Flex>
      <Divider my={3} backgroundColor={darkGrayColor} />
      <Flex direction="row" alignItems="center" justifyContent="space-around">
        <TouchableOpacity disabled={amount < 0} onPress={handeReminderClick}>
          <Flex
            opacity={amount < 0 ? 0.5 : 1}
            justifyContent="center"
            alignItems="center"
          >
            <FontAwesome name="whatsapp" size={25} color={textColor} />
            <Text color={textColor} fontSize={12} mt={1}>
              Reminders
            </Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity disabled={amount < 0} onPress={handeSmsClick}>
          <Flex
            opacity={amount < 0 ? 0.5 : 1}
            justifyContent="center"
            alignItems="center"
          >
            <MaterialCommunityIcons
              name="android-messages"
              size={25}
              color={textColor}
            />
            <Text color={textColor} fontSize={12} mt={1}>
              SMS
            </Text>
          </Flex>
        </TouchableOpacity>
      </Flex>
    </Flex>
  );
};

export default Stats;
