import React, { useEffect, useState } from 'react';
import menuIcon from '../assets/icons/menu.png';
import sunnyImage from '../assets/images/sunny.png';
import waterIcon from '../assets/icons/water.png';
import { useSelector } from 'react-redux';
import { Box, Button } from '@mui/material';

export default function MainCard() {
  const token = useSelector((state) => state.token);

  const [temp, setTemp] = useState(0);
  const [hum, setHum] = useState(0);
  const [weather, setWeather] = useState('');
  const [roof, setRoof] = useState('');
  const [controller, setController] = useState('');

  const getTempHum = async () => {
    const response = await fetch('http://localhost:3001/dhtRain', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setTemp(data.temperature);
    setHum(data.humidity);
    setWeather(data.weather);
  };

  const getRoofCondition = async () => {
    const response = await fetch('http://localhost:3001/roof', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setRoof(data.status);
    setController(data.controller);
  };
  const updateRoofCondition = async () => {
    try {
      const response = await fetch('http://localhost:3001/roof', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          status: roof === 'OPEN' ? 'CLOSE' : 'OPEN',
          controller: 'WEB',
        }),
      });
      const data = await response.json();
      console.log(data);
      setController('WEB');
      setRoof(roof === 'OPEN' ? 'CLOSE' : 'OPEN');
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      getRoofCondition();
      getTempHum();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   getRoofCondition();
  // }, []);
  const date = new Date();
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let currentDate = String(date.getDate()).padStart(2, '0');
  let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
  let currentYear = date.getFullYear();
  let currentDay = weekday[date.getDay()];
  return (
    <div>
      <div className='row main-card'>
        <div className='col-sm-6 d-flex justify-content-end'>
          <div className='left-card'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='row'>
                  <div className='col-sm-12 d-flex justify-content-end'>
                    <img src={menuIcon} alt='menu-icon' />
                  </div>
                  <div className='col-sm-12 d-flex justify-content-between'>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <img src={sunnyImage} alt='sunny-image' />
                      </div>
                      {/* <div className="col-sm-1"></div> */}
                      <div className='col-sm-9 d-flex align-items-center'>
                        <div className='row'>
                          <div className='col-sm-12'>
                            <div className='row'>
                              <div className='col-sm-12 place'>
                                <p>{currentDay}</p>
                              </div>
                              <div className='col-sm-12 date'>
                                <p>
                                  {currentDate}-{currentMonth}-{currentYear}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-12'>
                <div className='row'>
                  <div class='col-sm-12 d-flex justify-content-center suhu'>
                    <p>{Math.round(temp)}</p>
                    <span>°C</span>
                  </div>
                  <div className='col-sm-12 d-flex justify-content-center keterangan-cuaca'>
                    <p>{weather}</p>
                  </div>
                </div>
              </div>
              <div className='col-sm-12 d-flex justify-content-center align-items-center persen'>
                <img src={waterIcon} alt='water-icon' />{' '}
                <span>Humidity {Math.round(hum)}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-6 d-flex justify-content-start'>
          <div className='right-card d-flex align-items-center'>
            <div className='row'>
              <div className='col-sm-12 heading-sliding text-center'>
                <p>Sliding Roof</p>
              </div>
              <div className='col-sm-12 text-center sub-heading-sliding'>
                <p>
                  Roof status:{' '}
                  <Box
                    color={roof === 'OPEN' ? '#a4a4ff' : '#DC7738'}
                    display={'inline'}
                  >
                    {roof}
                  </Box>
                </p>
              </div>

              <div className='col-sm-12 d-flex justify-content-center'>
                <Button
                  onClick={updateRoofCondition}
                  sx={{
                    justifyContent: 'center',
                    width: ' 100px',
                    height: '64px',
                    borderRadius: '20px',
                    bgcolor: roof === 'OPEN' ? '#ff89b6' : '#a4a4ff',
                    color: '#FFFAF4',
                    fontWeight: '300',
                    fontSize: '20px',
                    fontFamily: 'Poppins',
                    mb: '20px',
                  }}
                >
                  {roof === 'OPEN' ? 'CLOSE' : 'OPEN'}
                </Button>
              </div>
              <div className='col-sm-12 keterangan-sliding text-center'>
                <p>
                  Atap {roof === 'CLOSE' ? 'ditutup' : 'dibuka'} secara{' '}
                  {controller === 'WEB'
                    ? 'manual melalui web'
                    : 'otomatis karena terdeteksi hujan'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
