import React from "react";
import "./grid.css";

const Grid = () => {
  return (
    <div className="container">
      <div className="item">
        <img
          src={
            "https://images.unsplash.com/uploads/14128434147336bfb286b/e76494ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          alt="G1"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://images.unsplash.com/photo-1443926886562-c91054221a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
          }
          alt="G2"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://images.unsplash.com/11/dreamcatcher.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          }
          alt="G3"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://i.picsum.photos/id/1013/4256/2832.jpg?hmac=UmYgZfqY_sNtHdug0Gd73bHFyf1VvzFWzPXSr5VTnDA"
          }
          alt="G4"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://images.unsplash.com/11/dreamcatcher.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
          }
          alt="G5"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          }
          alt="G6"
          class="galImg"
        />
      </div>
      <div className="item">
        <img
          src={
            "https://i.picsum.photos/id/1033/2048/1365.jpg?hmac=zEuPfX7t6U866nzXjWF41bf-uxkKOnf1dDrHXmhcK-Q"
          }
          alt="G7"
          class="galImg"
        />
      </div>
    </div>
  );
};

export default Grid;
