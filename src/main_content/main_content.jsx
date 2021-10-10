import "./main_content.css";
import AbdulKalam from "./apj.jpg";
import JavaScript from "./js.jpg";
import Calculator from "./calculator.jpg";

const MainContent = () => {
    return(
        <div className="main_content">
            <div style={{
                textDecoration : "underline",
                fontSize : "20px",
            }}>
                These are some of my projects
            </div>
            <div className="work">
                <div>
                    <div>
                        <img src={AbdulKalam} alt="Abdul Kalam"></img>
                    </div>
                    <div className="footer">Tribute</div>
                </div>
                <div>
                    <div>
                        <img src={JavaScript} alt="JavaScript"></img>
                    </div>
                    <div className="footer">JavaScript Code</div>
                </div>
                <div>
                    <div>
                        <img src={Calculator} alt="Calculator"></img>
                    </div>
                    <div className="footer">Calculator</div>
                </div>
            </div>
            <button>Show all &#8618;</button>
        </div>
    );
}
export default MainContent;