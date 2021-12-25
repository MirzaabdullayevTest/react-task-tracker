import { useState } from 'react'

const AddForm = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [remind, setRemind] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Pleace add text');
        }

        onAdd({ text, date, remind })

        setText('')
        setDate('')
        setRemind(false)
    }

    return (
        <form action="" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="task">Task</label>
                <input type="text" id="task" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="date">Day & time</label>
                <input type="text" id="date" placeholder="Add day & time" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="remind">Reminder</label>
                <input type="checkbox" id="remind" value={remind} onChange={(e) => setRemind(e.currentTarget.checked)} checked={remind} />
            </div>

            <input type="submit" className="btn btn-block" value={"Save task"} />
        </form>
    )
}

export default AddForm
