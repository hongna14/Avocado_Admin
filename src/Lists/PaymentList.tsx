import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
} from "react-admin";

export const PaymentList = (props: any) => {
  console.log("PROPS", props);
  return (
    <List {...props} perPage={5}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="payment_type_description" />
        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};
