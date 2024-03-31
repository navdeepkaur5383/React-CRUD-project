import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, redirect, useParams } from 'react-router-dom';
import { editName } from './reduxwork/nameslice';


function Edit() {
  const [isEdited, setIsEdited] = useState(false);

  const { index } = useParams();
  const convint = parseInt(index, 10);
  const alldata = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const [editedData, setEditedData] = useState({
    name: '',
    english: '',
    hindi: '',
    punjabi: '',
    math: '',
    science: '',
    sst: ''
  });
  


  useEffect(() => {
    const singledata = alldata.filter((data, ind) => ind + 1 === convint);
    if (singledata.length > 0) {
      setEditedData(singledata[0]);
    }
  }, [alldata, convint]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', editedData); // Check if the form data is correct
    dispatch(editName({ id: convint, updatedData: editedData }));
    console.log('Dispatched editName action');
    setIsEdited(true)
    
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {Object.keys(editedData).map((key) => (
          <input
            key={key}
            type={key === 'name' ? 'text' : 'number'}
            placeholder={key === 'name' ? 'Student Name' : `${key} Marks`}
            name={key}
            value={editedData[key]}
            onChange={handleInput}
          />
        ))}







<button type="submit">Save</button>


      </form>
<Link to='/'>Back to Home</Link>
{isEdited && <h3 style={{ color: 'red' }}>Edited Successfully</h3>}

    </div>
  );
}

export default Edit;
