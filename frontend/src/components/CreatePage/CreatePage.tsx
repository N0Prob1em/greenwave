import { Button, TextField } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import { styled } from '@mui/system';
import './CreatePage.css'
import React, { useState } from 'react';

const FormTextField = styled(TextField)`
  margin: 1em auto;
`;

const CreatePage = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [tagsError, setTagsError] = useState(false);
  const [imageUrlError, setImageUrlError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    setTitleError(false);
    setDescriptionError(false);
    setTagsError(false);
    setImageUrlError(false);

    if(title == '') {
      setTitleError(true);
    }
    if(description == '') {
      setDescriptionError(true);
    }
    if(tags == '') {
      setTagsError(true);
    }
    if(imageUrl == '') {
      setImageUrlError(true);
    }

    if(title && description && tags && imageUrl) {
      console.log(title, description, tags, imageUrl);
      
    }
  }

  return (
      <>
      <Navbar/>
      <form className='CreatePage__form' noValidate autoComplete='off' onSubmit={handleSubmit}>
        <FormTextField
          onChange={(e) => setTitle(e.target.value)}
          className='CreatePage__form-input'
          id='margin-normal'
          label='Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <FormTextField
          onChange={(e) => setDescription(e.target.value)}
          className='CreatePage__form-input'
          label='Description'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={descriptionError}
        />
        <FormTextField
          onChange={(e) => setTags(e.target.value)}
          className='CreatePage__form-input'
          label='Tag(s)'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={tagsError}
        />
        <FormTextField
          onChange={(e) => setImageUrl(e.target.value)}
          className='CreatePage__form-input'
          label='imageUrl'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={imageUrlError}
        />

        <Button
        type='submit'
        color='secondary'
        variant='contained'
        >
        Submit
        </Button>
      </form>
      </>
    )
}

export default CreatePage;