import { Broadcast, CreditCard, Droplet, HddNetwork, Lightbulb, Phone, Telephone, Tv } from "react-bootstrap-icons";

export const services = [
  {
    id: 1,
    title: "Mobile",
    subTitle: "Mobile recharge",
    amount: "1,903",
    icon: <Phone size={40} className="img-fluid" />,
  },
  {
    id: 2,
    title: "DTH",
    subTitle: "DTH Recharge",
    amount: "3,500",
    icon: <HddNetwork size={40} className="img-fluid" />,
  },
  {
    id: 3,
    title: "DataCard",
    subTitle: "DataCard Recharge",
    amount: "7,250",
    icon: <CreditCard size={40} className="img-fluid" />,
  },
  {
    id: 4,
    title: "LandLine",
    subTitle: "Landline Bill",
    amount: "2350",
    icon: <Telephone size={40} className="img-fluid" />,
  },
  {
    id: 5,
    title: "Broadband",
    subTitle: "Broadband Bill",
    amount: "1,903",
    icon: <Broadcast size={40} className="img-fluid" />,
  },
  {
    id: 6,
    title: "Electricity",
    subTitle: "Electricity Bill",
    amount: "3,500",
    icon: <Lightbulb size={40} className="img-fluid" />,
  },
  {
    id: 7,
    title: "Gas",
    subTitle: "Gas Bill",
    amount: "7,250",
    icon: <Droplet size={40} className="img-fluid" />,
  },
  {
    id: 8,
    title: "Cable",
    subTitle: "Cable Recharge",
    amount: "2350",
    icon: <Tv size={40} className="img-fluid" />,
  },
];
