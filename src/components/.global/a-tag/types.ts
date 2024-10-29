import { MouseEventHandler, ReactNode } from "react";

export interface ATagProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  children: ReactNode;
}
