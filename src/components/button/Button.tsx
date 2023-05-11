import React from "react";

export const Button = (props: { onClick: React.MouseEventHandler<HTMLButtonElement> | undefined; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  
  return <button onClick={props.onClick}>{props.children}</button>;
}

