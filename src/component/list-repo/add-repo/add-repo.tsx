import { Button, FormControl, Input, InputLabel, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './add-repo.css'
import { useState } from 'react';

function AddRepoComponent() {
  const navigate = useNavigate();
  const [item,setItem] = useState({
    name:'',
    id:'',
    description: '',
    watchers_count:0,
    language:'',
    open_issues:0,
    private:false,
  })

  const handleChange = (event:any) => {
    switch (event.target.name) {
      case "name":
        item.name = event.target.value;
        break;
      case "id":
        item.id = event.target.value;
        break;
      case "description":
        item.description = event.target.value;
        break;
      case "watchers_count":
        item.watchers_count = event.target.value;
        break;
      case "language":
        item.language = event.target.value;
        break;
      case "open_issues":
        item.open_issues = event.target.value;
        break;
      case "private":
        item.private = event.target.checked;
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    setItem({
      name: item.name,
      id: item.id,
      description: item.description,
      watchers_count: item.watchers_count,
      language: item.language,
      open_issues: item.open_issues,
      private:item.private,
    })
    console.log(item)
  }
  return (
    <div>
        <Button className='button-back mt-3' onClick={() => navigate('/list-repo')}><ChevronRightIcon></ChevronRightIcon> Back</Button>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <h2>ADD ITEM</h2>
            <form className='d-flex flex-column justify-content-between' onSubmit={handleSubmit}>
              <TextField
                  required
                  id="outlined-required"
                  label="Id"
                  name='id'
                  onChange={handleChange}
                  />
              <TextField
                required
                id="outlined-required"
                label="Name"
                name='name'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="description"
                name='description'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="language"
                name="language"
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="watchers_count"
                name='watchers_count'
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="open_issues"
                name='open_issues'
                onChange={handleChange}
                />
              <Input type='checkbox' name="private" onChange={handleChange}></Input>
              <Button type="submit" value="Submit">Submit</Button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default AddRepoComponent;