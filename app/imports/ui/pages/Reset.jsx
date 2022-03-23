import React from 'react';
import { Container, Header, Grid, Form, Button } from 'semantic-ui-react';

export default class Reset extends React.Component {

  render() {
    return (

      <Container text>
        <Header as='h1'>Forgot your password?</Header>
        <Grid divided='vertically'>
          <Grid.Row columns= {2}>
            <Grid.Column>
              <p>Enter the email address associated with your account in the text field to the right. We will then send an
    email to that address containing a link that will redirect you to a page where you can reset the password
    for your account. This link will expire within sixty-four minutes of your request, when a new password
    reset request is sent, or the password being changed, whichever comes first.
              </p>
              <p>
    If you do not remember the email address associated with your account, send an email to help@foo.com and one of our
    trained technicians will help you restore your account.
              </p>
              <p>
    This was done for the Meteor 2 bWOD. It is perfectly acceptable to use this page for your final projects in ICS 314;
    however, you should probably change the content of this page (such as the email address above) if you do so.
              </p>
            </Grid.Column>

            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder='Email'/>
                </Form.Field>
                <Form.Field>
                  <Button type='submit'>Submit</Button>
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }

}
