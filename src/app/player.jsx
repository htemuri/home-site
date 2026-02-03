"use client";
import * as AsciinemaPlayer from "asciinema-player";
import React from "react";

export default function TerminalPlayer() {
  React.useEffect(() => {
    AsciinemaPlayer.create("/demo.cast", document.getElementById("player"), {
      controls: false,
      autoPlay: true,
      fit: "height",
      cols: 100,
      rows: 39,
    });
  }, []);
  return <div id="player" className="h-full w-full"></div>;
}
