import React from 'react';
import { Link } from 'react-router-dom';
import cloudyLogo from '../assets/images/cloudy-img.png';
import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../state/index';

export default function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const username = `${user.username}`;
  return (
    <div>
      <nav>
        <div className='navbar'>
          <div className='logo-brand'>
            <Link>
              <img className='img-fluid' src={cloudyLogo} alt='logo' />
              <span className='align-self-cente'>Weather Today</span>
            </Link>
          </div>
          <FormControl variant='standard' value={username}>
            <Select
              value={username}
              sx={{
                backgroundColor: '#E0E0E0',
                width: '150px',
                borderRadius: '0.25rem',
                p: '0.25rem 1rem',
                '& .MuiSvgIcon-root': {
                  pr: '0.25rem',
                  width: '3rem',
                },
                '& .MuiSelect-select:focus': {
                  backgroundColor: '#E0E0E0',
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={username}>
                <Typography>{username}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </div>
      </nav>
    </div>
  );
}
