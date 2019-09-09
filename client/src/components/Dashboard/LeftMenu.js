import React from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';

const LeftMenu = ({ activeItem }) => {
  const onSubmit = () => {
    console.log("name");
  }
    return (
      <Menu vertical>
        <Menu.Item>
          <Input placeholder='Search...' />
        </Menu.Item>

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              name='search'
              active={activeItem === 'search'}
              onClick={onSubmit}
            >
              Search
            </Menu.Item>
            <Menu.Item
              name='add'
              active={activeItem === 'add'}
              onClick={onSubmit}
            >
              Add
            </Menu.Item>
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={onSubmit}
            >
              Remove
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item
          name='browse'
          active={activeItem === 'browse'}
          onClick={onSubmit}
        >
          <Icon name='grid layout' />
          Browse
        </Menu.Item>
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={onSubmit}
        >
          Messages
        </Menu.Item>

        <Dropdown item text='More'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
  )
};


export default connect()(LeftMenu);
