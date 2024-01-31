import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { create, getOne, remove, update } from '../services/PostService';
import { Button, Chip, TextField } from '@mui/material';
import TagField from '../components/TagField';

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const emptyPost = {
    id: 0,
    title: '',
    body: '',
    imageUrl: '',
    tags: [],
    userId: 2
  };
  const [post, setPost] = useState(emptyPost);

  useEffect(() => {
    if (id) {
      getOne(id).then((post) => setPost(post));
    } else {
      setPost(emptyPost);
    }
  }, [id]);

  function onChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    const newPost = { ...post, [name]: value };
    setPost(newPost);
  }

  function onSave() {
    if (post.id === 0) {
      create(post).then((response) => {
        navigate('/', { replace: true, state: response });
      });
    } else {
      update(post).then((response) =>
        navigate(`/posts/${post.id}`, { replace: true, state: response })
      );
    }
  }

  function onDelete() {
    remove(post.id).then((response) =>
      navigate('/', { replace: true, state: response })
    );
  }

  function onTagAdd(tagString) {
    //splitta arrayen vid kommatecken
    const tagArray = tagString.split(',');
    //trimma whitespace runt taggar
    const uniqueAndTrimmedTags = tagArray
      .map((tag) => tag.trim())
      .filter((tag) => !post.tags.includes(tag));

    //slå samman befintlig tag-array med de nya, unika taggarna
    const mergedArray = [...post.tags, ...uniqueAndTrimmedTags];

    //spara befintligt inlägg med nya tags-arrayen till state.
    setPost({ ...post, tags: mergedArray });
  }

  function onTagDelete(tagToDelete) {
    const newTags = post.tags.filter((tag) => tag !== tagToDelete);

    setPost({ ...post, tags: newTags });
  }
  return (
    <form>
      <div>
        <TextField
          onChange={onChange}
          value={post.title}
          name="title"
          id="title"
          label="Titel"
        />
      </div>
      <div>
        <TextField
          onChange={onChange}
          value={post.body}
          multiline
          minRows={5}
          name="body"
          id="body"
          label="Innehåll"
        />
      </div>
      <div>
        <TextField
          onChange={onChange}
          value={post.imageUrl}
          name="imageUrl"
          id="imageUrl"
          label="Sökväg till bild"
        />
      </div>
      <div>
        {post?.tags?.length > 0 &&
          post.tags.map((tag) => (
            <Chip onDelete={() => onTagDelete(tag)} key={tag} label={tag} />
          ))}
      </div>
      <div>
        <TagField onSave={onTagAdd} />
      </div>
      <div>
        <Button variant="contained" onClick={() => navigate(-1)}>
          Tillbaka
        </Button>
        {id && (
          <Button onClick={onDelete} variant="contained" color="error">
            Ta bort
          </Button>
        )}
        <Button onClick={onSave} variant="contained" color="success">
          Spara
        </Button>
      </div>
    </form>
  );
}

export default PostEdit;
