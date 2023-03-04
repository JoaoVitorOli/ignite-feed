import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import ProfileImg from '../../assets/profile.jpg';
import { Comment } from '../Comment';

export function Post() {
  return (
      <article className={styles.post}>
        <div className={styles.header}>
          <div className={styles.author}>
            <Avatar 
              img={ProfileImg}
            />

            <div className={styles.authorInfo}>
              <strong>Tonho</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time 
            title='10 de fevereiro 19:51h' 
            dateTime='2020-02-10 00:00:00'
          >
            Publicado há 1h
          </time>
        </div>

        <div className={styles.content}>
          <p>
            Fala galeraa 👋
          </p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
          </p>

          <p>
            👉 <a href="#">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="#">#novoprojeto</a> {" "}
            <a href="#">#nlw</a> {" "}
            <a href="#">#rocketseat</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder='Deixe um comentário'
          />

          <div className={styles.footer}>
            <button type='submit'>
              Publicar
            </button>
          </div>
        </form>

        <div className={styles.commetList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
  );
}