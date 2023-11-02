import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { HeroesContext } from "@/context/HeroesContext";

const firstBoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70vw',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const secondBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px'
};

export default function BattleModal() {
  const { selectedHeroes, setSelectedHeroes } = useContext(HeroesContext);
  const [ open, setOpen ] = useState(selectedHeroes.length === 2);

  const setAttributeColor = (hero, attribute) => {
    const otherHero = selectedHeroes.find(({ id }) => id !== hero.id);
    if (hero.powerstats[attribute] > otherHero.powerstats[attribute]) {
      return 'lightgreen'
    }
  }

  const calculateTotalPoints = (hero) => Object.values(hero.powerstats).reduce((total, value) => total + value, 0);

  const ShowWinner = () => {
    const tie = 'Ninguém';
    const [firstHero, secondHero] = selectedHeroes;

    const firstHeroTotalPoints = calculateTotalPoints(firstHero);
    const secondHeroTotalPoints = calculateTotalPoints(secondHero);

    if (firstHeroTotalPoints === secondHeroTotalPoints) return tie;
    return firstHeroTotalPoints > secondHeroTotalPoints ? firstHero.name : secondHero.name;
  }

  const closeModal = () => {
    setOpen(false);
    setSelectedHeroes([]);
  }

  return (
    <Modal
        open={ open }
        onClose={ closeModal }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={firstBoxStyle}>
          <Typography id="modal-modal-title" variant="h3" component="h3">
            { <ShowWinner /> } venceu esta batalha!
          </Typography>
          <Box sx={secondBoxStyle}>
            <img src={selectedHeroes[0].images.md} width='200' alt={`Imagem de ${ selectedHeroes[0].name }`} />
            { selectedHeroes.map((hero) => {
              const attributes = Object.keys(hero['powerstats']);
                return (
                  <div key={`${hero.id} ${hero.name}`}>
                    <Typography color='text.secondary' variant="h4">
                      { hero.name.toUpperCase() }
                    </Typography>
                    { 
                      attributes.map((attribute) => (
                        <Typography
                          variant="h6" 
                          color={ setAttributeColor(hero, attribute) } 
                          key={`${hero.id} ${attribute}`}
                        >
                          { `${attribute}: ${ hero.powerstats[attribute] }` }
                        </Typography>
                      )) 
                    }
                    <Typography color='text.secondary' variant="h6">
                    { `Total: ${ calculateTotalPoints(hero) }` }
                    </Typography>
                  </div>
                )
              }) 
            }
            <img src={selectedHeroes[1].images.md} width='200' alt={`Imagem de ${ selectedHeroes[1].name }`} />
          </Box>
        </Box>
      </Modal>
  );
}