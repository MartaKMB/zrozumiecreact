import styles from "./Button.module.css"

export function Button({children, onClick, disabled = false}) {
    return <button disabled={disabled} onClick={onClick} className={`${styles.button} ${disabled ? styles.disabled : ""}`}>{children}</button>
}
