import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import ProfileImg from '../../assets/profile.jpg';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

export function Comment(props: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDelete() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1);
    setLikeCount(state => state + 1)
  }

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

            <button 
              onClick={handleDelete}
              title='Deletar comentário'
            >
              <Trash size={20} />
            </button>
          </div>

          <p>
            Muito bom Tonhão, parabéns!
          </p>
        </div>

        <div className={styles.footer}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
