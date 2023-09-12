import './global.css';
import {Header} from './components/Header';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post'

const posts = [
  {
      id: 1, 
      author: {
        avatarUrl: 'https://github.com/samuelAnjos.png',
        name: 'Samuel Anjos',
        role: 'CTO RM01'
      },
      content : [ 
        {type: 'paragraph', content: 'Fala galera'},
        {type: 'paragraph', content: 'Acabei de subir meu projeto'},
        {type: 'link', content: 'jane.design/oladesing'},
      ],
      publishedAt: new Date('2022-05-03 20:00:00')
      },
  
]

function App() {
 
  return (

    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
           {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           })  

           }
        </main>
      </div>
    </div>

 )     
}

export default App
