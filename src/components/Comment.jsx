import { ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/samuelAnjos.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorContent}>
                            <strong>Samuel Anjos</strong>
                            <time title="11 de Agosto ás 20:13h" dateTime="2023-05-11 20:13:30">Publicado há 1h</time>
                        </div>

                        <button title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}