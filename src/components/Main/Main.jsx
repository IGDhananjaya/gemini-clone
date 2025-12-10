import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

export const Main = () => {

    // --- Tambahkan sessionHistory disini ---
    const { onSent, recentPrompt, showResult, loading, resultData, input, setInput, sessionHistory } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        {/* ... (Bagian Greet & Cards biarkan sama) ... */}
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            {/* ... cards code ... */}
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        
                        {/* --- BAGIAN BARU: MAP HISTORY --- */}
                        {/* Menampilkan chat-chat sebelumnya yang sudah selesai ("diarsipkan") */}
                        {sessionHistory.map((item, index) => {
                            return (
                                <div key={index} className='result-history'>
                                    <div className="result-title">
                                        <img src={assets.user_icon} alt="" />
                                        <p>{item.prompt}</p>
                                    </div>
                                    <div className="result-data">
                                        <img src={assets.gemini_icon} alt="" />
                                        {/* Gunakan dangerouslySetInnerHTML karena data lama juga punya tag HTML */}
                                        <p dangerouslySetInnerHTML={{ __html: item.response }}></p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* ---------------------------------- */}

                        {/* Menampilkan Chat TERBARU (yang sedang loading/diketik) */}
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    {/* ... (Bagian search box biarkan sama) ... */}
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate information, including about people, so double-check its responses. Your privacy and Gemini Apps.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main