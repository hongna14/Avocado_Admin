import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  useNotify,
  DateInput,
} from "react-admin";

export const OrderCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <DateInput
          label="Publication date"
          source="order_date"
          defaultValue={new Date()}
        />
        {/* <TextInput source="order_date" validate={[required()]} fullWidth /> */}
        <NumberInput
          source="order_quantity"
          validate={[required()]}
          fullWidth
        />
        <TextInput source="product_id" validate={[required()]} fullWidth />
        <TextInput source="coffee_shop_id " validate={[required()]} fullWidth />
        <TextInput source="customer_id" validate={[required()]} fullWidth />
        <TextInput source="payment_type_id" validate={[required()]} fullWidth />
      </SimpleForm>
    </Create>
  );
};
