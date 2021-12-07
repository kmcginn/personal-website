import Head from "next/head";
import SocialIcon from "../components/socialicon";

export default function Home() {
  return (
    <div className="min-h-screen py-2 flex flex-col justify-center items-center">
      <Head>
        <title>Hello!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="px-20 flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl leading-relaxed sm:leading-relaxed md:leading-relaxed font-bold">
          Hello, World!
        </h1>
        <p>I&apos;m Kevin McGinn, a <a className="font-bold hover:underline" href="https://github.com/kmcginn" target="_blank" rel="noreferrer">software developer</a> in Portland, Oregon.</p>
        <p>You can also find a comics criticism essay I wrote in <a className="font-bold hover:underline" href="https://panelxpanel.gumroad.com/l/PXPNO48" target="_blank" rel="noreferrer">PanelxPanel #48</a>.</p>
        <p>Have a great day! 🎉</p>
      </main>

      <footer className="w-full h-28 border-t-2 border-solid border-blue-100 flex justify-center items-center">
        <div className="grid grid-rows-1 grid-cols-3 gap-x-3">
          <span className="sr-only">Social media links</span>
          <SocialIcon
            iconId="github-square"
            iconName="GitHub"
            link="https://github.com/kmcginn"
          />
          <SocialIcon
            iconId="dev"
            iconName="Dev Community"
            link="https://dev.to/kmcginn"
          />
          <SocialIcon
            iconId="twitter-square"
            iconName="Twitter"
            link="https://twitter.com/kmcginn14"
          />
        </div>
      </footer>
    </div>
  );
}
