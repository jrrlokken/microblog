import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { sendPostToAPI } from '../actions/postsActions';
import PostForm from '../components/PostForm';

const NewPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const add = ({ title, description, body }) => {
    dispatch(sendPostToAPI(title, description, body));
    history.push('/');
  }

  const cancel = () => {
    history.push('/');
  }

  return (
    <main>
      <h1>New Post</h1>
      <PostForm save={add} cancel={cancel} />
    </main>
  );
}

export default NewPost;