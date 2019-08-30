import React, { component } from 'react';
import { render } from 'react-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import { Link } from 'react-router-dom';


const ProfileMenu = () => {
  return (
        <Tabs
        defaultTab="one"
        onChange={(tabId) => { console.log(tabId) }}
        >
        <div>
        <div className='ui pointing menu'>
          <TabList>
            <div className='item'>
              <Tab tabFor='one'>Messages</Tab>
            </div>
            <div className='item'>
              <Tab tabFor='two'>Friends</Tab>
            </div>
            <div className='item'>
              <Tab tabFor='three'>Tickets</Tab>
            </div>
          </TabList>
          </div>
          </div>

        <TabPanel tabId='one'>
          <p>Messages</p>
        </TabPanel>
         <TabPanel tabId='two'>
          <p>Friends</p>
        </TabPanel>
        <TabPanel tabId='three'>
          <p>Tickets</p>
        </TabPanel>
      </Tabs>
  );
}

export default ProfileMenu;
