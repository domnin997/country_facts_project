import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render () {
        if (this.state.error) {
            return <h2> Произошла ошибка - невозможно отобразить информацию </h2> 
        }

        return this.props.children;
    }
}

export default ErrorBoundary;