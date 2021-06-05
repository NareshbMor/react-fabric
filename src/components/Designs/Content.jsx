import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import Rectangle from './elements/Rectangle';
import { useGlobal, GlobalContext } from '../config/global';
import $ from 'jquery'

const Content = ({ ...props }) => {

    const contextType = GlobalContext;
    const { setGlobal, valGlobal } = useGlobal();
    //  const [canvas, setCanvas] = useState('');
    //  const canvasRef = useRef();
    //  const fabricRef = useRef();

    useEffect(() => {
        const can = new fabric.Canvas('canvas', {
            width: $('.canvas-main').width(),
            height: $('.canvas-main').width(),
            //  selection: false, // disables drag-to-select
            backgroundColor: 'white',

        });

        //  console.log("aaaaaaaaa =>", valGlobal)

        setGlobal({ ...valGlobal, canvas: can })
        // fabricRef.current = canvas;
        // initCanvas({ canvas });
    }, []);




    return (
        <div className="text-center canvas-main">
            <canvas id="canvas" >
            </canvas>
        </div >
    );
};

export default Content;