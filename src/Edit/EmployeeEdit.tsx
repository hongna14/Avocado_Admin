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

export const EmployeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="employee_name" validate={required()} />
      <TextInput source="employee_position" validate={required()} />
      <TextInput source="employee_phone_number" validate={required()} />
      <NumberInput source="coffee_shop_id" validate={required()} />
    </SimpleForm>
  </Edit>
);
