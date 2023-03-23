import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  NumberInput,
  useNotify,
} from "react-admin";
// import RichTextInput from "ra-input-rich-text";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="product_name" validate={[required()]} fullWidth />
      <NumberInput source="product_price" validate={[required()]} fullWidth />
      <NumberInput source="product_type_id" validate={[required()]} fullWidth />
    </SimpleForm>
  </Create>
);
