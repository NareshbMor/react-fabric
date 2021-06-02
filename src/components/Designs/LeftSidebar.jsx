import { useSelector, useDispatch } from "react-redux";
import { addCircle, addRectangle, addLine, clearAll } from "../../redux/actions/design";

import { fabric } from 'fabric';
import { addTriangle } from "./Content1";



const LeftSidebar = () => {
    const dispatch = useDispatch();
    //var getCanvas; // global variable
    //  var canvas = new fabric.Canvas('c');

    const addTriangle = () => {
        //  console.log("triangle=>", canvas)
        const triangle = new fabric.Rect({
            width: 200,
            height: 200,
            fill: 'white',
            left: 300,
            top: 300,
        });
        //   canvas.add(triangle);
        //   canvas.renderAll();
    }

    const circleProps = {
        name: 'Circle',
        props: {
            top: 10,
            left: 100,
            radius: 50,
            stroke: 'blue',
            strokeWidth: 2,
            fill: '#eef',
            scaleY: 0.5
        }
    }
    const rectangleProps = {
        name: 'Rect',
        props: {
            width: 200,
            height: 200,
            fill: 'white',
            left: 300,
            top: 300,
            // selectable: false,
            //excludeFromExport: true,
        }
    }
    const lineProps = {
        name: 'Line',
        props: {
            width: 10,
            height: 20,
            left: 100,
            top: 100,
            fill: 'yellow',
            stroke: 'red',
            strokeWidth: 5,
            selectable: false,
            evented: false,
        }
    }
    return (
        <div>
            <h1>LeftSidebar</h1>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" onClick={() => dispatch(addCircle(circleProps))} className="btn btn-outline-primary">Circle</button>
                <button type="button" onClick={() => dispatch(addRectangle(rectangleProps))} className="btn btn-outline-primary">Rectangle</button>
                <button type="button" onClick={() => dispatch(addLine(lineProps))} className="btn btn-outline-primary">Line</button>
            </div>

            <button type="button" onClick={() => dispatch(clearAll())} className="btn btn-outline-primary">Clear All</button>

            <button type="button" onClick={() => addTriangle()} className="btn btn-outline-primary">Add Triangle</button>
        </div>
    );
};

export default LeftSidebar;