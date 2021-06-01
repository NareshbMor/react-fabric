import React, { useEffect } from 'react';
import { fabric } from 'fabric';
import { Ractangle, Circle } from './elements/Rectangle';
import { useSelector } from 'react-redux';

const Content1 = () => {
    const designElements = useSelector(state => state.designData.elements)
    console.log("designElements =>", designElements)
    useEffect(() => {

        const canvas = new fabric.Canvas('c', {
            backgroundColor: 'red',
            selectionColor: 'lightGrey',
            selectionLineWidth: 2,
            width: 600,
            height: 600,
        });

        designElements && designElements.length === 0 && canvas.clear() // canvas.remove(...canvas.getObjects());



        designElements && designElements.length !== 0 && designElements.map((element, key) => {
            // console.log("designElements element=>", element)

            if (element.name === 'Rect') {
                canvas.add(Ractangle(element.props));
                canvas.renderAll();
            }

            if (element.name === 'Circle') {
                canvas.add(Circle(element.props));
                canvas.renderAll();
            }



        }
        )


        // var circle = new fabric.Circle({
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

    }, [designElements]);

    // console.log("cData canvas => ", canvas)

    return (
        <div>
            <canvas id="c"  >

            </canvas>
        </div>
    );
};

export default Content1;