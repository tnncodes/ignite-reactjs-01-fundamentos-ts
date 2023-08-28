import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=50',
      name: 'Brian Baker',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'consectetur adipisicing elit' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae velit mollitia laborum culpa unde facilis dolorum sequi temporibus quasi iusto totam reprehenderit itaque perspiciatis eveniet asperiores, libero, accusantium fuga!' },
      { type: 'link', content: 'itaque perspiciatis' },
    ],
    publishedAt: new Date('2023-08-26 14:11:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=240&q=50',
      name: 'Jane Doe',
      role: 'Designer'
    },
    content: [
      { type: 'paragraph', content: 'consectetur adipisicing elit' },
      { type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum recusandae velit mollitia laborum culpa unde facilis dolorum sequi temporibus quasi iusto totam reprehenderit itaque perspiciatis eveniet asperiores, libero, accusantium fuga!' },
      { type: 'link', content: 'itaque perspiciatis' },
    ],
    publishedAt: new Date('2023-07-16 12:21:00')
  }
];

export function App() {
  return (
      <>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
      </>
  )
}
