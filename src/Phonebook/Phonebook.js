import {useState, useEffect} from 'react';

import Form from '../Form/Form'
import FilterList from '../FilterList/FilterList'
import ContactList from '../ContactList/ContactList'
import css from './Phonebook.module.css'
import { nanoid } from 'nanoid'



const Phonebook = () => {


  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');





  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    console.log(parsedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);


  // ЗАПИСЬ В ЛОКАЛ СТОР

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);




// ДОБАВЛЯЄМО КОНТАКТ
  const addContact = contact => {

      console.log(contact)

    const newContacts =  {
      // contacts: [...contacts, { ...contact, id: nanoid()}],
      id: nanoid(), ...contact
    }


    const someContact = contacts.some(item => item.name.toLowerCase() === contact.name.toLowerCase(),)


  if (someContact) {
    alert('This contact is already exist!! Try one more time, please!');
    return;
  }

  setContacts(prevState => [newContacts, ...prevState])

}
//УДАЛЯЄМО КОНТАКТ 


const deleteContact = contactId => {
  setContacts(contacts => contacts.filter(contact => contact.id !== contactId))
}

// ФИЛЬТР 

const changeFilter = event => {
  return setFilter(event.currentTarget.value);
};

// ПОШУК КОНТАКТА ПО ФІЛЬТРУ


const visibleContacts = () => {
  const normalFilter = filter.toLowerCase();
// console.log(contacts)
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter),
  );
};

const getFilterVisisbleContacts = visibleContacts();


  return (
                  <div>
                      <h2 className={css.title}>Phonebook</h2>
                      <Form addContact={addContact}/>
                      <h2 className={css.title}>Contacts</h2>
                      <FilterList filter={filter} onFilterHandleChange={changeFilter}/>
                      <ContactList
                contact={getFilterVisisbleContacts}
                ondeleteContact={deleteContact}
            />
                  </div>
              )
}

export default Phonebook;