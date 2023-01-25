import styles from '../../styles/Home.module.css'

export default function TestKat(props){

    console.log(props)
    return(
            <>
            <div className={styles.main}>
            <h2>test</h2>
                <p>{props.id}</p>
            </div>
                </>
    )
}