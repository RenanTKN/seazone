import { Typography } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Calendar from "./components/Calendar";
import Navbar from "./components/Navbar";
import { TasksProvider } from "./contexts/TasksContext";

export const paths = {
  home: "/",
  dashboard: "/dashboard",
  multiCalendario: "/multi-calendario",
  propriedades: "/propriedades",
  despesas: "/despesas",
};

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

export default function Routes() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Navbar />
        <main className={classes.content}>
          <TasksProvider>
            <Switch>
              <Route exact path={paths.home}>
                <Calendar />
              </Route>
              <Route exact path={paths.dashboard}>
                <Typography variant="h2">WIP Dashboard</Typography>
              </Route>
              <Route exact path={paths.multiCalendario}>
                <Typography variant="h2">WIP Multi Calendário</Typography>
              </Route>
              <Route exact path={paths.propriedades}>
                <Typography variant="h2">WIP Propriedades</Typography>
              </Route>
              <Route exact path={paths.despesas}>
                <Typography variant="h2">WIP Despesas</Typography>
              </Route>
            </Switch>
          </TasksProvider>
        </main>
      </div>
    </BrowserRouter>
  );
}
