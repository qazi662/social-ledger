import * as React from "react";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

// util
import { formatDate } from "../../utils/helper";

const Picker = ({ mode, display, value, setValue, show }) => {
  const onChange = (event, selectedDate) => {
    show(false);

    if (mode === "date") {
      if (selectedDate) setValue(formatDate(selectedDate));
    } else {
      if (selectedDate) setValue(formatDate(selectedDate));
    }
  };

  return (
    <DateTimePicker
      testID="dateTimePicker"
      value={value.to_date}
      mode={mode}
      is24Hour={false}
      display={display}
      onChange={onChange}
    />
  );
};

export default Picker;
