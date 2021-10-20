import styles from './styles.module.scss';

import logoImg from '../../assets/logo.svg';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>MessageList
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>Text</p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img src="https://github.com/EmmanoelBuonafinaTome.png" alt="Emmanoel Tomé" />
            </div>
            <span>Emmanoel Tomé</span>
          </div>
        </li>
      </ul>
    </div>
  )
}