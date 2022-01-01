import React from 'react';
import {Player} from "./types/Player";
import {Table} from "./components/Table";

const players:Player[] = [
 new Player("Sean"),
 new Player("Charlie")
]

function App() {
  return (
    <Table players={players}/>
  );
}

export default App;
