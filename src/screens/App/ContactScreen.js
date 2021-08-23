import React, { useState, useEffect } from "react";
import { Box, FlatList, useToast } from "native-base";
import * as Contacts from "expo-contacts";

// utils
import { formatContacts } from "../../utils/helper";

// assets
import { primaryColor, secondaryDark } from "../../assets/colors";

// components
import SearchForm from "../../components/Home/SearchForm";
import Item from "../../components/Contact/Item";

const ContactScreen = (props) => {
  const toast = useToast();

  const [list, setList] = useState([]);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });
      if (data.length > 0) {
        let contacts = formatContacts(data);
        setTemp(contacts);
        setList(contacts);
      }
    } else {
      toast.show({
        title: "permission not granted",
      });
    }
  };

  const handleSearch = (_value) => {
    if (_value !== "") {
      let filter = temp.filter(
        (item) => item.name.toLowerCase().indexOf(_value.toLowerCase()) !== -1
      );
      setList(filter);
    } else {
      setList(temp);
    }
  };

  const toggle = (_check) => {};

  const handleClick = (_data) => {
    props.navigation.navigate("Add", {
      name: _data.name,
      number: _data.number,
    });
  };

  return (
    <Box h="100%" bg={secondaryDark} pt={6} px={4}>
      <SearchForm handleSearch={handleSearch} toggle={toggle} />
      <FlatList
        mt={4}
        data={list}
        initialNumToRender={10}
        renderItem={({ item }) => (
          <Item data={item} handleClick={handleClick} />
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default ContactScreen;
