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

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="product_name" validate={required()} />
      <NumberInput source="product_price" validate={required()} />
      <NumberInput source="product_type_id" validate={required()} />
    </SimpleForm>
  </Edit>
);
