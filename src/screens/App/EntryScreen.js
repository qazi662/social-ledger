import React, { useState, useEffect, useContext } from "react";
import { TouchableOpacity } from "react-native";
import {
  Flex,
  Box,
  Button,
  Text,
  Input,
  TextArea,
  Icon,
  useToast,
} from "native-base";

// colors
import {
  grayColor,
  greenColor,
  secondaryDark,
  secondayLight,
  successColor,
} from "../../assets/colors";

// assets
import { AntDesign, Entypo } from "@expo/vector-icons";

// component
import Picker from "../../components/common/Picker";

// context
import DataContext from "../../context/UseData";

// util
import { getCurrentDate, isExist } from "../../utils/helper";

const EntryScreen = ({ route, navigation }) => {
  const { transcations, addEntry } = useContext(DataContext);
  const toast = useToast();

  const [amount, setAmount] = useState("");
  const [dateValue, setDateValue] = useState(getCurrentDate());
  const [showCal, setShowCal] = useState(false);
  const [note, setNote] = useState("");

  useEffect(() => {
    let msg =
      route.params?.type === "gave"
        ? `You gave Rs ${amount} to ${route.params?.name}`
        : `You got Rs ${amount} from ${route.params?.name}`;
    navigation.setParams({ title: msg });
  }, [amount]);

  const handleClick = () => {
    let newEntry = {
      id: route.params.phoneNumber,
      amount: parseInt(amount),
      name: route.params.name,
      phone: route.params.phoneNumber,
      borrow: route.params.type === "gave" ? false : true,
      date: dateValue,
      note,
      trades: [
        {
          date: dateValue.prettier.date,
          time: dateValue.prettier.time,
          amount: parseInt(amount),
          borrow: route.params.type === "gave" ? false : true,
        },
      ],
    };

    if (!isExist(transcations, newEntry.id)) {
      addEntry(newEntry);
      navigation.navigate("Home");
    } else {
      toast.show({
        title: "Peer already exist, add new entry in Detail Screen",
      });
    }
  };

  return (
    <Flex h="100%" bg={secondaryDark} py={2} px={4} alignItems="flex-start">
      <Input
        keyboardType="numeric"
        size="xl"
        width="100%"
        mt={2}
        value={amount}
        onChangeText={(value) => {
          if (value !== "") setAmount(value);
          else setAmount("0");
        }}
        InputLeftElement={
          <Text ml={2} fontSize={18} color={greenColor} fontWeight="600">
            Rs
          </Text>
        }
        color="white"
      />
      <TextArea
        width="100%"
        mt={2}
        numberOfLines={4}
        textAlignVertical="top"
        placeholder="Enter Details (item Name, Bill No, Quantity...)"
        color="white"
        value={note}
        onChangeText={(val) => setNote(val)}
      />
      <TouchableOpacity onPress={() => setShowCal(true)}>
        <Flex
          bgColor={secondayLight}
          mt={4}
          p={2}
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <Icon as={AntDesign} name="calendar" size={4} color={grayColor} />
          <Text ml={2} mr={1} fontSize="sm" color={grayColor}>
            {dateValue.prettier.date}
          </Text>
          <Icon as={Entypo} name="chevron-down" size={3} color={grayColor} />
        </Flex>
      </TouchableOpacity>
      <Button
        size="md"
        bgColor={greenColor}
        mt="auto"
        width="100%"
        onPress={handleClick}
      >
        SAVE
      </Button>
      {showCal && (
        <Picker
          mode="date"
          display="calendar"
          value={dateValue}
          setValue={setDateValue}
          show={setShowCal}
        />
      )}
    </Flex>
  );
};

export default EntryScreen;
