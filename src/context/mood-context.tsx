import { useContext } from "react";
import { createContext } from "react";

const moodContext = createContext<any>(null!);

export function useMoodContext(){
  return useContext(moodContext);
}
export default moodContext;
