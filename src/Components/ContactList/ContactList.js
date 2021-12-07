import PropTypes from 'prop-types';
import s from './ContacnList.module.css';
import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon} from '../icons/delete.svg'

export default function ContactLIst({ contacts, onDelete }) {
  return (
    <ol className={s.contactlist}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} id={id} className={s.contactlistitem}>
          <div className={s.itemcontentwrap}>
          <span className={s.contactname}>{name}</span>
          <span className={s.contactnumber}>{number}</span>
          <IconButton>
            <DeleteIcon width="24" height="24" onClick={() => onDelete(id)} className={s.deletebutton}/>
          </IconButton>
          </div>
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
