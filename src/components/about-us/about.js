import React, { useEffect } from 'react'
import './about.scss';
import { auth } from '../../helper/Firebase';
import { useHistory } from 'react-router-dom';
import Head2 from "../head/hds";
import pr from "../../assets/pr.png"

function about() {
    return (
        <>

          <div className='whole' style={{marginBottom:"900px"}}>
                <Head2 title="Our Core" />
                
                <div classname="profess" style={{marginBottom:"500px"}}>
                    <p style={{marginTop:"100px"}}> <span style={{ width: "311px", height: "45px", marginTop: "190px", backgroundColor: "orange", fontFamily: "Calibri", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "45px", paddingBottom: "15px", paddingTop: "15px", paddingRight: "150px", textAlign:"center" }}> Dean Office</span> </p>
                <div className="prof">
                    <div classname="kamini" style={{ marginLeft: "300px", marginTop: "10px" }}>
                        <img className="img" src={pr} />
                        <p className="text" style={{ marginLeft: "50px" }}> Dr kamini Singh </p>
                    </div>
                </div>
                <div className="prof">
                    <div classname="kamini" style={{ marginLeft: "100px",marginTop: "10px"}}>
                        <img className="img" src={pr} />
                        <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                    </div>
                    </div>
                    </div>
                <div classname="studt" style={{ marginBottom: "500px" }}>
                    <p><span style={{ width: "311px", height: "45px", marginTop: "190px", backgroundColor: "orange", fontFamily: "Calibri", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "45px", paddingBottom: "15px", paddingTop: "15px", paddingRight: "150px" }}> Student Coordinators</span> </p>
                <div className="stud">
                    <div classname="kamini" style={{ marginLeft: "150px" }}>
                        <img className="img" src={pr} />
                        <p className="text" style={{ marginLeft: "50px" }}> Dr kamini Singh </p>
                    </div>
                </div>
                <div className="stud">
                    <div classname="kamini" style={{ marginLeft: "90px" }}>
                        <img className="img" src={pr} />
                        <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                    </div>
                </div>
                <div className="stud">
                    <div classname="kamini">
                        <img className="img" src={pr} />
                        <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                        </div>

                </div>

                </div>
                <div classname="studt">
                    <p><span style={{ width: "311px", height: "45px", marginTop: "190px", backgroundColor: "orange", fontFamily: "Calibri", fontStyle: "normal", fontWeight: "bold", fontSize: "20px", lineHeight: "45px", paddingBottom: "15px", paddingTop: "15px", paddingRight: "150px" }}> Student Team</span> </p>
                    <div className="stud">
                        <div classname="kamini" style={{ marginLeft: "150px" }}>
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr kamini Singh </p>
                        </div>
                    </div>
                    <div className="stud">
                        <div classname="kamini" style={{ marginLeft: "90px" }}>
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                        </div>
                    </div>
                    <div className="stud">
                        <div classname="kamini">
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                        </div>

                    </div>

                    <div className="stud">
                        <div classname="kamini" style={{ marginLeft: "150px" }}>
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr kamini Singh </p>
                        </div>
                    </div>
                    <div className="stud">
                        <div classname="kamini" style={{ marginLeft: "90px" }}>
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                        </div>
                    </div>
                    <div className="stud">
                        <div classname="kamini">
                            <img className="img" src={pr} />
                            <p className="text" style={{ marginLeft: "50px" }}> Dr Sanjay Kumar </p>
                        </div>

                    </div>

                </div>


             </div>

        </>
    );
}
export default about;
