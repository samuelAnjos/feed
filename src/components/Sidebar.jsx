import styles from './Sidebar.module.css';

import {PencilLine} from 'phosphor-react'
 
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>

            <img 
            className={styles.sidebar}

            src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D&w=500&q=60" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/samuelAnjos.png" />
                <strong>Samuel Anjos</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine/>
                    Editar o seu parfil
                    </a>
            </footer>
        </aside>
    );
}