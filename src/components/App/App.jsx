import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Section, ContactForm, ContactList, Filter, Heading } from 'components';

const LS_KEY = 'contactsLS';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedState = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedState) {
      this.setState({ contacts: savedState });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contacts));
    }
  }

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;
    const isExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const normalizedQuery = this.state.filter.toLowerCase();

    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedQuery)
    );

    return filteredContacts;
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <Section>
          <Heading>Phonebook</Heading>
          <ContactForm onAddContact={this.handleAddContact} />
        </Section>
        <Section>
          <Heading>Contacts</Heading>
          <Filter value={filter} onChange={this.handleFilterChange} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.handleDeleteContact} />
        </Section>
      </Container>
    );
  }
}
