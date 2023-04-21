import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const myContacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const visibleContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return myContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <ul>
      {visibleContacts().map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
