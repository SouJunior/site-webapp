import { MouseEvent } from "react";

export interface NavbarProps {
  handleLink: (event: MouseEvent<HTMLAnchorElement>) => void;
}
