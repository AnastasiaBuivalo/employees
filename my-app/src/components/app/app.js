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
            <>
                <h1> My name is {name}, surname - {surname},
                 age - {age}
                 position - {position}</h1>
                <button onClick = {this.nextYear}>{text}</button>
                <span>Должность: </span>
                <input type="text" onChange={(e) => this.commitInputChanges(e, 'some change')}/>
                <a href= {link}>My profile</a>
            </>
    
        )
    }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            data: [
                {name: 'Jo', salary: 800, increase: false, rise: false, id: 1},
                {name: 'Mike', salary: 1000, increase: false, rise: false, id: 2},
                {name: 'Nike', salary: 500, increase: false, rise: false, id: 3},
                {name: 'Bob', salary: 1800, increase: false, rise: false, id: 4},
            ]
        };
        this.maxId = 5;
    }

    deleteItem = (id =>{
        this.setState(({data})=>({
            data: data.filter(item => item.id !== id)
        }))
        console.log(`${id} Delete`);
        console.log(this.state.data);
    })

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    console.log(id, [prop]);
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    addItem = ((name, salary) =>{
        const item = {
            name:name, 
            salary:salary,
            increase: false,
            rise: false,
            id: this.maxId++
        };
        this.setState(({data}) => ({
            data: [...data, item]
        }))
    })

    render(){
        const employees = this.state.data.length;
        const increased= this.state.data.filter(item => item.increase).length;
        return (
            <div className = 'app'>
                <AppInfo employees={employees} increased = {increased}/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList 
                    data = {this.state.data}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm
                    onAdd = {this.addItem}/>

                <WhoAmI name = 'Jo' surname= 'Smith' link = 'vk.com'/>
                <WhoAmI name = 'Mike' surname= 'Smith' link = 'facebook.com'/>
            </div>)
        }
            
};

export default App;