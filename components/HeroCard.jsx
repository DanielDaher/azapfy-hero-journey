import { useContext } from "react";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { HeroesContext } from "@/context/HeroesContext";
const LIMIT_OF_STRING_CHARACTERS = 100;

export default function HeroCard(props) {
  const {
    heroData: {
      name,
      images,
      work: { occupation },
      biography: { publisher },
    },
  } = props;

  const { selectNewHero } = useContext(HeroesContext);


  return (
    <Card sx={{ width: 400 }} onClick={() => selectNewHero(props.heroData)}>
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
    </Card>
  );
}
