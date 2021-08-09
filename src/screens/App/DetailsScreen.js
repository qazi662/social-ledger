// libs
import React, { useState, useEffect } from "react";

// components
import { Flex } from "native-base";
import ButtonsGroup from "../../components/Details/ButtonsGroup";
import Stats from "../../components/Details/Stats";
import List from "../../components/Details/List";

// assets
import { primaryColor } from "../../assets/colors";

// mockup
import mockup from "../../utils/data";

const DetailsScreen = ({ route }) => {
  // params
  const { id } = route.params;

  // states
  const [data] = useState(mockup.customers.find((item) => item.id == id));
  const [amount, setAmount] = useState(0);

  // calculate total amount
  useEffect(() => {
    if (data.trades) {
      let gaveAmount = 0;
      let tookAmount = 0;
      data.trades.forEach((item) => {
        if (item.borrow) {
          tookAmount += item.amount;
        } else {
          gaveAmount += item.amount;
        }
      });
      setAmount(gaveAmount - tookAmount);
    }
  }, [data]);

  return (
    <Flex direction='column' height='100%' backgroundColor={primaryColor}>
      <Flex flexGrow={1} direction='column'>
        <Stats amount={amount} data={data} />
        <List trades={data.trades} />
      </Flex>
      <ButtonsGroup />
    </Flex>
  );
};

export default DetailsScreen;
