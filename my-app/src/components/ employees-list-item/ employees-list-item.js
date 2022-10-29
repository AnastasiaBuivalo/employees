import {Component} from 'react'
import './ employees-list-item.css'


const EmployeesListItem = (props) => {
    console.log(props);
    let classNames = "list-group-item d-flex justify-content-between";
    const {name, salary, increase, id, rise, onDelete, onToggleProp, onChangeSalary} = props;
    if (increase)
        classNames += ' increase';
    if(rise)
        classNames += ' like';
    console.log(name, id);
    return (
        <li className={classNames}>
            <span className="list-group-item-label" onClick={onToggleProp} data-toggle = "rise">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onChange = {(e) => {onChangeSalary(id, e.target.value)}}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle = "increase">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;