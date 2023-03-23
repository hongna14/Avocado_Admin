import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  NumberInput,
  useNotify,
} from "react-admin";

export const CoffeeShopCreate = () => {
  const notify = useNotify();

  const onError = (error: any) => {
    console.log(error.response.data.error.message);
    notify(`${error.response.data.error.message}`);
  };

  return (
    <Create mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput
          source="coffee_shop_address"
          validate={[required()]}
          fullWidth
        />
        <TextInput
          source="coffee_shop_phone_number"
          validate={[required()]}
          fullWidth
        />
      </SimpleForm>
    </Create>
  );
};
