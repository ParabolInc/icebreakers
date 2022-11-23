import { Logo } from "./LogoLight";
import { BackgroundImage } from "./BackgroundImage";
import React from "react";

export const parabolColor = `#4a3272`;
export const color = `#fff`;
export const spacing = 16;
export const maxWidth = 600;
export const h1fontSize = 40;
export const h2fontSize = 28;
export const fontSize = 16;

interface Props {
  children: React.ReactNode;
}

export const OpenGraphImage = ({ children }: Props) => {
  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          display: "flex",
        }}
      >
        <BackgroundImage />
      </div>
      <div style={{ display: "flex" }}>
        <Logo height={42} width={204} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: spacing * 3,
          backgroundColor: "white",
          color: parabolColor,
          borderRadius: spacing,
          margin: spacing * 2,
        }}
      >
        <h2
          style={{
            fontSize: h2fontSize,
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {children}
        </h2>
      </div>
    </main>
  );
};
