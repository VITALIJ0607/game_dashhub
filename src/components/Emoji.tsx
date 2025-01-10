import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bullseye.jpg";

interface Props {
  rating_top: number;
}

const Emoji = ({ rating_top }: Props) => {
  if (rating_top < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: "Ausgezeichnet" },
  };

  return <Image {...emojiMap[rating_top]} boxSize="25px" marginTop={5} />;
};

export default Emoji;
