import {Player} from "../types/Player";

export interface TableProps {
  players:Player[]
}

export function Table(props:TableProps) {
  return (
    <div className="App">
      {props.players.map((player:Player) => (
          <div>{player.firstName}</div>
      ))}
    </div>
  );
}
