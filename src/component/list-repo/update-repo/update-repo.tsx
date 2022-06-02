import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import { Checkbox, FormControlLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RepoList } from 'model/repo.model';
import { RootState } from 'redux/store';

export default function UpdateRepoComponent(props:any) {
    const [item,setItem] = useState({
        name:props?.updateItem?.name,
        id:props?.updateItem?.id,
        description:props?.updateItem?.description,
        watchers_count:props?.updateItem?.watchers_count,
        language:props?.updateItem?.language,
        open_issues:props?.updateItem?.open_issues,
        private:props?.updateItem?.private,
    })

    console.log(props)

    const navigate = useNavigate();

    const handleSubmit = (event:any) => {
        event.preventDefault()
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
        toast.success('UPDATE SUCCESS', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            progress: undefined,
          });
        //   navigate('/list-repo')
    }

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
  return (
    <div>
      <Dialog open={props.openDialog} onClose={() => props.setOpenDialog(false)}>
      <form className='d-flex flex-column justify-content-between' onSubmit={handleSubmit}>
              <TextField
                  required
                  id="outlined-required"
                  label="Id"
                  name='id'
                  defaultValue={props?.updateItem?.id}
                  onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="Name"
                name='name'
                defaultValue={props?.updateItem?.name}
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="description"
                name='description'
                defaultValue={props?.updateItem?.description}
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="language"
                name="language"
                defaultValue={props?.updateItem?.language}
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="watchers_count"
                name='watchers_count'
                defaultValue={props?.updateItem?.watchers_count}
                onChange={handleChange}
                />
              <TextField
                required
                id="outlined-required"
                label="open_issues"
                name='open_issues'
                defaultValue={props?.updateItem?.open_issues}
                onChange={handleChange}
                />
              <FormControlLabel
                control={
                  <Checkbox
                    id="private" 
                    name="private"
                    defaultChecked={props?.updateItem?.private}
                    onChange={handleChange}
                  />
                }
                label="Private"
              />
          <Button onClick={() => props.setOpenDialog(false)}>Cancel</Button>
          <Button type="submit" value="Submit">Save</Button>
        </form>
      </Dialog>
    </div>
  );
}