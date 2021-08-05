// libraries
import React from "react";

// components
import { Input, Icon } from "native-base";

// assets
import { accentLight, grayColor, textColor } from "../../assets/colors";

// icons
import { AntDesign } from "@expo/vector-icons";

const SearchForm = ({ isSearch, toggle, handleSearch }) => {
  return (
    <Input
      w="100%"
      placeholder="Search"
      borderRadius={10}
      py={2}
      px={2}
      borderColor={accentLight}
      bg={accentLight}
      color={textColor}
      _focus={{
        borderColor: accentLight,
        shadow: 0,
      }}
      _hover={{
        borderColor: accentLight,
        shadow: 0,
      }}
      InputLeftElement={
        <Icon
          as={<AntDesign name={!isSearch ? "search1" : "close"} />}
          size={!isSearch ? 5 : 6}
          color={grayColor}
          ml={2}
          onPress={() => toggle(false)}
          style={{ zIndex: 99 }}
        />
      }
      onFocus={() => toggle(true)}
      onChangeText={handleSearch}
    />
  );
};

export default SearchForm;
