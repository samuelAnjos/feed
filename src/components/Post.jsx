
import styles from '.Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';
import { useState } from 'react';


export function Post ({author, publishedAt, content}){

    const [comments, setComments] = useState([
        'Post muito bacana'
    ])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })
    
    const publishedDateRelativeTNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = setNewCommentText.length === 0

    function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comments, comments.length+1]);
        setNewCommentText('')
    }

    function handleCreateNewComment(){
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete){
        const commentWithoutDeleteOne = comments.filter (comment=> {
            return comment !== commentToDelete;
        })

        setComments(commentWithoutDeleteOne)
    }


    function handleNewCommentChange(){
        event.target.setCustomValidity();
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(){
        setNewCommentText(event.target.value) 
    }

    return (
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeTNow}
                    </time>
            </header>

            <div className={styles.content}>
               { 
                content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content}p>{line.content}</p>;
                    }else if (line.type ===  'link'){
                        return <p key={line.content}p><a href="#">{line.content}</a></p>;
                    }
                })
               }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu comentário'
                    value={handleCreateNewComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>

                <button type='submit' disabled={isNewCommentEmpty}>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}> 
                {
                    comments.map( comment => {
                        return <Comment key={comment} content={comment}/>
                    })}                
            </div>
        </article>
    )
}