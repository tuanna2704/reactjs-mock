import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { getListRepo } from '../../redux/thunk';

function ListRepoComponent() {

  const repos = useSelector((state: RootState) => state.repo)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getListRepo()); 
  }, []);


  return (
    <div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">description</TableCell>
              <TableCell align="right">watchers_count</TableCell>
              <TableCell align="right">open_issues</TableCell>
              <TableCell align="right">private</TableCell>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListRepoComponent;