import { useEffect, useState, useRef } from 'react';
import { fabric } from 'fabric';
import Rectangle from './elements/Rectangle';



const Content = () => {
    const [canvas, setCanvas] = useState('');
    const canvasRef = useRef();
    const fabricRef = useRef();

    useEffect(() => {
        const canvas = new fabric.Canvas('canvas', {
            width: 600,
            height: 600,
            //  selection: false, // disables drag-to-select
            backgroundColor: 'lightGrey',
        });
        fabricRef.current = canvas;
        initCanvas({ canvas });
    }, []);

    const initCanvas = ({ canvas }) => {



        // let rect = new fabric.Rect({
        //     width: 200,
        //     height: 200,
        //     fill: 'white',
        //     left: 300,
        //     top: 300,
        //     // selectable: false,
        //     excludeFromExport: true,
        // });
        // canvas.add(rect);

        // rect = new fabric.Rect({
        //     width: 100,
        //     height: 100,
        //     fill: 'red',
        //     left: 100,
        //     top: 100,
        // });
        // canvas.add(rect);
    };


    return (
        <div className="text-center">
            {fabricRef && fabricRef.current &&
                <canvas id="canvas" ref={canvasRef} >

                </canvas>
            }

        </div >
    );
};

export default Content;