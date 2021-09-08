import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

// import Calendar from "./components/Calendar";
import Routes from "./Routes";
import Navbar from "./components/Navbar";
import { TasksProvider } from "./contexts/TasksContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function App() {
  const classes = useStyles();

  return <Routes />;
}
