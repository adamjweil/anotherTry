import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadAllUsers } from "../../actions/user";
import { Container } from 'semantic-ui-react';
import { Table, Header, Image } from 'semantic-ui-react';
const Directory = ({ users }) => {
  useEffect(() => {
    loadAllUsers();
  }, []);
  const style = {
    h1: {
      marginTop: '3em',
    },
    h2: {
      margin: '4em 0em 2em',
    },
    h3: {
      marginTop: '2em',
      padding: '2em 0em',
    },
    last: {
      marginBottom: '300px',
    },
  }
  return (
    <Container>
    <Header as='h3' content='Responsive Table' style={style.h3} textAlign='center' />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Lena
                  <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>22</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Matthew
                  <Header.Subheader>Fabric Design</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>15</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Lindsay
                  <Header.Subheader>Entertainment</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>12</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Header as='h4' image>
                <Image rounded size='mini' src='/images/wireframe/square-image.png' />
                <Header.Content>
                  Mark
                  <Header.Subheader>Executive</Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>11</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>

  );
}

Directory.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return { users: state.users };
};

export default connect()(Directory);
