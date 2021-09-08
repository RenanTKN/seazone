import { Avatar } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    checkedIn: (props: any) => ({
      color: "#fff",
      backgroundColor: props.backgroundColor,
      padding: 0,
      width: 25,
      height: 25,
      marginBottom: 5,
      "& *": {
        fontSize: 15,
      },
    }),
  })
);

interface CardFlagProps {
  backgroundColor: string;
  icon: React.ReactNode;
}

export default function CardFlag({ backgroundColor, icon }: CardFlagProps) {
  const props = { backgroundColor };
  const classes = useStyles(props);

  return (
    <Avatar variant="rounded" className={classes.checkedIn}>
      {icon}
    </Avatar>
  );
}
