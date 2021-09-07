import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TaskCard from "./TaskCard";

import { TasksContext } from "../../contexts/TasksContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    calendarColumn: {
      width: "calc(100%/7)",
    },
  })
);

export default function Calendarontent() {
  const classes = useStyles();

  const { weekTasks } = React.useContext(TasksContext);

  return (
    <Grid container justifyContent="space-evenly" spacing={1}>
      {weekTasks.map((day, i) => (
        <Grid item className={classes.calendarColumn} key={i}>
          {day.map(
            (task) =>
              !task.isConcluded && <TaskCard key={task.id} task={task} />
          )}
          {day.some((task) => task.isConcluded) && (
            <>
              <Typography component="span" variant="body1" gutterBottom>
                <Box ml={2} mb={2} mt={2} fontWeight="bold">
                  Concluidos
                </Box>
              </Typography>
              {day.map(
                (task) =>
                  task.isConcluded && <TaskCard key={task.id} task={task} />
              )}
            </>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
