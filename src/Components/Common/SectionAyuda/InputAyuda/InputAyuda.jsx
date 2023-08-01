import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'USD',
    label: 'Consulta sobre un producto',
  },
  {
    value: 'EUR',
    label: 'Consulta general',
  },
  {
    value: 'BTC',
    label: 'Consulta sobre mi pedido',
  },
  {
    value: 'JPY',
    label: 'Necesito ayuda para realizar una compra',
  },
];

export default function InputAyuda() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField style={{width:"100%"}}
          id="outlined-select-currency"
          select
          label="Selecciona un motivo"
          defaultValue={currencies[0].value} // Establecer el valor predeterminado a 'USD' (o cualquier otro valor válido)
          placeholder='Selecciona un motivo'
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
