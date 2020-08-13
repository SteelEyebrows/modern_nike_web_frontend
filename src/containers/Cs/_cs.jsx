import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { awsAction } from "../../store/actions";
import {Cs} from '../../components';
import {API, graphqlOperation } from 'aws-amplify';
import {Loading} from '../../components/common';
import * as graphql from '../../graphql';
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers";

const Schema = Yup.object().shape({
  title: Yup.string().required("Required"),
  inquiry: Yup.string().required("Required"),  
});


const CsContainer = (props) =>{
    const [isPostModalVisible, setIsPostModalVisible] = useState(false);
    const [isWritingModalVisible, setIsWritingModalVisible] = useState(false);
    const [ title, setTitle ] = React.useState("");
    const [ inquiry, setInquiry ] = React.useState("");
    const { register, handleSubmit, errors } = useForm({
      resolver: yupResolver(Schema)
    });
    
    const data = useSelector(mapStateToProps, []);
    const dispatch = useDispatch();
    
    const getAws =(query)=>dispatch(awsAction.awsRequest(query));
    const postAws = (query) =>dispatch(awsAction.writingRequest(query));

    const showPostModal = () => setIsPostModalVisible(!isPostModalVisible);
    const showWitingModal = () => setIsWritingModalVisible(!isWritingModalVisible);

    const onChangeTitle = event => setTitle( event.target.value);
    const onChangeInquiry = event => setInquiry( event.target.value);
    // const postAws = async() =>{
    //     const input_query={
    //       title: title,
    //       inquiry: inquiry,
    //     };
    //     await API.graphql(graphqlOperation(graphql.createStudent, {input: input_query})).then(r =>{
    //         console.log(r);
    //     });
    // }
    const onSubmit = () =>{
      try {
        const input_query={title,inquiry};
        // const user = await Auth.signIn(userName, password);console.log("rrrrrrr");
          postAws(input_query);
      }catch(error) {
          console.log(error);
      }
    };
    useEffect(() => {
      getAws(graphql.queryCstudent);
    },[]);

    return(
        <>
        {
            data.isFatching?
            <Loading />:
            <Cs
              showPostModal={showPostModal}
              isPostModalVisible={isPostModalVisible}
              
              showWritingModal={showWitingModal}
              isWritingModalVisible={isWritingModalVisible}
              onChangeTitle={onChangeTitle}
              onChangeInquiry={onChangeInquiry}

              postAws={postAws}
              data={data.cs}

              register={register} 
              handleSubmit={handleSubmit(onSubmit)} 
              errors={errors}
            />
        } 
        </>
    );
  }

const mapStateToProps = (rootReducer)=>({//reducers => case
    isFatching:rootReducer.aws.isFatching,
    cs:rootReducer.aws.cs,
});

export default CsContainer;
