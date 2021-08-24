import { getCurrentDate, formatDate } from "./helper";

export default {
  customers: [
    {
      phone: "090078601",
      id: "a3s",
      name: "Amina khan",
      date: formatDate("2021-08-24T19:29:09.989Z"),
      amount: 200,
      borrow: false,
      trades: [
        { date: "08/08/2021", amount: 100, borrow: true },
        { date: "08-08-2021", amount: 300, borrow: false },
        { date: "08-08-2021", amount: 500, borrow: true },
        { date: "08-08-2021", amount: 200, borrow: false },
        { date: "08-08-2021", amount: 400, borrow: false },
        { date: "08-08-2021", amount: 100, borrow: true },
        { date: "08-08-2021", amount: 50, borrow: false },
        { date: "08-08-2021", amount: 100, borrow: true },
        { date: "08-08-2021", amount: 1000, borrow: false },
        { date: "08-08-2021", amount: 1200, borrow: true },
        { date: "08-08-2021", amount: 1050, borrow: true },
      ],
    },
    {
      phone: "090078601",
      id: "bsd3",
      name: "Taimur",
      date: formatDate("2021-08-22T19:29:09.989Z"),
      amount: 400,
      borrow: true,
    },
    {
      phone: "090078601",
      id: "ad32",
      name: "Naveed",
      date: formatDate("2021-08-21T19:29:09.989Z"),
      amount: 400,
      borrow: false,
    },
    {
      phone: "090078601",
      id: "ssdf",
      name: "Hazrat amin",
      date: formatDate("2021-07-24T19:29:09.989Z"),
      amount: 400,
      borrow: true,
    },
    {
      phone: "090078601",
      id: "a2s",
      name: "Shahroon",
      date: formatDate("2021-05-24T19:29:09.989Z"),
      amount: 500,
      borrow: true,
    },
  ],
};
