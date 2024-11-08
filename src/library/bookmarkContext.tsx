import { createContext } from "react";
import { Bookmark } from "./types";

export const BookmarkContext = createContext<Bookmark[]>([]);
