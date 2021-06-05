export const getCanvas = (c) => {
    if (c !== undefined) {
        //this.setState({ ...this.state, canvas: c });
        return c;
    }
    // else if (this.props) {
    //     if (this.props.hasOwnProperty('canvas')) {
    //         return this.props.canvas;
    //     }
    // }
    else if (window.canvas !== undefined) {
        //this.setState({ ...this.state, canvas: window.canvas });
        return window.canvas;
    } else {
    }
}