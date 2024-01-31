import { TextField, Button } from '@mui/material';
function TagField() {
  return (
    <>
      <TextField
        label="Taggar (ange flera separerade med kommatecken)"
        name="tags"
      />
      <Button>Lägg till tagg(ar)</Button>
    </>
  );
}

export default TagField;
