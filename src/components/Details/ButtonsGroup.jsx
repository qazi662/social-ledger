// libs
import React, { useState, useRef, useContext } from "react";

// components
import { Modal, Button, Input } from "native-base";

// assets
import { deleteColor, secondayLight, successColor } from "../../assets/colors";

// context
import DataContext from "../../context/UseData";

// util
import { getCurrentDate } from "../../utils/helper";

const ButtonsGroup = ({ data }) => {
  const { updateEntry } = useContext(DataContext);

  // states
  const [modalVisible, setModalVisible] = useState(false);
  const [method, setMethod] = useState();
  const [amount, setAmount] = useState("0");

  // ref
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const handleClick = () => {
    let currentDate = getCurrentDate();
    let newTrade = {
      ...data,
      trades: [
        ...data.trades,
        {
          date: currentDate.prettier.date,
          time: currentDate.prettier.time,
          amount: parseInt(amount),
          borrow: method === "gave" ? false : true,
        },
      ],
    };

    updateEntry(newTrade);
    setModalVisible(false);
  };

  return (
    <>
      <Modal
        isOpen={modalVisible}
        onClose={setModalVisible}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>{`You ${method}`}</Modal.Header>
          <Modal.Body>
            <Input
              mt={4}
              ref={initialRef}
              placeholder={`How much money you ${method}?`}
              keyboardType="numeric"
              value={amount}
              onChangeText={(value) => setAmount(value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button onPress={handleClick}>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme="secondary"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button.Group
        variant="solid"
        space={3}
        my={3}
        mx={{
          base: "3",
        }}
      >
        <Button
          onPress={() => {
            setModalVisible(true);
            setMethod("gave");
          }}
          backgroundColor={secondayLight}
          width="50%"
          flex={1}
        >
          YOU GAVE
        </Button>
        <Button
          onPress={() => {
            setModalVisible(true);
            setMethod("got");
          }}
          backgroundColor={secondayLight}
          flex={1}
        >
          YOU GOT
        </Button>
      </Button.Group>
    </>
  );
};

export default ButtonsGroup;
