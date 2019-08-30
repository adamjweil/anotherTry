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
            <Tab tabFor='one'>Messages</Tab>
            <Tab tabFor='one'>Friends</Tab>
            <Tab tabFor='one'>Tickets</Tab>
          </TabList>
          <div className='right menu'>
            <div className='item'>
              <div className='ui icon input'>
                <input type='text' placeholder='Search...' />
                <i aria-hidden='true' className='search icon'></i>
              </div>
            </div>
          </div>
        </div>
        </div>
        <TabPanel tabId='one'>
          <p>Tab 1 content</p>
        </TabPanel>
         <TabPanel tabId='two'>
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId='three'>
          <p>Tab 3 content</p>
        </TabPanel>
      </Tabs>
  );
}

export default ProfileMenu;
