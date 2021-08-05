// libraries
import React from "react";
import { Box, FlatList, Text, Icon, Fab } from "native-base";

// components
import Item from "./Item";

// assets
import { secondayLight, textColor, textDark } from "../../assets/colors";

const Customers = ({ customers }) => {
  return (
    <Box bg={secondayLight} h="100%" pl={4} pt={4}>
      <Text color={textDark} fontSize="sm">
        {customers.length} Customers
      </Text>
      <FlatList
        mt={4}
        data={customers}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default Customers;
