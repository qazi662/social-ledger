// libs
import React, { useState, useRef } from "react";

// components
import { Modal, Button, Input } from "native-base";

// assets
import { deleteColor, successColor } from "../../assets/colors";

const ButtonsGroup = () => {
  // states
  const [modalVisible, setModalVisible] = useState(false);
  const [method, setMethod] = useState();
  const [amount, setAmount] = useState(0);

  // ref
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  console.log(amount);

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
              keyboardType='numeric'
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant='ghost' space={2}>
              <Button onPress={() => alert(`You ${method} Rs.${amount}`)}>
                SAVE
              </Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                colorScheme='secondary'
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Button.Group
        variant='solid'
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
          backgroundColor={deleteColor}
          width='50%'
          flex={1}
        >
          YOU GAVE
        </Button>
        <Button
          onPress={() => {
            setModalVisible(true);
            setMethod("got");
          }}
          backgroundColor={successColor}
          flex={1}
        >
          YOU GOT
        </Button>
      </Button.Group>
    </>
  );
};

export default ButtonsGroup;
