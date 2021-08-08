// libs
import React from "react";
import moment from "moment";

// components
import { Flex, Text, FlatList } from "native-base";
import {
  deleteColor,
  secondaryDark,
  successColor,
  textColor,
} from "../../assets/colors";

const List = ({ trades }) => {
  return (
    <Flex flex={1} mx={3} borderRadius={8}>
      <Flex direction='row' px={3} py={3}>
        <Text color={textColor} fontSize={12} flex={2}>
          Entries
        </Text>
        <Text textAlign='center' fontSize={12} color={textColor} flex={1}>
          You Gave
        </Text>
        <Text textAlign='center' fontSize={12} color={textColor} flex={1}>
          You Got
        </Text>
      </Flex>
      <FlatList
        data={trades}
        renderItem={({ item }) => (
          <Flex
            direction='row'
            px={5}
            py={3}
            my={1}
            borderRadius={8}
            backgroundColor={secondaryDark}
            alignItems='center'
          >
            <Flex flex={2}>
              <Text color={textColor} fontWeight={600} fontSize={14} mb={2}>
                {moment().format("DD-MMM-YYYY")}
              </Text>
              <Text color={textColor} fontWeight={600} fontSize={14}>
                {moment().format("hh:mm a")}
              </Text>
            </Flex>
            <Text fontSize={14} textAlign='center' flex={1} color={deleteColor}>
              {!item.borrow && `Rs.${item.amount}`}
            </Text>
            <Text
              fontSize={14}
              textAlign='center'
              flex={1}
              color={successColor}
            >
              {item.borrow && `Rs.${item.amount}`}
            </Text>
          </Flex>
        )}
        keyExtractor={(item, index) => index}
      />
    </Flex>
  );
};

export default List;
