import { fabric } from 'fabric';
import { useEffect } from 'react';
import { useGlobal } from '../config/global';
import { getCanvas } from '../common/CommonFunctions';
//let canvas;

// const RightSidebar = () => {
//     return (
//         <div>
//             <h1>RightSidebar</h1>

//         </div>
//     );
// };

// export default RightSidebar;

function RightSidebar({ ...props }) {

    const { valGlobal } = useGlobal();
    //let canvas = props.canvasRef
    let canData = valGlobal.canvas

    useEffect(() => {
        if (canData !== null) {
            canData.on({
                'selection:created': () => {
                    console.log("getActiveObject 000=>", canData.getActiveObject())
                    // canData.getActiveObject().set("fill", 'yellow');
                    // canData.renderAll();
                }
            })

            canData.on({
                'selection:cleared': () => {
                    console.log("getActiveObject 111=>", canData.getActiveObject())
                }
            })


            canData.on({
                'selection:updated': () => {
                    console.log("getActiveObject 222=>", canData.getActiveObject())
                    //  canData.getActiveObject().set("fill", 'yellow');
                    // canData.renderAll();
                }
            })
        }
    }, [valGlobal])

    // When a selection is being made
    const changeColor = () => {
        canData.getActiveObject().set("fill", 'pink');

        console.log("getActiveObject Type=>", canData.getActiveObject().get('type'))
        canData.renderAll();
    }

    const addTriangle = () => {

        let canData = valGlobal.canvas
        const triangle = new fabric.Triangle({
            width: 200,
            height: 200,
            fill: 'blue',
            left: 50,
            top: 300,
        });
        canData.add(triangle);
        canData.renderAll();

    }

    return (
        <div>
            <h1>RightSidebar</h1>
            <button type="button" onClick={() => addTriangle()} className="btn btn-outline-primary">Add Triangle</button>
            <button type="button" onClick={() => changeColor()} className="btn btn-outline-primary">Change Color</button>

        </div>
    );
}

export default RightSidebar;