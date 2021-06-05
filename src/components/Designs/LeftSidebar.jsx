import { useSelector, useDispatch } from "react-redux";
import { addCircle, addRectangle, addLine, clearAll } from "../../redux/actions/design";

import { fabric } from 'fabric';
import { addTriangle } from "./Content1";
import { useGlobal } from "../config/global";



const LeftSidebar = () => {
    const { valGlobal } = useGlobal();
    const dispatch = useDispatch();

    //var getCanvas; // global variable
    //  var canvas = new fabric.Canvas('c');
    let canvas = valGlobal.canvas




    const addTriangle = () => {
        // console.log("triangle=>", canvas)
        const triangle = new fabric.Triangle({
            width: 200,
            height: 200,
            fill: 'blue',
            left: 50,
            top: 300,
        });
        canvas.add(triangle);
        canvas.renderAll();

    }

    const addCircle = () => {
        const circle = new fabric.Circle({
            top: 10,
            left: 100,
            radius: 100,
            stroke: 'blue',
            strokeWidth: 2,
            fill: '#eef',
            scaleY: 1,
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

    const addText = () => {
        const addtext = new fabric.IText('Hello Mor', { left: 30, top: 20, fill: '#000', fontSize: 30 });
        canvas.add(addtext);
        canvas.renderAll();
    }

    const addImage = () => {
        let userImage = 'https://freshtrends.in/wp-content/uploads/2020/05/fresh-trends-logo.png';
        fabric.Image.fromURL(userImage, function (img) {
            img.set({
                scaleX: 0.25,
                scaleY: 0.25,
                top: 200,
                left: 50
            });
            canvas.add(img);
            canvas.renderAll();
        });
    }


    const deleteSelected = () => {
        console.log("getActiveObject=>", canvas.getActiveObject())
        canvas.on('selection:cleared', function (obj) {
            console.log("selection=>", obj.target)
        });
        canvas.remove(canvas.getActiveObject());
    }

    const addUploadImage = (e) => {
        var reader = new FileReader();
        reader.onload = function (event) {
            var img = new Image();
            img.onload = function () {
                var imgInstance = new fabric.Image(img, {
                    scaleX: 0.2,
                    scaleY: 0.2,
                    // top: 0,
                    // left: 0,
                    // angle: 0,
                    // hasBorders: false,
                    // cornerSize: 0,
                    // lockRotation: true
                })
                canvas.add(imgInstance);
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);
    }

    const getEvents = (e) => {
        // get the event 
        console.log("getEvents=>", e)
    }

    return (
        <div>
            <h1>LeftSidebar</h1>

            <div>

                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" onClick={() => addCircle()} className="btn btn-outline-primary">Circle</button>
                    <button type="button" onClick={() => addRectangle()} className="btn btn-outline-primary">Rectangle</button>
                    <button type="button" onClick={() => addTriangle()} className="btn btn-outline-primary">Add Triangle</button>

                </div>
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" onClick={() => addText()} className="btn btn-outline-primary">Text</button>
                    <button type="button" onClick={() => addImage()} className="btn btn-outline-primary">Add Image</button>

                </div>
                <input type="file" onChange={(e) => addUploadImage(e)} className="btn btn-outline-primary" />

                <button type="button" onClick={() => deleteSelected()} className="btn btn-outline-primary">Delete Seleted</button>
                <button type="button" onClick={() => clearAll()} className="btn btn-outline-primary">Clear All</button>

                {/* <button type="button" onClick={() => changeColor()} className="btn btn-outline-primary">Change Color</button> */}

            </div>
        </div>
    );
};

export default LeftSidebar;