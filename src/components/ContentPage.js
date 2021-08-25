import handover from "../images/handover.png";
import trophy from "../images/trophy.png";
import items from "../images/items.png";
import logo from "../images/logo.png";

function Content() {
    return (
        <div className="content-box">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="box-1">
                <div className="trophyimage-div">
                    <img className="trophy-img" src={trophy} alt="trophy_image" />
                </div>
                <div className="description">
                    <h4>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h4>
                    <ul>
                        <li>
                            C.R.I.'s energy efficient products are well recognized by various Government Institutions,
                            as trustworthy products for various projects across the globe to save energy.
                        </li>
                        <li>
                            C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency
                            Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient
                            smart pumps with IoT enabled control panel.
                        </li>
                    </ul>
                    <img src={handover} alt="handover_image" />
                    <p>
                        Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>.
                        Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra
                        Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
                    </p>
                </div>
            </div>

            <div className="box-2">
                <p>
                    INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF
                    MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </p>
                <img className="items-img" src={items} alt="items_image" />
                <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
                <hr></hr>
            </div>

            <div className="box-3">
                <h4>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h4>
                <p>
                    CHEMICALS & PROCESS <em>|</em> POWER <em>|</em> WATER & WASTE WATER <em>|</em> OILS & GAS <em>|</em>{" "}
                    PHARMA <em>|</em> SUGARS & DISTILLERIES <em>|</em> PAPER & PULP <em>|</em> MARINE & DEFENCE{" "}
                    <em>|</em> METAL & MINING <em>|</em> FOOD & BEVERAGE <em>|</em> PETROCHEMICAL & REFINERIES{" "}
                    <em>|</em> SOLAR <em>|</em> BUILDING <em>|</em> HVAC <em>|</em> FIRE <em>|</em> FIGHTING <em>|</em>{" "}
                    AGRICULTURE & RESIDENTIAL
                </p>
            </div>
        </div>
    );
}

export default Content;
