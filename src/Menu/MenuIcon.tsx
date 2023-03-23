import { Menu } from "react-admin";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeckIcon from "@mui/icons-material/Deck";
import Face4Icon from "@mui/icons-material/Face";
import GroupsIcon from "@mui/icons-material/Groups";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { Profile } from "../Profile/Profile";
export const MyMenu = () => (
  <Menu>
    <Menu.Item
      to="products"
      primaryText="Product"
      leftIcon={<ShoppingCartIcon />}
    />
    <Menu.Item to="coffeeShop" primaryText="Coffee Shop" leftIcon={<>🥑</>} />
    <Menu.Item to="customers" primaryText="Customer" leftIcon={<Face4Icon />} />
    <Menu.Item
      to="employees"
      primaryText="Employee"
      leftIcon={<GroupsIcon />}
    />
    <Menu.Item
      to="paymentType"
      primaryText="Payment Type"
      leftIcon={<MonetizationOnIcon />}
    />
    {/* <Menu.Item to="myProfile" primaryText="Payment Type" leftIcon={<>🐷</>} /> */}
  </Menu>
);
