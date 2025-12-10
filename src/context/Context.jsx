import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    // --- BARU: State untuk menyimpan riwayat chat dalam satu sesi ---
    const [sessionHistory, setSessionHistory] = useState([]); 

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setSessionHistory([]); // --- BARU: Reset riwayat sesi saat chat baru ---
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        
        if (prompt !== undefined) {
            // Jika klik dari sidebar, kita mulai sesi bersih
            setSessionHistory([]); 
            response = await runChat(prompt);
            setRecentPrompt(prompt)
        }
        else {
            if (!showResult) {
                setPrevPrompts(prev => [...prev, input]);
            } else {
                // --- LOGIKA BARU ---
                // Jika ini adalah chat lanjutan (bukan chat pertama),
                // Simpan chat TERAKHIR (recentPrompt & resultData) ke array history
                // sebelum kita menimpanya dengan input baru.
                setSessionHistory(prev => [...prev, {
                    prompt: recentPrompt,
                    response: resultData
                }]);
            }
            
            setRecentPrompt(input);
            response = await runChat(input);
        }

        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>");
        let newResponseArray = newResponse2.split(" ");
        for (let i = 0; i < newResponseArray.length; i++) {
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput("");
    }

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
        newChat,
        sessionHistory // --- Jangan lupa export state ini ---
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider