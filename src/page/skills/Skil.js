import "./skill.css";
import NavbarList from "../../component/navbar/Navbar";

const Skil = () => {


    return (
        <>
            <header>
                <NavbarList />
                <div className="skill">
                    <h1 className="topik">my skilss</h1>
                    <ul>
                        <li>HTML</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "43vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder",
                                        color:"black"
                                        }}
                                    >100%
                            </span>
                        </div>
                        <br/>
                        <li>CSS</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "35vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder",
                                        color:"black"
                                        }}
                                    >80%
                            </span>
                        </div>
                        <br/>
                        <li>REACT</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "22vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder",
                                        color:"black",
                                        }}
                                    >50%
                            </span>
                        </div>
                        <br/>
                        <li>BOOTSTRAP</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "43vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder",
                                        color:"black"
                                        }}
                                    >100%
                            </span>
                        </div>
                        <br/>
                        <li>JAVASCRIPT</li>
                        <div className="progress" style={{width:"90%"}}>
                            <span 
                                    style={{
                                        width: "22vw", 
                                        background: "aqua",
                                        textAlign: "-webkit-right",
                                        fontFamily: "monospace",
                                        fontWeight: "bolder",
                                        color:"black"
                                        }}
                                    >50%
                            </span>
                        </div>
                        <br/>
                    </ul>
                </div>
            </header>
        </>
    );
};

export default Skil;