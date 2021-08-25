// libs
import React, { useState, useEffect, useContext } from "react";

// components
import { Flex } from "native-base";
import ButtonsGroup from "../../components/Details/ButtonsGroup";
import Stats from "../../components/Details/Stats";
import List from "../../components/Details/List";

// assets
import { primaryColor } from "../../assets/colors";

// context
import DataContext from "../../context/UseData";

const DetailsScreen = ({ route }) => {
  // context
  const { transcations } = useContext(DataContext);

  // params
  const { id } = route.params;

  // states
  const [data, setData] = useState(transcations.find((item) => item.id == id));
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (transcations) {
      setData(transcations.find((item) => item.id == id));
    }
  }, [transcations]);

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
    <Flex direction="column" height="100%" backgroundColor={primaryColor}>
      <Flex flexGrow={1} direction="column">
        <Stats amount={amount} data={data} />
        <List trades={data.trades} />
      </Flex>
      <ButtonsGroup data={data} />
    </Flex>
  );
};

export default DetailsScreen;
