import { accessToken, spaceId } from '../../config';
import { noImageAvailable } from '../helpers/images';
import { createClient } from 'contentful';

let client;

export const initClient = () => {
  client = createClient({
    space: spaceId,
    accessToken,
    host: 'cdn.contentful.com'
  });
  return client.getSpace()
    .then((space) => {
      return space;
    });
};

export const loadProducts = () => {
  initClient();
  let result = [];
  return client.getEntries({
    content_type: 'product'
  }).then((payload) => {
    payload.items.map((item) => {
      result.push({
        id: item.sys.id,
        title: item.fields.title,
        price: item.fields.price,
        imageUrl: GetPhoto(item)
      });
    });
    return result;
  }).catch(console.error);
};

export const loadProduct = (id) => {
  initClient();
  return client.getEntry(id).then((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      price: item.fields.price,
      imageUrl: GetPhoto(item),
      photos: GetPhotos(item)
    };
  }).catch(console.error);
};

const GetPhotos = (item) => {
  let results = [];
  let { photos } = item.fields;
  photos.map((photo) =>
    results.push(photoUrl(photo))
  );
  return results;
};

const GetPhoto = (item) => {
  let imgUrl = noImageAvailable();
  let { mainPhoto } = item.fields;
  if (mainPhoto != undefined) {
    imgUrl = photoUrl(mainPhoto);
  }
  return imgUrl;
};

const photoUrl = (photo) => {
  return 'https:' + photo.fields.file.url;
};
