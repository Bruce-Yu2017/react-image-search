import React from 'react'

class Image extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { span: 0 };
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.editSpan)
    }

    editSpan = () => {
        const height = this.imageRef.current.clientHeight;
        const span = Math.ceil(height / 20);
        this.setState({ span });
    }

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.span}` }}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        )
    }
}

export default Image;