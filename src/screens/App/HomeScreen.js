// libraries
import React, { useState, useLayoutEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Box, Flex } from "native-base";

// components
import SearchForm from "../../components/Home/SearchForm";
import ReportCard from "../../components/Home/ReportCard";
import Cashbook from "../../components/Home/Cashbook";
import Customers from "../../components/Home/Customers";
import Fab from "../../components/Home/Fab";

// assets
import { primaryColor } from "../../assets/colors";

// mockup
import mockup from "../../utils/data";

const HomeScreen = ({ navigation, route }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [customers, setCustomers] = useState(mockup.customers);
  const [temp] = useState(mockup.customers);

  const toggle = (_check) => {
    setIsSearch(_check);

    if (!_check) {
      setCustomers(temp);
    }
  };

  const handleSearch = (_value) => {
    if (_value !== "") {
      let filter = temp.filter(
        (item) => item.name.toLowerCase().indexOf(_value.toLowerCase()) !== -1
      );
      setCustomers(filter);
    } else {
      setCustomers(temp);
    }
  };

  const navigateTo = () => {
    navigation.navigate("Contact");
  };

  return (
    <View style={styles.main}>
      <ScrollView contentContainerStyle={styles.full}>
        <Flex direction="column" h="100%">
          <Box m={4}>
            <SearchForm
              isSearch={isSearch}
              toggle={toggle}
              handleSearch={handleSearch}
            />
          </Box>
          <Box mx={4} mt={0} mb={3} style={isSearch && styles.hide}>
            <ReportCard />
          </Box>
          <Box mx={4} style={isSearch && styles.hide}>
            <Cashbook />
          </Box>
          <Box mt={4} flex={1}>
            <Customers customers={customers} />
          </Box>
        </Flex>
      </ScrollView>
      <Fab handleClick={navigateTo} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    height: "100%",
  },
  full: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
});
