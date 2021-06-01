import { fabric } from 'fabric';

export const Ractangle = val => {
    const rect = new fabric.Rect(val);
    return rect;
}

export const Circle = val => {
    const circle = new fabric.Circle(val);
    return circle;
}

export const Line = val => {
    const line = new fabric.Line(val);
    return line;
}