import styles from "./AddressCard.module.css";

function AddressCard({ address, classes = "", onClick = () => {} }) {
  const { name, location, phone, pin, country } = address;

  const maskPhoneNumber = (phone) => {
    let maskedNumber = "";
    for (let i = 0; i < phone.length; i++) {
      if (i >= phone.length - 4) maskedNumber += phone[i];
      else maskedNumber += "#";
    }
    return maskedNumber;
  };
  return (
    <div className={`${styles.card_wrapper} ${classes}`} onClick={onClick}>
      <h3 className={styles.name}>{name}</h3>
      <div className={styles.details_wrapper}>
        <p className={styles.location}>{location}</p>
        <p>Ph.: {maskPhoneNumber(phone)}</p>
        <p>PIN: {pin}</p>
        <p>{country}</p>
      </div>
    </div>
  );
}

export default AddressCard;
