import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "../SelectorPago/selectorPago.css";
import Logo from "../../Navbar/Logo/Logo";

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

export default function SelectorPago({ total }) {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <div className="container-selector">
        <div className="container-logoSelector">
          <span className="span-selector"></span>
          <Logo />
          <div className="container-selector-Selector">
            <MyFormControlLabel
              value="first"
              label="Deposito o Transferencia Bancaria"
              control={<Radio />}
            />
            <MyFormControlLabel
              value="second"
              label="Mercadopago - Tarjetas Online, PagoFacil, RapiPago"
              control={<Radio />}
            />
          </div>
        </div>
        <div className="container-precioFinal">
          <h2 className="total">Total:</h2>
          <h2 className="precioFinal">${total}</h2>
        </div>
      </div>
    </RadioGroup>
  );
}
