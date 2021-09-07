import { Card, Grid, Typography } from "@material-ui/core";
import { blue, green, red, yellow } from "@material-ui/core/colors";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Check as CheckIcon,
  Whatshot as WhatshotIcon,
} from "@material-ui/icons";
import { TaskProps, TaskType } from "../../contexts/TasksContext";
import { isSameDate } from "../../helpers";

import CardFlag from "./CardFlag";
import { formatType } from "./format";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: (props: any) => ({
      opacity: props.isConcluded ? 0.5 : 1,
      padding: theme.spacing(1),
      paddingRight: theme.spacing(2),
      borderLeft: `5px solid ${props.color}`,
      borderRadius: `0 10px 10px 0`,
      marginBottom: 5,
    }),
    checkedIn: {
      color: "#fff",
      backgroundColor: green[400],
      padding: 0,
      width: 25,
      height: 25,
    },
    camaQuente: {},
    cardIcon: {
      fontSize: 15,
    },
  })
);

interface TaskCardProps {
  task: TaskProps;
}

const getBorderColor = (type: TaskType) => {
  switch (type) {
    case "checkin":
      return blue[800];
    case "limpeza":
      return green["A200"];
    case "checkout":
      return red[600];
  }
};

export default function TaskCard({ task }: TaskCardProps) {
  const {
    dateIn,
    dateOut,
    name,
    id,
    isCheckinComplete,
    isConcluded,
    isDataComplete,
    time,
    type,
  } = task;

  const color = getBorderColor(type);
  const props = { isConcluded, color };
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item xs={11}>
          <Typography variant="body1" color="textSecondary">
            <strong>
              {formatType(type)} {time}
            </strong>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {id}
          </Typography>
          {!!name && (
            <Typography variant="subtitle1" color="textSecondary">
              {name}
            </Typography>
          )}
        </Grid>
        <Grid item xs={1}>
          <div>
            {["checkin", "checkout"].includes(type) && (
              <CardFlag
                backgroundColor={isDataComplete ? green[400] : red[400]}
                icon={<ChatBubbleOutlineIcon />}
              />
            )}
            {type === "checkin" && isSameDate(dateIn, dateOut) && (
              <CardFlag backgroundColor={yellow[800]} icon={<WhatshotIcon />} />
            )}
            {type === "limpeza" && isCheckinComplete && (
              <CardFlag backgroundColor={green[400]} icon={<CheckIcon />} />
            )}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
