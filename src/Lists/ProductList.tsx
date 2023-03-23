import { List, Datagrid, TextField, EditButton, TextInput } from "react-admin";

export const ProductList = (props: any) => {
  console.log("PROPS", props);
  return (
    <List {...props} perPage={5} filters={productFilters}>
      <Datagrid rowClick="edit">
        <TextField source="id" label="Mã Số" />
        <TextField source="product_name" label="Tên Sản Phẩm" />
        <TextField source="product_price" label="Giá Sản Phẩm" />
        <EditButton label="Chỉnh Sửa" />
      </Datagrid>
    </List>
  );
};

const productFilters = [
  // <TextInput label="Search" source="" alwaysOn />,
  <TextInput label="Tên Sản Phẩm" source="product_name" />,
];
