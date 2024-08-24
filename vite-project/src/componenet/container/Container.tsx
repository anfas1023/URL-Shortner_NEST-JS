import * as React from 'react';
import FormContainer from '../FormContainer/FormContainer';
import { UrlData } from '../../interface/UrlData';
import Datatable from '../data/DataTable';
import {AuthContext} from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  const navigate=useNavigate()
  const newContext=React.useContext(AuthContext);

  React.useEffect(()=>{
    console.log("newContext?.user111111111111");

    if(!newContext?.user){
      console.log("newContext?.user");
      
      navigate('/login')
    }
  },[newContext?.user])

    const [data,setData] =React.useState<UrlData[]>([])
  return (
    <>
<FormContainer />
<Datatable />
    </>
  )
};

export default Container;
