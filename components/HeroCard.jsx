import { useContext } from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { HeroesContext } from "@/context/HeroesContext";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
const LIMIT_OF_STRING_CHARACTERS = 100;
const checkboxIconStyle = {
  position: "absolute",
  top: "0.5em",
  right: "0.5em",
  height: "1.5em",
  width: "1.5em"
}

export default function HeroCard(props) {
  const {
    heroData: {
      name,
      images,
      work: { occupation },
      biography: { publisher },
    },
  } = props;

  const { selectNewHero, selectedHeroes } = useContext(HeroesContext);


  return (
    <Card sx={{ width: 400, position: 'relative' }} onClick={() => selectNewHero(props.heroData)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={images.md}
          alt={`imagem de ${ name }`}
        />
        <CardContent sx={{ height: '14em' }}>
          <Typography gutterBottom variant="h5" component="div">
            { name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { publisher }
          </Typography>
          <Typography variant="h6" color="text.secondary" title={occupation}>
            { occupation === "-"
              ? 'Nenhuma ocupação encontrada'
              : `
                    ${occupation.slice(0, LIMIT_OF_STRING_CHARACTERS)}
                    ${
                      occupation.length > LIMIT_OF_STRING_CHARACTERS
                        ? "..."
                        : ""
                    }
                  `
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        selectedHeroes.find((el) => el.name === name) ? (
          <CheckBoxIcon
            onClick={() => selectNewHero(props.heroData)}
            sx={checkboxIconStyle}
          />
        ) : (
          <CheckBoxOutlineBlankIcon
            onClick={() => selectNewHero(props.heroData)}
            sx={checkboxIconStyle}
          />
      )}

    </Card>
  );
}
