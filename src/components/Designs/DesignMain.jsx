import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import LeftSidebar from "./LeftSidebar"
import RigjhtSidebar from "./RightSidebar"
import { fabric } from 'fabric';
import { useEffect } from 'react';
import Content from './Content'
import Content1 from './Content1'
import { useState } from "react";
import { useGlobal } from "../config/global";




let canvas;
const DesignMain = ({ ...props }) => {

    const { setGlobal } = useGlobal();

    const loginUser = useSelector((stare) => stare.userDetail)
    let { is_login, user_email, user_name } = loginUser
    console.log("loginUser => ", is_login);

    const [canvasData, setCanvasData] = useState(null)

    // useEffect(() => {
    //     canvas = new fabric.Canvas('c');
    //     // setTimeout(() => {
    //     canvas.backgroundColor = 'red';
    //     canvas.width = 555;
    //     canvas.height = 555;
    //     canvas.renderAll();
    //     //  console.log('Event fireeeee')
    //     //}, 5000);
    //     // setCanvas(canvasData)

    // }, [canvasData]);

    // setTimeout(() => {
    //     setCanvasData(1)
    // }, 2000);

    // if (is_login === 0) {
    //     return <Redirect to="/login" />
    // }
    console.log('canvas=>', canvas)
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <LeftSidebar />
                    </div>
                    <div className="col-6">
                        <Content setGlobal={(g) => setGlobal(g)} id="canvas" />
                    </div>
                    <div className="col-3">
                        <RigjhtSidebar canvasRef={canvas} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default DesignMain