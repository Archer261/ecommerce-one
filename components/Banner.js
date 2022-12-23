import styles from '../styles/Banner.module.css'


// const QUERY = gql`

// {
//     products {
//       name
//     }
//   }

// `

// export async function getStaticProps(QUERY) {
//     const res = await fetch('https://api-us-east-1.hygraph.com/v2/clbw9x9qu05xj01t1d9pig0oi/master')
//     const products = await res.json()

//     console.log(products)

//     return {
//         props: {
//             products,
//         },
//         revalidate: 10,
//     }
// }

export default function Banner() {

    return (

        <div className={styles.main}>
            Test This Banner
        </div>
    )
}