import s from './ContacnList.module.css';

export default function ContactLIst({ contacts }) {
  console.log(contacts);
  return (
    <ol className={s.contactlist}>
      {contacts.map(({ id, name }) => (
        <li key={id} id={id}>
          <span>{name}</span>
        </li>
      ))}
    </ol>
  );
}
