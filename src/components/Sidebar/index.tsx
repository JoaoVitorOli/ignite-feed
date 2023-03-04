import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

import ProfileImg from '../../assets/profile.jpg';

export function Sidebar() {
  return (
    <aside className={styles.aside}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1598983870677-01e066a0b901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
        alt="" 
      />

      <div className={styles.profile}>
        <Avatar 
          img={ProfileImg}
        />

        <strong>Tonho</strong>
        <span>Web Developer</span>
      </div>

      <div className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </div>
    </aside>
  )
}