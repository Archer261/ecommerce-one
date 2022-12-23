import { imageConfigDefault } from 'next/dist/shared/lib/image-config'
import styles from '../styles/ProductCard.module.css'
import Link from 'next/link'

export default function ProductCard(price, name, image, slug) {
    return (

        <div className={styles.main}>
            <img src={image} />
            <h2>{name}</h2>
            <h3>{price}</h3>
            <Link href={`/${slug}`}>View</Link>
        </div>

    )






}