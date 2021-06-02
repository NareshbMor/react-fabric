import React, { useEffect, useRef, Fragment } from 'react';
import { fabric } from 'fabric';
import { Ractangle, Circle } from './elements/Rectangle';
import { useSelector, useDispatch } from 'react-redux';
// import { addCircle, addRectangle, addLine, clearAll } from '../../redux/actions/design';

const Content1 = () => {
    const designElements = useSelector(state => state.designData.elements)
    const dispatch = useDispatch();
    // const canvasRef = useRef(null);
    // console.log("designElements =>", canvasRef)


    let canvas;

    useEffect(() => {

        canvas = new fabric.Canvas('c', {
            backgroundColor: 'red',
            selectionColor: 'lightGrey',
            selectionLineWidth: 2,
            width: 600,
            height: 600,
        });

        canvas.renderAll();
        // canvas.width = 600;
        // canvas.height = 600;
        // canvas.backgroundColor = 'red';

        // canvas = new fabric.Canvas('c', {
        //     backgroundColor: 'red',
        //     selectionColor: 'lightGrey',
        //     selectionLineWidth: 2,
        //     width: 600,
        //     height: 600,
        // });


        // designElements && designElements.length === 0 && canvas.clear() // canvas.remove(...canvas.getObjects());



        // designElements && designElements.length !== 0 && designElements.map((element, key) => {
        //     // console.log("designElements element=>", element)
        //     if (element.name === 'Rect') {
        //         //  canvas.add(Ractangle(element.props));
        //         //  canvas.renderAll();
        //     }

        //     if (element.name === 'Circle') {
        //         //   canvas.add(Circle(element.props));
        //         //   canvas.renderAll();
        //     }
        // })

        //   var circle = new fabric.Circle({
        //     radius: 100,
        //     fill: '#eef',
        //     scaleY: 0.5,
        //     originX: 'center',
        //     originY: 'center'
        // });

        // var text = new fabric.Text('hello world', {
        //     fontSize: 30,
        //     originX: 'center',
        //     originY: 'center'
        // });

        // var group = new fabric.Group([circle, text], {
        //     left: 150,
        //     top: 100,
        //     angle: -10
        // });
        // canvas.add(group);

        // console.log('Ractangle=>', Ractangle)

        var json = canvas.toJSON();
        console.log("json => ", json)

    }, []);

    // console.log("cData canvas => ", canvas)

    const addTriangle = () => {
        // console.log("triangle=>", canvas)
        const triangle = new fabric.Triangle({
            width: 200,
            height: 200,
            fill: 'blue',
            left: 300,
            top: 300,
        });
        canvas.add(triangle);
        canvas.renderAll();
    }

    const addCircle = () => {
        const circle = new fabric.Circle({
            top: 10,
            left: 100,
            radius: 50,
            stroke: 'blue',
            strokeWidth: 2,
            fill: '#eef',
            scaleY: 0.5
        });
        canvas.add(circle);
        canvas.renderAll();

    }
    const addRectangle = () => {
        const rectangle = new fabric.Rect({
            width: 200,
            height: 200,
            fill: 'green',
            left: 300,
            top: 300,
        });
        canvas.add(rectangle);
        canvas.renderAll();
    }

    const clearAll = () => {
        //canvas.clear()
        canvas.remove(...canvas.getObjects());
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
        <Fragment>
            <div className="col-3">
                <div>
                    <h1>LeftSidebar</h1>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" onClick={() => addCircle()} className="btn btn-outline-primary">Circle</button>
                        <button type="button" onClick={() => addRectangle()} className="btn btn-outline-primary">Rectangle</button>
                        {/* <button type="button" onClick={() => dispatch(addLine(lineProps))} className="btn btn-outline-primary">Line</button> */}
                    </div>

                    <button type="button" onClick={() => clearAll()} className="btn btn-outline-primary">Clear All</button>

                    <button type="button" onClick={() => addTriangle()} className="btn btn-outline-primary">Add Triangle</button>
                </div>
            </div>
            <div className="col-6">
                <div>
                    <canvas id="c"   >
                    </canvas>
                </div>
            </div>
            <div className="col-3">
                <h1>RightSidebar</h1>
            </div>
        </Fragment >
    );
};

export default Content1;