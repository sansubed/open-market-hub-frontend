import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#fff",
    },
    "&:hover fieldset": {
      borderColor: alpha("#fff", 0.5),
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-input": {
    color: "#fff",
  },
}));

interface SearchProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const handleClear = () => {
    setValue("");
    onChange("");
  };

  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            {value && (
              <IconButton onClick={handleClear}>
                <SearchIcon />
              </IconButton>
            )}
          </InputAdornment>
        ),
        style: {
          paddingRight: value ? 0 : undefined,
        },
      }}
    />
  );
};

export default Search;
