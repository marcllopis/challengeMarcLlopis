import React, { useState } from "react";
import { CardWrapper, SongWrapper } from "./Card.styles";

interface ICard {
  id: number;
  firstName: string;
  profession: string;
  email: string;
  song: string;
  action: (loompaId: number, isChosenActive: boolean) => void;
}

type ICardProps = React.FC<ICard>;

const Card: ICardProps = ({
  id,
  action,
  firstName,
  profession,
  email,
  song,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = (id: number) => {
    action(id, isActive);
    setIsActive(!isActive);
  };

  // const formatSongLength = (songText: string) =>
  //   songText.length > 70 ? `${songText.substring(0, 70)}...` : song;

  return (
    <CardWrapper isActive={isActive}>
      <h2>{firstName}</h2>
      <p>{profession}</p>
      <p>{email}</p>
      <SongWrapper>{song}</SongWrapper>
      <button onClick={() => handleClick(id)}>
        {isActive ? "Discard" : "Choose"}
      </button>
    </CardWrapper>
  );
};

export default Card;
