import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getListRepo } from '../../redux/thunk';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

function ListRepoComponent() {

  const repos = useSelector((state: RootState) => state.repo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListRepo()); 
  }, []);


  return (
    <div>
      <div className='d-flex justify-content-center align-items-center mb-3'><Link style={{ textDecoration: 'none'}} to="/add-repo">ADD <AddIcon></AddIcon></Link></div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">watchers_count</TableCell>
              <TableCell align="right">open_issues</TableCell>
              <TableCell align="right">private</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {repos.repo.map((row:any) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                 <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.watchers_count}</TableCell>
                <TableCell align="right">{row.open_issues}</TableCell>
                <TableCell align="right">{row.private ? 'important' : 'not important'}</TableCell>
                <Button>Update</Button>
                <Button>Delete</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListRepoComponent;