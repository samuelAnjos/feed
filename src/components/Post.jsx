import styles from '.Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post (){
    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/samuelAnjos.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Anjos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Agosto ás 20:13h" dateTime="2023-05-11 20:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p>Fala Galera</p>

                <p> <a href=""> sam.design/doctor</a></p>

                <p> <a href="">#novoprojeto #nlw #rocket</a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    placeholder='Deixe seu comentário'
                />

                <footer>

                <button type='submit'>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}> 
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}