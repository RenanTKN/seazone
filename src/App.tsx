import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import CardWeek from "./components/CardWeek";
import Navbar from "./components/Navbar";

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

  return (
    <div className={classes.root}>
      <Navbar />
      <main className={classes.content}>
        <CardWeek />
      </main>
    </div>
  );
}
