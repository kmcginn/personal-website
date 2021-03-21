import Head from 'next/head'
import SocialIcon from '../components/socialicon'

export default function Home() {
  return (
    <div className="min-h-screen py-2 flex flex-col justify-center items-center">
      <Head>
        <title>Hello!</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>

      <main className="px-20 flex-1 flex flex-col justify-center items-center">
        <h1 className="text-3xl">
          Hello, World!
        </h1>
        <p>I'm Kevin McGinn, a software developer in Portland, Oregon</p>
        <p>This website is brand new, and still under construction</p>
        <p> 🚧👷🏻‍♂️🚧</p>
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/kmcginn" target="_blank">
          <FontAwesomeIcon title="GitHub" icon={['fab', 'github-square']} size="3x" className={styles.socialIcon}/>
        </a>
        <a href="https://dev.to/kmcginn" target="_blank">
          <FontAwesomeIcon title="Dev Community" icon={['fab', 'dev']} size="3x" className={styles.socialIcon}/>
        </a>
        <a href="https://twitter.com/kmcginn14" target="_blank">
          <FontAwesomeIcon title="Twitter" icon={['fab', 'twitter-square']} size="3x" className={styles.socialIcon}/>
        </a>
      </footer>
    </div>
  )
}
