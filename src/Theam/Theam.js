import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModifiedTextField = styled(TextField)({
  "& fieldset": {
    borderRadius: "10px",
    
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "blue",
  },
  "&.MuiInputBase-multiline": {
    padding: 1,
  },
  margin: "8px",
});


// export const ModifiedTextFieldForNumber = styled(TextField)(({ theme }) => ({
//   "& fieldset": {
//     borderRadius: "10px",
//   },
//   "& .MuiOutlinedInput-notchedOutline": {
//     borderColor: "blue",
//   },
//   "&.MuiInputBase-multiline": {
//     padding: theme.spacing(1),
//   },
//   margin: theme.spacing(1),
//   "& input": {
//     // Enforce the input type as "number"
//     type: "number",
//   },
// }));