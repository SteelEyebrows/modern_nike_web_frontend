import * as React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { awsAction } from "../../store/actions";
import {Cs} from '../../components';
import {API, graphqlOperation } from 'aws-amplify';

const queryCstudent=`
query list{
  listMyTypes(filter:{type:{contains:"student"}},limit:100){
    items{
      id type name grade class link todo haveto due 
      words{id name link haveto due} 
      record{id bookid month day words etc}
      test{id name score month day}
      homework{id name assignment done month day}
    }
    }
  }

`;

const CsContainer = (props) =>{
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    
    const getAws =(query)=>dispatch(awsAction.awsRequest(query));
    React.useEffect(() => {
      getAws(queryCstudent);
    },[]);
    return(
        <>
        {
            data.isFatching?
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                loading
            </div>:
            <Cs/>
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.aws.isFatching,
    cs:rootReducer.aws.cs,
});

export default CsContainer;
