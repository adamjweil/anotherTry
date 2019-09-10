import React from "react";
import {
  TextArea,
  Header,
  Input,
  Button,
  Form,
  Grid,
  Select
} from "semantic-ui-react";
// Redux
import { connect } from "react-redux";

const projectOptions = [
  { key: 0, text: "OPP-IG", value: "OPP-IG" },
  { key: 1, text: "Security Master", value: "SECURITY MASTER" },
  { key: 2, text: "INSURANCE", value: "INSURANCE" }
];

const people = [
  { key: 0, text: "Adam Weil", value: "Adam Weil" },
  { key: 1, text: "Lindsay Weil", value: "Lindsay Weil" },
  { key: 2, text: "Matt Weil", value: "Matt Weil" }
];

const releaseOptions = [
  { key: 0, text: "19A-12", value: "19A-12" },
  { key: 1, text: "20B-1", value: "20B-1" },
  { key: 2, text: "20C-2", value: "20C-2" }
];

const ticketTypes = [
  { key: 0, text: "BUGFIX", value: "BUGFIX" },
  { key: 1, text: "ENHANCEMENT", value: "ENHANCEMENT" }
];

const environmentValues = [
  { key: 0, text: "QABIN", value: "QABIN" },
  { key: 1, text: "QANON", value: "QANON" },
  { key: 2, text: "QAMP", value: "QAMP" },
  { key: 2, text: "BiVuk", value: "BiVuk" }
];

const processValues = [
  { key: 0, text: "SECURITIES", value: "SECURITIES" },
  { key: 1, text: "PRODUCTS", value: "PRODUCTS" },
  { key: 2, text: "ACCOUNTS", value: "ACCOUNTS" },
  { key: 3, text: "FULLFILLMENT", value: "FULLFILLMENT" },
  { key: 4, text: "ACCOUNT AFFILIATES", value: "ACCOUNT AFFILIATES" },
  { key: 5, text: "PRODUCT AFFILIATES", value: "PRODUCT AFFILIATES" },
  { key: 6, text: "RESTRICTIONS", value: "RESTRICTIONS" },
  { key: 7, text: "PRICING", value: "PRICING" },
  { key: 8, text: "TERMS", value: "TERMS" }
];

const statusValues = [
  { key: 0, text: "GO", value: "GO" },
  { key: 1, text: "TALK", value: "TALK" },
  { key: 2, text: "TBD", value: "TBD" },
  { key: 3, text: "TBD-X", value: "TBD-X" }
];


const NewTicketForm = (props) => {
  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <div className="ui attached message">
          <div className="header">
            <center>
              <Header as="h2">
                <i className="ticket icon"></i>
                New Ticket Form
              </Header>
            </center>
          </div>
          <center>
          <p>
          Submit a New Ticket Below!
          </p>
          </center>
        </div>
        <Form size='small' className="ui form attached fluid segment">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Form.Group inline>
            <label style={{ fontWeight: "800", fontSize: "16px" }}>
              Importance:
            </label>
            <label style={{ color: "red", fontWeight: "500" }}>HIGH</label>
            <Form.Radio value="high" />
            <label style={{ color: "orange", fontWeight: "500" }}>MEDIUM</label>
            <Form.Radio value="medium" />
            <label style={{ color: "gray", fontWeight: "500" }}>LOW</label>
            <Form.Radio value="low" />
            </Form.Group>
            <Form.Group inline>
            <Form.Field
              id="form-text-control-hrs"
              control={Input}
              label="Est. Hrs:"
              placeholder="Est. hrs"
            />
          </Form.Group>
          </div>
          <Form.Group widths="equal">
            <Form.Field inline
            control={Select}
            options={ticketTypes}
            label="Type:"
            placeholder="Txt Type" />
            <Form.Field inline
              control={Select}
              options={releaseOptions}
              label={{
                children: "Release:",
                htmlFor: "form-select-control-release"
              }}
              search
              searchInput={{ id: "form-select-control-release" }}
              placeholder='Release'
            />
            <Form.Field inline
              control={Select}
              options={projectOptions}
              label={{
                children: "Project:",
                htmlFor: "form-select-control-project"
              }}
              search
              searchInput={{ id: "form-select-control-project" }}
              placeholder='Project'
            />
          </Form.Group>

          <Form.Group widths="even">

            <Form.Field inline
              control={Select}
              options={people}
              label={{
                children: "Requester:",
                htmlFor: "form-select-control-requester"
              }}
              search
              searchInput={{ id: "form-select-control-requester" }}
              placeholder='Requestor'
              required
            />

            <Form.Field inline
              control={Select}
              options={people}
              label={{
                children: "Tester:",
                htmlFor: "form-select-control-tester"
              }}
              search
              searchInput={{ id: "form-select-control-tester" }}
              placeholder='Tester'
            />

            <Form.Field inline
              control={Select}
              options={people}
              label={{
                children: "Fixer:",
                htmlFor: "form-select-control-fixer"
              }}
              search
              searchInput={{ id: "form-select-control-fixer" }}
              required
              placeholder='Fixer'
            />

          </Form.Group>

          <Form.Field
            id="form-text-control-summary"
            control={Input}
            label="Summary:"
            placeholder="Summary"
            required
          />
          <Form.Field
            id="form-textarea-control-description"
            control={TextArea}
            label="Full Description:"
            placeholder="Description"
            required
          />

          <Form.Group widths="equal">

            <Form.Field inline
              control={Select}
              options={environmentValues}
              label={{
                children: "Env.:",
                htmlFor: "form-select-control-env"
              }}
              search
              searchInput={{ id: "form-select-control-env" }}
              placeholder="Environment"
            />

            <Form.Field inline
              control={Select}
              options={processValues}
              id="form-text-control-process"
              label={{
                children: "Process:",
                htmlFor: "form-select-control-process"
              }}
              placeholder="Process"
            />

            <Form.Field inline
              control={Select}
              options={statusValues}
              id="form-text-control-status"
              label="Status:"
              placeholder="Status"
              required
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              id="form-text-control-notes"
              control={TextArea}
              label="Notes:"
              placeholder="Notes"
            />
          </Form.Group>

          <Button className='ui primary button'>
            Submit
          </Button>
          <Button className="ui button">
            Cancel
          </Button>

        </Form>
      </Grid.Column>
    </Grid>
  );
};

NewTicketForm.propTypes = {};

export default connect()(NewTicketForm);
