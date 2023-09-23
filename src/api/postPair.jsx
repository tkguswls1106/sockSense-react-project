import axios from 'axios';

export const uploadPhotos = async (photos) => {
  const formData = new FormData();
  
  photos.forEach((photo, index) => {
    formData.append('imageFiles', photo);
  });

  for(let pair of formData.entries()) {
      console.log(pair[0]+ ', '+ pair[1]);
   }
  const response = await axios.post(`${process.env.REACT_APP_DB_HOST}/pair`, formData, {
      headers: {'Content-Type': 'multipart/form-data'},
  });
  console.log(response.data);
  return response.data;
};