import * as React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceManyField,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  required,
  NumberInput,
} from "react-admin";

export const CoffeeShopEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      {/* <TextInput source="employee_name" validate={required()} /> */}
      <TextInput source="coffee_shop_address" validate={required()} />
      <TextInput source="coffee_shop_phone_number" validate={required()} />
      {/* <NumberInput source="coffee_shop_id" validate={required()} /> */}
    </SimpleForm>
  </Edit>
);
