import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import ProfileImg from '../../assets/profile.jpg';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false}
        img={ProfileImg}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Tonho</strong>
              <time 
                title='10 de fevereiro 19:51h' 
                dateTime='2020-02-10 00:00:00'
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </div>

          <p>
            Muito bom Tonhão, parabéns!
          </p>
        </div>

        <div className={styles.footer}>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </div>
      </div>
    </div>
  )
}
