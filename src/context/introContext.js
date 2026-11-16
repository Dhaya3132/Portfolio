import { createContext, useContext } from "react";

// `ready` flips to true the moment the intro curtain starts lifting,
// so above-the-fold entrance animations play in sync with it.
export const IntroContext = createContext({ ready: true });

export const useIntro = () => useContext(IntroContext);
