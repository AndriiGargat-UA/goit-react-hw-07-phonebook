import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <Layout>
      <GlobalStyle />
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <div>
        <h2>Contacts</h2>
        <ContactList />
        
      </div>
    </Layout>
  );
};
