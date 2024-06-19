import {Grid, IconButton, styled} from '@mui/material';
import {ChangeEvent, FC, useState} from 'react';
import {ImageUploaderProps} from './image_uploader.type';
import {ImageItem} from '../carousel/carousel.type';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CloseIcon from '@mui/icons-material/Close';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ImageUploader: FC<ImageUploaderProps> = () => {
  const [imageList, setImageList] = useState<ImageItem []>([{
    label: 'husky',
    imgPath: 'https://www.dogster.com/wp-content/uploads/2024/01/siberian-husky-dog-standing-on-grass_Edalin-Photograhy_Shutterstock.jpeg.webp'
  }]);

  const handleUploadChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setImageList([...imageList, {label: file.name, imgPath: url}]);
    // we should clear the value so we can trigger onchange event multiple times
    event.target.value = ''; 
  };

  const handleDeleteImage = (item: ImageItem) => () => {
    setImageList(imageList.filter((v) => v.imgPath !== item.imgPath));
  };

  return (
    <>
      <Grid container spacing={1}>
        {imageList.map((item) => (
          <Grid item key={item.imgPath}
            xs={4} sx={{position: 'relative'}}>
            <img
              src={`${item.imgPath}`}
              loading="lazy"
              className='h-20 w-full object-cover'
            />
            <IconButton
              className='border border-gray-500 absolute top-0 -right-1 border-solid bg-white w-5 h-5'
              onClick={handleDeleteImage(item)}
            >
              <CloseIcon sx={{fontSize: '16px'}} />
            </IconButton>
          </Grid>
        ))}
        {imageList.length < 9 && (
          <Grid item xs={4}>
            <IconButton
              component="label"
              className='border-2 border-dashed border-gray-500 rounded-none h-20 w-full'
            >
              <CameraAltIcon fontSize={'large'} />
              <VisuallyHiddenInput type="file" onChange={handleUploadChange} />
            </IconButton>
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default ImageUploader;
