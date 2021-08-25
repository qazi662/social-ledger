import moment from "moment";

export const formatContacts = (_data) => {
  let newList = _data.filter((item) => {
    if (item.hasOwnProperty("phoneNumbers")) {
      return item;
    }
  });

  newList = newList.map((item, i) => {
    return {
      id: item?.id || i,
      name: item?.name || "no name",
      number: item?.phoneNumbers?.[0]?.number || "no number",
    };
  });

  return newList;
};

export const getInitails = (_name) => {
  _name = _name.split(" ");

  if (_name.length > 1) return _name[0].charAt(0) + "" + _name[1].charAt(0);

  return _name[0].charAt(0);
};

export const getCurrentDate = () => {
  let current = moment();

  return {
    to_date: current.toDate(),
    to_str: current.toString(),
    prettier: {
      date: current.format("DD-MMM-YYYY"),
      time: current.format("hh:mm a"),
      fromNow: current.fromNow(),
    },
  };
};

export const formatDate = (_date) => {
  let newDate = moment(_date);

  return {
    to_date: newDate.toDate(),
    to_str: newDate.toString(),
    prettier: {
      date: newDate.format("DD-MMM-YYYY"),
      time: newDate.format("hh:mm a"),
      fromNow: newDate.fromNow(),
    },
  };
};

export const getOverAll = (_list) => {
  let getSum = 0;
  let giveSum = 0;

  _list.forEach((item) => {
    item.trades.forEach((tradeItem) => {
      if (!tradeItem.borrow) getSum += tradeItem.amount;
      else giveSum += tradeItem.amount;
    });
  });

  return {
    will_get: getSum,
    will_give: giveSum,
  };
};

export const getTotal = (_list) => {
  let getSum = 0;
  let giveSum = 0;

  _list.forEach((item) => {
    if (!item.borrow) getSum += item.amount;
    else giveSum += item.amount;
  });

  return {
    will_get: getSum,
    will_give: giveSum,
    diff: getSum - giveSum,
  };
};

export const isExist = (_list, _id) => {
  for (let i = 0; i < _list.length; i++) {
    if (_list[i].id === _id) return true;
  }

  return false;
};
