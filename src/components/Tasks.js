import Task from "./Task"
import PropTypes from 'prop-types'

const Tasks = ({ tasks, onDelete, onRemind }) => {
    return (
        <>
            {
                tasks.map((task) => (
                    <Task
                        task={task}
                        key={task.id}
                        onDelete={onDelete}
                        onRemind={onRemind}
                    />
                ))
            }
        </>
    )
}

Task.propTypes = {
    tasks: PropTypes.array,
    onDelete: PropTypes.func
}

export default Tasks
