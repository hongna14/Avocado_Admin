import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
} from "react-admin";

export const CustomerList = (props: any) => {
  console.log("PROPS", props);

  return (
    <List {...props} perPage={5}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="customer_name" />
        <TextField source="customer_address" />
        <TextField source="customer_phone" />
        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};
