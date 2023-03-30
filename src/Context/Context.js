import { createContext } from "react";

const API_KEY = "fe52661b7cbb4b5faf7175807232903";

// Context nesnesi oluşturma
const Context = createContext({
    API_KEY: API_KEY,
  });

export default Context