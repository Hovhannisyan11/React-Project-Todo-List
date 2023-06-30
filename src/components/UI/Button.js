import styles from './Button.module.css'


function Button(props){
    const {onClick,children,title,disabled=false} = props

    return (
        <button {...props} onClick={onClick} className={styles.button} title={title} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button