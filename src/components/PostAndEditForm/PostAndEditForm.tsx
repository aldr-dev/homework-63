import React, {useState} from 'react';
import './PostAndEditForm.css';
import {DataForm, MutationDataForm} from '../../types';
import axiosApi from '../../axiosApi';
import ErrorStatus from '../ErrorStatus/ErrorStatus';

const PostAndEditForm = () => {
  const [data, setData] = useState<DataForm>({
    title: '',
    description: '',
  });
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleError = (status: boolean) => {
    setIsError(status);
  };

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData: MutationDataForm = {
      data: data,
      datetime: new Date(new Date().toLocaleString('en-US', {timeZone: 'Asia/Bishkek'})).toISOString(),
    };

    setData({
      title: '',
      description: '',
    });

    if (data.title.length !== 0 && data.description.length !== 0) {
      try {
        setIsLoader(true);
        const response = await axiosApi.post<MutationDataForm>('/posts.json', formData);
        setIsLoader(false);

        if (response.status !== 200) {
          setIsError(true);
          throw new Error('An error has occurred. Failed to send information. ' + response.status);
        }

      } catch (error) {
        setIsLoader(false);
        setIsError(true);
        console.error('An error has occurred. Failed to send information. ' + error);
      }
    }
  };

  return (
    <>
      <ErrorStatus
        error={isError}
        handleError={handleError}>
        An error has occurred. Failed to send information.
      </ErrorStatus>
      <div className="form-wrapper">
        <h3 className="form-title">Add new post</h3>
        <form onSubmit={onFormSubmit} className="form">
          <label htmlFor="title">Title</label>
          <input
            onChange={onFieldChange}
            id="title"
            value={data.title}
            className="form-input"
            type="text"
            name="title"
            placeholder="Enter post title"
            required
          />
          <label htmlFor="description">Description</label>
          <textarea
            onChange={onFieldChange}
            id="description"
            value={data.description}
            className="form-description"
            name="description"
            placeholder="Enter post description"
            required>
          </textarea>
          <button className="form-btn" disabled={isLoader} type="submit">
            <div className={isLoader ? 'spinner' : ''}>
              {isLoader ? '' : 'Save'}
            </div>
          </button>
        </form>
      </div>
    </>
  );
};

export default PostAndEditForm;