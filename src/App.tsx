import * as React from "react";
import {
  Admin,
  Resource,
  Login,
  defaultTheme,
  CustomRoutes,
} from "react-admin";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { dataProvider } from "./DataProvider/DataProvider";
import { EmployeeList } from "./Lists/EmployeeList";
import { ProductList } from "./Lists/ProductList";
import { authorProvider } from "./AuthorProvider/AuthorProvider";
import { Route } from "react-router-dom";
import { MyLoginPage } from "./LoginPage";
import { EmployeeCreate } from "./Create/EmployeeCreate";
import { ProductCreate } from "./Create/ProductCreate";
import { EmployeeEdit } from "./Edit/EmployeeEdit";
import { ProductEdit } from "./Edit/ProductEdit";
import { CoffeeShopList } from "./Lists/CoffeeShopList";
import { CoffeeShopCreate } from "./Create/CoffeeShopCreate";
import { CoffeeShopEdit } from "./Edit/CoffeeShopEdit";
import { OrderList } from "./Lists/Order";
import { CustomerList } from "./Lists/CustomerList";
import { PaymentList } from "./Lists/PaymentList";
import { OrderCreate } from "./Create/OrderCreate";
import { MyLayout } from "./Menu/Layout";
import { Profile } from "./Profile/Profile";
import { i18nProvider } from "./Languages/i18nProvider";
const theme = {
  ...defaultTheme,
  palette: {
    mode: "dark",
  },
};
const App = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authorProvider}
    loginPage={MyLoginPage}
    layout={MyLayout}
    i18nProvider={i18nProvider}
  >
    {(permissions) => {
      console.log("permissions", permissions);
      return (
        <>
          <Resource name="" list={Profile} />
          <Resource
            name="products"
            list={ProductList}
            create={ProductCreate}
            edit={ProductEdit}
          />
          <Resource
            name="coffeeShop"
            create={CoffeeShopCreate}
            list={CoffeeShopList}
            edit={CoffeeShopEdit}
          />
          {permissions === "admin" ? (
            <>
              <Resource
                name="customers"
                // create={CoffeeShopCreate}
                list={CustomerList}
                // edit={CoffeeShopEdit}
              />
              <Resource
                name="employees"
                create={EmployeeCreate}
                list={EmployeeList}
                edit={EmployeeEdit}
              />
            </>
          ) : null}
          <Resource
            name="paymentType"
            // create={CoffeeShopCreate}
            list={PaymentList}
            // edit={CoffeeShopEdit}
          />
        </>
      );
    }}
    {/* <CustomRoutes>
      <Route key="myProfile" path="/myProfile" Component={Profile} />
    </CustomRoutes> */}
  </Admin>
);

export default App;
