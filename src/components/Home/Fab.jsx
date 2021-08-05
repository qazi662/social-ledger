import React from "react";
import { Fab, Icon } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const index = ({ handleClick }) => {
  return (
    <Fab
      placement="bottom-right"
      colorScheme="blue"
      icon={<Icon as={AntDesign} name="addusergroup" size={6} />}
      onPress={handleClick}
    />
  );
};

export default index;
