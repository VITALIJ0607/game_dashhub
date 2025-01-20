import { SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
import { Game } from "../entities/Game";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platformen">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Bewertung">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genre">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers?.map((publisher) => (
          <Text>{publisher.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
