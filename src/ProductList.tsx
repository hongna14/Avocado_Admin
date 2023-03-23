import { List, Datagrid, TextField, EmailField } from "react-admin";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="product_id" />
      <TextField source="product_name" />
      <TextField source="product_price" />
    </Datagrid>
  </List>
);
