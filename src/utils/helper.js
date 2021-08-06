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
