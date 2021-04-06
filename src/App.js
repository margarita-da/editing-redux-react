import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import {removeService } from './actions/actionCreators';

function App() {
  const items = useSelector(state => state.serviceList);
	const dispatch = useDispatch();
  const [editItem, setEdit] = useState();
  const [isEdit, setIsEdit] = useState(false)
  const getItem = id =>{
    let newItem = items.filter(item => item.id === id)
    setEdit(newItem[0]);
    setIsEdit(true)
  }
  const handleRemove = id => {
    dispatch(removeService(id));
  }
  return (
    <>
      <ServiceAdd editItem={editItem} setIsEdit={setIsEdit} isEdit={isEdit}/>
      <ServiceList getItem={getItem} items={items} handleRemove={handleRemove} />
    </>
  );
}

export default App;
