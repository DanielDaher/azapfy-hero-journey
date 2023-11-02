import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const formStyle = {
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: 1,
  backgroundColor: '#121212',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: '15em',
  gap: '1.2em',
};

const inputMargins = {
  marginTop: '30px',
  marginBottom: '10px'
}


export default function SearchInput(props) {
  const { searchHero } = props;
  const [ inputValue, setInputValue ] = useState('');

  const cleanInput = () => {
    setInputValue('');
    searchHero('');
  }

  const submitSearch = (e) => {
    e.preventDefault();
    searchHero(inputValue);
  }

  return (
    <form onSubmit={(e) => submitSearch(e)} style={formStyle}>
      <TextField
          label="Pesquisar"
          variant="outlined"
          value={inputValue}
          sx={inputMargins}
          onChange={(e) => setInputValue(e.target.value.toUpperCase())}
        />
        <Button
          variant="outlined"
          size="medium"
          sx={inputMargins}
          onClick={() => searchHero(inputValue)}
        >
          Pesquisar
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={inputMargins}
          onClick={() => cleanInput()}
        >
          Limpar
        </Button>
    </form>
  );
}