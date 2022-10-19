import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getJokesThunk } from '../../store/jokes/actions';
import { selectJokes, selectJokesError, selectJokesOnRequest } from '../../store/jokes/selectors';
import './style.scss';

export const Jokes = () => {
    const jokes = useSelector(selectJokes, shallowEqual);
    const error = useSelector(selectJokesError);
    const onRequest = useSelector(selectJokesOnRequest);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getJokesThunk());
    },[dispatch]);

    const refreshHendler = () => {
      dispatch(getJokesThunk());
    }

    return(
        <>
        <div>
        <div><Button variant="contained" onClick={refreshHendler}>Refresh</Button></div>
        {error && <span>{error}</span>} 
        {onRequest ? <CircularProgress /> :
          <List className='jokes'>
            {jokes.map(joke => {
              return (
                  <ListItemText className='jokes__item' key={joke.id} primary={joke.joke} />
              );
            })}
          </List>
        }
        </div>
        </>
    );
}