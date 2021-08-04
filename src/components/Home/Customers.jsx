// libraries
import React from "react";
import { Box, FlatList, Text, Icon } from "native-base";

// components
import Item from "./Item";

// assets
import { secondayLight, textColor, textDark } from "../../assets/colors";

// icons
import { MaterialIcons } from "@expo/vector-icons";

// mockup
import mockup from "../../utils/data";

const Customers = () => {
  return (
    <Box bg={secondayLight} flex={1} pl={4} pt={4}>
      <Text color={textDark} fontSize="sm">
        {mockup.customers.length} Customers
      </Text>
      <FlatList
        mt={4}
        data={mockup.customers}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default Customers;
