import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const onSent = async (prompt) => {
    console.log("onsent started");
    setLoading(true);
    try {
        console.log("inside try");
      const result = await run(prompt);
      console.log("run command called");
      setResultData(result);
      console.log(resultData);
      setShowResult(true);
      setPrevPrompts((prev) => [...prev, prompt]);
    } catch (error) {
      console.error("Error sending prompt:", error);
    } finally {
        console.log("finnaly section");
      setLoading(false);
    }
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
