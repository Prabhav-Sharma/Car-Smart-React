import styles from "./AddressCard.module.css";

function AddressCard({ address, classes = "", onClick = () => {} }) {
  const { name, location, phone } = address;
  return (
    <div className={`${styles.card_wrapper} ${classes}`} onClick={onClick}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.location}>{location}</p>
      <h4 className={styles.phone}>{phone}</h4>
    </div>
  );
}

export default AddressCard;
