import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const PostList = () => {
  const titles = useSelector(st => st.titles);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function() {
    async function fetchTitle() {
      await dispatch(fetchTitlesFromAPI());
      setIsLoading(false);
    }

    if (isLoading) {
      fetchTitle();
    }
  }, [dispatch, isLoading]);

  const vote = (direction, id) => {
    dispatch(sendVoteToAPI(id, direction));
  }

  if (isLoading) return <b>Loading...</b>;

  if (!isLoading && titles.length === 0) {
    return <b>Add a Post</b>;
  }

  return (
    <div className="row">
      {titles.map(title => (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <Link to={'/' + title.id}>{title.title}</Link>
              </div>
              <div className="card-text">
                <p>{title.description}</p>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostList;