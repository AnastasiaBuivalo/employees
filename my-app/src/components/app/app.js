import React, {Component} from 'react'
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


const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
                })
            }
        </div>
    )
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
            ],
            term: '',
            filter: 'all'
        };
        this.maxId = 5;
    }

    deleteItem = (id =>{
        this.setState(({data})=>({
            data: data.filter(item => item.id !== id)
        }))
    })

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
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

    searchEmp = (items, term) =>{
        if(term.length < 1)
            return items;
        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) != -1
        })
    }

    filterEmp = (items, filter) =>{ 
        switch(filter){
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default: 
                return items;
        }
    }

    onUpdateFilter = (filter) =>{
        this.setState({filter})
    }

    onUpdateSearch = (term) =>{
        this.setState({term});
    }

    changeSalary = (id, newSalary)=>{
        console.log(id, newSalary);
        const newArr = this.state.data.filter(item => {
            if(item.id === id)
                item.salary = newSalary.replace(/\D/g, '');
            return item;
        });
        this.setState(()=>
            ({data: newArr})
        )
    }

    render(){
        const {data, term, filter} = this.state;
        const employees = this.state.data.length;
        const increased= this.state.data.filter(item => item.increase).length;
        let visibleData = this.filterEmp(this.searchEmp(data, term), filter);
        return (
            <div className = 'app'>
                <AppInfo employees={employees} increased = {increased}/>
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter onUpdateFilter = {this.onUpdateFilter}/>
                </div>
                <EmployeesList 
                    data = {visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                    onChangeSalary = {this.changeSalary}/>
                <EmployeesAddForm
                    onAdd = {this.addItem}/>


                <DynamicGreating color = {'primary'}>
                    <h2>This wheel was hard</h2>
                    <h2>Hello world!</h2>
                </DynamicGreating>

                <WhoAmI name = 'Jo' surname= 'Smith' link = 'vk.com'/>
                <WhoAmI name = 'Mike' surname= 'Smith' link = 'facebook.com'/>
            </div>)
        }
            
};

export default App;