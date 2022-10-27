import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel'
import EmployeesList from '../ employees-list/ employees-list'
import EmployeesAddForm from '../ employees-add-form/employees-add-form';
import './app.css';


function WhoAmI({name, surname, link}){
    return (
        <div>
            <h1> My name is {name}, surname - {surname}</h1>
            <a href= {link}>My profile</a>
        </div>

    )
}

function App(){
    return (<div className = 'app'>
                <AppInfo />
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList/>
                <EmployeesAddForm/>

                <WhoAmI name = 'Jo' surname= 'Smith' link = 'vk.com'/>
                <WhoAmI name = 'Mike' surname= 'Smith' link = 'facebook.com'/>
            </div>)
}

export default App;