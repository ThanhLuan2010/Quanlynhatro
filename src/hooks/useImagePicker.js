import {useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';

const useImagePicker = () => {
  const [picture, setPicture] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [closeModal, setCloseModal] = useState(false);

  const handleSetImage = image => {
    setCloseModal(true);

    setPicture({
      uri: image.path,
      type: image.mime,
      size: image.size,
      name: Date.now() + '.jpg',
    });
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      width: 512,
      height: 512,
      cropping: true,
    })
      .then(image => {
        handleSetImage(image);
      })
      .then(() => {
        setCloseModal(false);
      });
  };

  const openMultiPicker = () => {
    ImagePicker.openPicker({
      width: 360,
      height: 360,
      multiple: true,
    })
      .then(images => {
        setCloseModal(true);
        setPictures(images);
      })
      .then(() => setCloseModal(false));
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 512,
      height: 512,
      cropping: true,
    })
      .then(image => {
        handleSetImage(image);
      })
      .then(() => setCloseModal(false));
  };

  return {
    picture,
    pictures,
    closeModal,
    openPicker,
    openMultiPicker,
    openCamera,
  };
};

export default useImagePicker;
