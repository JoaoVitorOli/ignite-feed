import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from '../Avatar';
import styles from './styles.module.css';

import { Comment } from '../Comment';
import { ChangeEvent, FormEvent, FormEventHandler, TextareaHTMLAttributes, useState } from 'react';

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
  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newComment, setNewComment] = useState('');
  const isNewCommentEmpty = newComment.length === 0;
  
  const puiblishedDateFormatted = format(
    props.publishedAt, 
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(
    props.publishedAt, 
    { locale: ptBR, addSuffix: true },
  );

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewComment(event.target.value)
  }

  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment('');
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithOutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithOutDeletedOne);
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório');
  }

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

        <form 
          className={styles.commentForm}
          onSubmit={handleCreateNewComment}
        >
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder='Deixe um comentário'
            name="comment"
            onChange={handleNewCommentChange}
            required
            onInvalid={handleNewCommentInvalid}
            value={newComment}
          />

          <div className={styles.footer}>
            <button disabled={isNewCommentEmpty} type='submit'>
              Publicar
            </button>
          </div>
        </form>

        <div className={styles.commetList}>
          {comments.map(comment => (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          ))}
        </div>
      </article>
  );
}