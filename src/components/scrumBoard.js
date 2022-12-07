import React, {useState} from "react";
import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
import BOARD from "../assets/board.js";
import "../style/scrum.css";

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