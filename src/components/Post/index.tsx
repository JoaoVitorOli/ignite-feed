import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import { Comment } from '../Comment';

interface PostProps {
  author: {
      avatarUrl: string;
      name: string;
      role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post(props: PostProps) {
  const puiblishedDateFormatted = format(
    props.publishedAt, 
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    props.publishedAt, 
    { locale: ptBR, addSuffix: true },
  );

  return (
      <article className={styles.post}>
        <div className={styles.header}>
          <div className={styles.author}>
            <Avatar 
              img={props.author.avatarUrl}
            />

            <div className={styles.authorInfo}>
              <strong>{props.author.name}</strong>
              <span>{props.author.role}</span>
            </div>
          </div>

          <time 
            title={puiblishedDateFormatted} 
            dateTime={props.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </div>

        <div className={styles.content}>
          {props.content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href={line.content} target='_blank'>{line.content}</a></p>;
            }
          })}
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