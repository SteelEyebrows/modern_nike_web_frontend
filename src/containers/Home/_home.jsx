import * as React from 'react';
import {Dispatch,connect} from 'react-redux';
import { rootReducer } from "../../store/reducers";
import { departmentAction } from "../../store/actions";
// import {departments, categories} from 'store/module';
import {Home} from '../../components';

class HomeContainer extends React.Component{

    onclickEvent=()=>{
        this.props.getDepartments("v0");
    }

    render(){
        const {departments} = this.props;
        return(
            <>
                <Home departments={departments}/>
                <button onClick={this.onclickEvent}>
                    Activate Lasers
                </button>
            </>
        )
    }
}

const mapStateToProps = (rootReducer)=>({//reducers => case
    departments:rootReducer.departments.departments
});

const mapDispatchToProps = (dispatch)=>({//action => 정의된 함수에 인자 대입해서 리턴
    getDepartments:(id)=>dispatch(departmentAction.departmentRequest(id)),
});

const connectModule = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);

export default connectModule;