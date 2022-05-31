import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './add-repo.css'

function AddRepoComponent() {
  const navigate = useNavigate();
  return (
    <div>
        <Button className='button-back mt-3' onClick={() => navigate('/list-repo')}><ChevronRightIcon></ChevronRightIcon> Back</Button>
        <div className='d-flex justify-content-center align-items-center'>
          <div>
            <h2>ADD ITEM</h2>
          </div>
        </div>
    </div>
  );
}

export default AddRepoComponent;