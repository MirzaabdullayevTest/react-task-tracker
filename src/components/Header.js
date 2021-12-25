import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, addToggle, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text={`${!showAdd ? 'Add' : 'Close'}`} color={`${!showAdd ? 'green' : 'red'}`} onClick={addToggle} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task tracker'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
