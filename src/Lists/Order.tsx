import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
} from "react-admin";

export const OrderList = (props: any) => {
  console.log("PROPS", props);
  return (
    <List {...props} perPage={5}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <ReferenceField source="product_id" reference="products">
          <TextField source="product_name" />
        </ReferenceField>
        <TextField source="order_quantity" />
        {/* <TextField source="coffee_shop_id" /> */}
        <ReferenceField source="coffee_shop_id" reference="coffeeShop">
          <TextField source="coffee_shop_address" />
        </ReferenceField>
        <ReferenceField source="customer_id" reference="customers">
          <TextField source="customer_name" />
        </ReferenceField>
        <ReferenceField source="payment_type_id" reference="paymentType">
          <TextField source="payment_type_description" />
        </ReferenceField>
        <EditButton label="Edit" />
        {/* <TextField source="description" /> */}
      </Datagrid>
    </List>
  );
};
