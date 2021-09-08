import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  CropRotate as CropRotateIcon,
  Dashboard as DashboardIcon,
  EventNote as EventNoteIcon,
  House as HouseIcon,
  LibraryAddCheck as LibraryAddCheckIcon,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

import SeazoneLogo from "../assets/images/seazone-logo.png";

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      background: "#151926",
    },
    drawerContainer: {
      overflow: "auto",
    },
    seazoneLogo: {
      width: 131,
      height: 20,
      background: `url("${SeazoneLogo}") no-repeat center`,
      margin: theme.spacing(2),
    },
    divider: {
      background: "#262E35",
    },
    listItem: {
      "& *": { color: "#fff" },
    },
    listItemIcon: {
      minWidth: theme.spacing(5),
    },
  })
);

const menuItems: { label: string; icon: React.ReactNode; path: string }[] = [
  {
    label: "Controle",
    icon: <LibraryAddCheckIcon />,
    path: "/",
  },
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "/dashboard",
  },
  {
    label: "Multicalendário",
    icon: <EventNoteIcon />,
    path: "/multi-calendario",
  },
  {
    label: "Propriedades",
    icon: <HouseIcon />,
    path: "/propriedades",
  },
  {
    label: "Despesas",
    icon: <CropRotateIcon />,
    path: "/despesas",
  },
];

export default function Navbar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerContainer}>
        <Link to="/">
          <div className={classes.seazoneLogo} />
        </Link>
        <Divider light variant="middle" className={classes.divider} />
        <List>
          {menuItems.map((item) => (
            <ListItem
              component={Link}
              to={item.path}
              button
              key={item.label}
              className={classes.listItem}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
}
