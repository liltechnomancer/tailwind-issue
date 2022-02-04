import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <div className="columns-3">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="prose">
          <h1>Hi there, I would like to show you some bugs.</h1>
          <p>
            The way prose-invert behaves and the way CSS variables are assigned
            in production have me experiencing some issues.
          </p>
          <a>This should be red</a>
        </div>
        <div className="prose prose-slate">
          <h1>Hi there, I would like to show you some bugs.</h1>
          <p>
            The way prose-invert behaves and the way CSS variables are assigned
            in production have me experiencing some issues.
          </p>
          <a>This should be yellow</a>
        </div>
        <div className="prose prose-invert prose-slate">
          <h1>Hi there, I would like to show you some bugs.</h1>
          <p>
            The way prose-invert behaves and the way CSS variables are assigned
            in production have me experiencing some issues.
          </p>
          <a>This should be green</a>
        </div>
      </div>
      <div className="columns-2">
        <div className="prose prose-invert bg-slate-900">
          <h1>Hi there, I would like to show you some bugs.</h1>
          <p>
            The way prose-invert behaves and the way CSS variables are assigned
            in production have me experiencing some issues.
          </p>
          <a>This should be blue</a>
        </div>
        <div className="prose !prose-invert prose-slate bg-slate-900">
          <h1>Hi there, I would like to show you some bugs.</h1>
          <p>
            The way prose-invert behaves and the way CSS variables are assigned
            in production have me experiencing some issues.
          </p>
          <a>This should be green</a>
        </div>
      </div>
      <div className="prose prose-xl !prose-invert prose-slate mt-5 bg-slate-900">
        <h1>Hi there, I would like to show you some bugs.</h1>
        <p>
          The way prose-invert behaves and the way CSS variables are assigned in
          production have me experiencing some issues.
        </p>
        <a>This should be green</a>
      </div>
    </div>
  )
}

//
