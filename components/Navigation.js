import styles from '../styles/Navigation.module.css'
import Link from 'next/link'

export default function Navigation() {
    return (

        <div className={styles.main}>
            <Link href={"/"}><h1>Arch</h1></Link>
            <ul className={styles.list}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>Sale</li></Link>
                <Link href="/"><li>Men</li></Link>
                <Link href="/"><li>Women</li></Link>
            </ul>
        </div>

    )
}