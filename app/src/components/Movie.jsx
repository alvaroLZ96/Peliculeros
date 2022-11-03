import React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Movie({ movie, deleteMovie }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        className="cardheader"
        action={
          <IconButton onClick={() => deleteMovie(movie.id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={movie.name}
        subheader={movie.year}
      />
      <CardMedia
        component="img"
        height="500"
        image={movie.poster}
        alt={movie.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p>
            <b>Direción: </b>
            {movie.director}
          </p>
          <p>
            <b>País: </b>
            {movie.country}{" "}
          </p>
          <p>
            <b>Duración: </b>
            {movie.duration}
          </p>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            <b>Sinopsis:</b>
          </Typography>
          <Typography paragraph sx={{ fontSize: 13, textAlign: "justify" }}>
            {movie.sinopsis}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
