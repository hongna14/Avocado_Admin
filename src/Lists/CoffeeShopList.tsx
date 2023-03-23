import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  ReferenceManyCount,
  usePermissions,
  useGetIdentity,
} from "react-admin";

export const CoffeeShopList = (props: any) => {
  console.log("PROPS", props);
  const permissions = usePermissions();
  console.log("permission", permissions);

  // alert(data);
  return (
    <List {...props} perPage={5}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        {/* <TextField source="coffee_shop_id" /> */}
        {/* <TextField source="coffee_shop_name" /> */}
        <TextField source="coffee_shop_address" />
        <TextField source="coffee_shop_phone_number" />
        <ReferenceManyField
          label="Employees"
          reference="employees"
          target="coffee_shop_id"
        >
          <SingleFieldList>
            <ChipField source="employee_name" />
          </SingleFieldList>
        </ReferenceManyField>
        <ReferenceManyCount
          label="Total Employee"
          reference="employees"
          target="coffee_shop_id"
        />

        <EditButton label="Edit" />
      </Datagrid>
    </List>
  );
};
