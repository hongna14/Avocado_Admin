import {
  AppBar,
  UserMenu,
  MenuItemLink,
  useGetIdentity,
  Resource,
  CustomRoutes,
  LocalesMenuButton,
  Toolbar,
} from "react-admin";
// import SettingsIcon from "@material-ui/icons/Settings";
import { useLogout } from "react-admin";
import { Profile } from "../Profile";
import { Route } from "react-router-dom";
interface MyAppBarProps {
  // No need to define logout prop here
}
import { Typography } from "@mui/material";
const MyLogoutButton: React.FC = () => {
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  return <MenuItemLink to="/" primaryText="Logout" onClick={handleLogout} />;
};

export const MyAppBar: React.FC<MyAppBarProps> = (props) => {
  const { data } = useGetIdentity();
  return (
    <>
      <AppBar
        {...props}
        position="fixed"
        title={data?.fullName}
        userMenu={<MyUserMenu />}
      >
        {/* <Toolbar>
          <Typography flex="1" variant="h6" id="react-admin-title"></Typography>
          <LocalesMenuButton
            languages={[
              { locale: "en", name: "English" },
              { locale: "vi", name: "VietNam" },
            ]}
          />
        </Toolbar> */}
      </AppBar>
    </>
  );
};

export const MyUserMenu = () => {
  return (
    <>
      <UserMenu icon={<>🐸</>}>
        <MyLogoutButton />
        <MenuItemLink to="/myProfile" primaryText="⚙ My Profile" />
      </UserMenu>
    </>
  );
};
