import PropTypes from 'prop-types';
import s from './ContacnList.module.css';
import delbutton from '../images/baseline_delete_forever_black_24dp.png';

export default function ContactLIst({ contacts, onDelete }) {
  // console.log(contacts);
  return (
    <ol className={s.contactlist}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={s.contactlistitem}>
          <span> {name} </span>
          <span>{number}</span>
          <button
            type="button"
            onClick={() => onDelete(id)}
            style={{ backgroundImage: `url('${delbutton}')` }}
            className={s.deletebutton}
          ></button>
        </li>
      ))}
    </ol>
  );
}

ContactLIst.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
