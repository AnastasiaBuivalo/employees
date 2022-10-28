import {Component} from 'react'
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel'
import EmployeesList from '../ employees-list/ employees-list'
import EmployeesAddForm from '../ employees-add-form/employees-add-form';
import './app.css';


class WhoAmI extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: 27,
            text: '+++',
            position: ''
        }
    };

    nextYear = ()=>{
        this.setState(state =>({
            age: state.age+1
        }))
    }

    commitInputChanges = (e, text)=>{
        this.setState(() =>({
            position: e.target.value
        }))
    }
    
    render(){
        const {name, surname, link} = this.props;
        const {age, position, text} = this.state;
        return (
            <div>
                <h1> My name is {name}, surname - {surname},
                 age - {age}
                 position - {position}</h1>
                <button onClick = {this.nextYear}>{text}</button>
                <span>Должность: </span>
                <input type="text" onChange={(e) => this.commitInputChanges(e, 'some change')}/>
                <a href= {link}>My profile</a>
            </div>
    
        )
    }
}

const data = [
    {name: 'Jo', salary: 800, id: 1},
    {name: 'Mike', salary: 1000, id: 2},
    {name: 'Nike', salary: 500, id: 3},
    {name: 'Bob', salary: 1800, id: 4},
]

function App(){
    return (<div className = 'app'>
                <AppInfo />
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data = {data}/>
                <EmployeesAddForm/>

                <WhoAmI name = 'Jo' surname= 'Smith' link = 'vk.com'/>
                <WhoAmI name = 'Mike' surname= 'Smith' link = 'facebook.com'/>
            </div>)
}

export default App;