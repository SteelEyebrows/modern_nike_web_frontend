import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { awsAction } from "../../store/actions";
import {Cs} from '../../components';
import {Loading} from '../../components/Common';
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

    const reversePostModal = () => setIsPostModalVisible(!isPostModalVisible);
    const escPostModal = () => setIsPostModalVisible(false);
    
    const reverseWitingModal = () => setIsWritingModalVisible(!isWritingModalVisible);
    const escWitingModal = () => setIsWritingModalVisible(false);

    const onChangeTitle = event => setTitle( event.target.value);
    const onChangeInquiry = event => setInquiry( event.target.value);

    const onSubmit = () =>{
      try {
        const input_query={title,inquiry};
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
              reversePostModal={reversePostModal}
              escPostModal={escPostModal}
              isPostModalVisible={isPostModalVisible}
              
              reverseWritingModal={reverseWitingModal}
              escWritingModal={escWitingModal}
              isWritingModalVisible={isWritingModalVisible}

              onChangeTitle={onChangeTitle}
              onChangeInquiry={onChangeInquiry}

              postAws={postAws}
              data={data.cs}

              isAuthenticated={data.isAuthenticated}
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
    isAuthenticated: rootReducer.auth.isAuthenticated,
});

export default CsContainer;
