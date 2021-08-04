// libraries
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Box, Flex, NativeBaseProvider } from "native-base";

// components
import SearchForm from "../../components/Home/SearchForm";
import ReportCard from "../../components/Home/ReportCard";
import Cashbook from "../../components/Home/Cashbook";
import Customers from "../../components/Home/Customers";

// assets
import { primaryColor } from "../../assets/colors";

const HomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.main}>
        <ScrollView contentContainerStyle={styles.full}>
          <Flex direction="column" h="100%">
            <Box m={4}>
              <SearchForm />
            </Box>
            <Box mx={4} mt={0} mb={3}>
              <ReportCard />
            </Box>
            <Box mx={4}>
              <Cashbook />
            </Box>
            <Box mt={4} flex={1}>
              <Customers />
            </Box>
          </Flex>
        </ScrollView>
      </View>
    </NativeBaseProvider>
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
});
