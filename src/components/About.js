import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div className="container" style={{ textAlign: 'center' }}>
            <h4>Version 1.0.0</h4>
            <Link to="/">To back</Link>
        </div>
    )
}

export default About
