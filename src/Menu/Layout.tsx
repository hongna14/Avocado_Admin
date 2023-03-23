import { Layout, LayoutProps } from "react-admin";
import { MyAppBar } from "./AppBar";

import { MyMenu } from "./MenuIcon";

export const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
  <Layout {...props} menu={MyMenu} appBar={MyAppBar} />
);
