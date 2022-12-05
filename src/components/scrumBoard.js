import React, {useState} from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import BOARD from "../assets/board.js";
import "../style/scrum.css";

const board = {
    columns: [
      {
        id: 1,
        title: "Yet to Start",
        cards: [
          {
            id: 1,
            title: "Card title 1",
            description: "Card content"
          },
          {
            id: 2,
            title: "Card title 2",
            description: "Card content"
          },
          {
            id: 3,
            title: "Card title 3",
            description: "Card content"
          }
        ]
      },
      {
        id: 2,
        title: "Doing",
        cards: [
          {
            id: 9,
            title: "Card title 9",
            description: "Card content"
          }
        ]
      },
      {
        id: 3,
        title: "Q&A",
        cards: [
          {
            id: 10,
            title: "Card title 10",
            description: "Card content"
          },
          {
            id: 11,
            title: "Card title 11",
            description: "Card content"
          }
        ]
      },
      {
        id: 4,
        title: "Production",
        cards: [
          {
            id: 12,
            title: "Card title 12",
            description: "Card content"
          },
          {
            id: 13,
            title: "Card title 13",
            description: "Card content"
          }
        ]
      }
    ]
  };

export  function ScrumBoard() {
    // You need to control the state yourself.
    // const [controlledBoard, setBoard] = useState(board);
  
    // function handleCardMove(_card, source, destination) {
    //   const updatedBoard = moveCard(controlledBoard, source, destination);
    //   setBoard(updatedBoard);
    // }
  
    return (
    //   <Board onCardDragEnd={handleCardMove} disableColumnDrag>
    //     {controlledBoard}
    //   </Board>

    <Board
          //Allowing Remove item//
            allowRemoveCard
        //   allowRemoveColumn
          //Allowing Renaming item//
          //allowRenameColumn
          //On Removing item//
          onCardRemove={console.log}
          onColumnRemove={console.log}
          //On Renaming item//
          onColumnRename={console.log}
          initialBoard={BOARD}
          //Allowing Add item//
          allowAddCard={{ on: "top" }}
          onNewCardConfirm={(draftCard) => ({
            id: new Date().getTime(),
            ...draftCard
          })}
          onCardNew={console.log}
        //   allowAddColumn={{ on: "right" }}
        //   onNewColumnConfirm={(draftColumn) => ({
        //     id: new Date().getTime(),
        //     title: "new Card",
        //     ...draftColumn
        //   })}
          onColumnNew={console.log}
        />
    );
  }