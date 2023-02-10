import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import {
  ArrowDownwardOutlined,
  Instagram,
  LinkedIn,
  SouthEast,
  Twitter,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";

export const tradeStats = [
  {
    id: 1,
    Name: "Bitcoin",
    Camount: "$8.313",
    TradeImg: `https://igamingsecurity.io/assets/images/2020/09/line-update-2.png`,
    icon: <ArrowOutwardIcon style={{ color: "green" }} />,
  },
  {
    id: 2,
    Name: "Ethereum",
    Camount: "$17.000",
    TradeImg: `https://igamingsecurity.io/assets/images/2020/09/line-update-2.png`,
    icon: <SouthEast style={{ color: "yellow" }} />,
  },
  {
    id: 3,
    Name: "Ripple",
    Camount: "$10.586",
    TradeImg: `https://igamingsecurity.io/assets/images/2020/09/line-update-2.png`,
    icon: <ArrowOutwardIcon style={{ color: "green" }} />,
  },
  {
    id: 4,
    Name: "Litcoin",
    Camount: "$0.652",
    TradeImg: `https://igamingsecurity.io/assets/images/2020/09/line-update-2.png`,
    icon: <ArrowDownwardOutlined style={{ color: "red" }} />,
  },
];

export const exchange = [
  {
    id: 1,
    exchange: "Sell",
    price: "0.00017",
    option1: "BTC",
    option2: "PIE",
    option3: "DODGE",
  },
  {
    id: 2,
    exchange: "Buy",
    price: "7.66600",
    option1: "USD",
    option2: "YEN",
    option3: "NAIRA",
  },
];

export const icon = [
  {
    socialI: <FacebookIcon className="bg-green-500 text-black round" />,
  },
  {
    socialI: <LinkedIn className="bg-green-500 text-black round" />,
  },
  {
    socialI: <Instagram className="bg-green-500 text-black round" />,
  },
  {
    socialI: <Twitter className="bg-green-500 text-black round" />,
  },
];
