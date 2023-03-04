import { Header } from "./components/Header"
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./data/posts";

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
