import PostList from './PostList';

const HomePage = () => {
  return (
    <>
      <header>
        <div className="jumbotron container">
          <h1 className="display-4">Microblog</h1>
          <p className="lead">A tiny blog</p>
          <div className="display-inline-block">
            <a href="/blog" className="mr-3">Blog</a>
            <a href="/blog/new">Add a Post</a>
          </div>
        </div>
      </header>
      <main>
        <PostList />
      </main>
    </>
  )
}

export default HomePage;