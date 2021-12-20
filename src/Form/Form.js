import { useState } from "react";

import css from "./Form.module.css";


function Form({ addContact }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');


  const [state, setState] = useState({name:'', number:''})

  const {name, number} = state;



  // const handleNameChange = event => {
  //     setName(event.currentTarget.value);
  //   };
  //   const handleNumberChange = event => {
  //     setNumber(event.currentTarget.value);
  //   };
const onInputChange = e => {
  const {value, name} = e.target;
  setState({...state, [name]: value})
}
 


    const handleSabmit = event => {
      event.preventDefault();
      addContact(state);
      setState({name:'' , number:''})
    }

      return (
              <form onSubmit={handleSabmit} className={css.form}>
                  <div>
                <label className={css.label}>
                <span className={css.span}>Name</span> 
                  <input
                  className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                  />
                </label>
                <label className={css.label}>
                <span className={css.span}>Number</span> 
                  <input
                  className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={onInputChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                  />
                </label>
                </div>
                <button type="submit" className={css.btn}>
                    ДОБАВИТЬ КОНТАКТ
                </button>
              </form>
            );
}


export default Form;
