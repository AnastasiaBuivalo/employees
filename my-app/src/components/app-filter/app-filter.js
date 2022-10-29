import {Component} from 'react'
import './app-filter.css'

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state ={
            filter:'all'
        }
    }

    onUpdateFilter = (e)=>{
        const filter = e.currentTarget.getAttribute('data-filter');
        e.currentTarget.classList.add('btn-light');
        this.setState({filter});
        this.props.onUpdateFilter(filter);
    }

    render(){
        const {filter} = this.state;
        let classAll = 'btn btn-light',
              classRise = 'btn btn-outline-light',
              classMoreThen100 = 'btn btn-outline-light';
        switch(filter){
            case 'rise':{
                classRise = 'btn btn-light';
                classAll = 'btn btn-outline-light';
                break;
            }
            case 'moreThen1000':
                classMoreThen100 = 'btn btn-light';
                classAll = 'btn btn-outline-light';
                break;
            case 'all': 
                classAll = 'btn btn-light';
                break;
        }

        return (<div className='btn-group'>
        <button className={classAll} type='button' data-filter = "all" onClick={this.onUpdateFilter}>
            Все сотрудники
        </button>

        <button className={classRise} type='button' data-filter = "rise" onClick={this.onUpdateFilter}>
            Сотрудники на повышение
        </button>

        <button className={classMoreThen100} type='button' data-filter = "moreThen1000" onClick={this.onUpdateFilter}>
            ЗП больше 1000$
        </button>
    </div>
    )}
    
};

export default AppFilter;