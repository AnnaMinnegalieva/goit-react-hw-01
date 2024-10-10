import styles from './Profile.module.css';


const Profile = (props) => {

    const {name, tag, location, image, stats} = props;

  return (
    <div className={styles.profile}>
  <div className={styles.review}>
    <img className={styles.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

  <ul className={styles.list}>
    <li className={styles.item}>
      <span>Followers</span>
      <span> {stats.followers}</span>
    </li>
    <li className={styles.item}>
      <span>Views</span>
      <span> {stats.views}</span>
    </li>
    <li className={styles.item}>
      <span>Likes</span>
      <span> {stats.likes}</span>
    </li>
  </ul>
</div>
  )
}

export default Profile;