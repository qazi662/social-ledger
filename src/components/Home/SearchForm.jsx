// libraries
import React from "react";

// components
import { Input, Icon } from "native-base"

// assets
import { accentLight, grayColor,  textColor } from "../../assets/colors";

// icons
import { AntDesign } from '@expo/vector-icons'; 

const SearchForm = () => {
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
      as={<AntDesign  name="search1" />}
      size={5}
      color={grayColor}
      ml={2}
      />
    }
  />
  )
}

export default SearchForm
