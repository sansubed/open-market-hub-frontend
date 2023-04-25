import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { TypographyProps } from "@chakra-ui/react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "button"
  | "overline"
  | "inherit";

interface AnimatedTextOptions extends TypographyProps {
  color: string;
  text: string;
  variant?: Variant | "inherit";
}

const AnimatedText = ({ color, text, variant }: AnimatedTextOptions) => {
  const characters = text.split("");

  return (
    <Typography variant={variant} align="center" color={color} gutterBottom>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          custom={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 500,
            damping: 20,
          }}
        >
          {char}
        </motion.span>
      ))}
    </Typography>
  );
};

export default AnimatedText;
