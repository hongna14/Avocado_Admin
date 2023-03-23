import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
} from "react-admin";

export const EmployeeList = (props: any) => {
  console.log("PROPS", props);
  return (
    <List {...props} perPage={5}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="employee_position" />
        <TextField source="employee_name" />
        <TextField source="employee_phone_number" />
        {/* <TextField source="coffee_shop_id" /> */}
        <ReferenceField source="coffee_shop_id" reference="coffeeShop">
          <TextField source="coffee_shop_address" />
        </ReferenceField>
        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};
