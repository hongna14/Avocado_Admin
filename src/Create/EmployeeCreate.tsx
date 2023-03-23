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
// import RichTextInput from 'ra-input-rich-text';

const validatePhone = (value: string) => {
  const phoneRegex = /^0\d{8}$/; // regular expression to match 10-digit phone numbers

  if (!value.match(phoneRegex)) {
    return "Please enter a valid phone number";
  }
  return undefined; // return undefined if validation passes
};
export const EmployeeCreate = () => {
  const notify = useNotify();

  const onError = (error: any) => {
    console.log(error.response.data.error.message);
    notify(`${error.response.data.error.message}`);
  };

  return (
    <Create mutationOptions={{ onError }}>
      <SimpleForm>
        <TextInput source="employee_name" validate={[required()]} fullWidth />
        <TextInput
          source="employee_position"
          validate={[required()]}
          fullWidth
        />
        <TextInput
          source="employee_phone_number"
          validate={[required(), validatePhone]}
          fullWidth
        />

        <NumberInput
          source="coffee_shop_id"
          validate={[required()]}
          fullWidth
        />
        {/* <RichTextInput source="body" /> */}
      </SimpleForm>
    </Create>
  );
};
