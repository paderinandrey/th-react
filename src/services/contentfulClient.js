import { accessToken, spaceId } from '../../config';
import { createClient } from 'contentful';
import Request from 'superagent';

let client;
// let authorized;

export function initClient() {
  client = client || createClient({
    space: spaceId,
    accessToken,
    host: 'cdn.contentful.com'
  });
  return client.getSpace()
    .then((space) => {
      // authorized = true;
      return space;
    });
}

// export function getClient() {
//   return authorized && client;
// }

// export function loadProducts() {
//   initClient();
//   return client.getEntries({
//     content_type: 'product'
//   }).then((payload) => {
//     console.log(payload.items);
//     return payload.items;
//   }).catch(console.error);
// }




export function loadProducts() {
  initClient();

  // Request
  //   .get('https://cdn.contentful.com/spaces/hrunn6o3teke/environments/master/entries')
  //   .query({ 'content_type': 'product' })
  //   .set('Authorization', `Bearer ${accessToken}`)
  //   .then(({ body: { items } }) => {
  //     // this.setState({ items });
  //     console.log("---------");
  //     console.log(items);
  //     console.log("---------");
  //     return items;
  //   });



  var result = [];

  return client.getEntries({
    content_type: 'product'
  }).then((payload) => {
    // console.log(payload.items);
    // return payload.items;
    payload.items.map((item) => {

      result.push({
        id: item.sys.id,
        title: item.fields.title,
        price: item.fields.price,
        imageUrl: GetImageUrl(item)
      });
      // result.map((it) => console.log(it));
    });
    return result;
  }).catch(console.error);
  // // result.map((it) => console.log(it));
  // console.log(typeof result);
  // // return result;
}


// export function loadPhoto(id) {
//   initClient();
//   return client.getAsset(id).then((asset) => {
//     return asset.fields;
//   }).catch(console.error);
// }


export function GetImageUrl(item) {
  let imgUrl = 'https://www.vipspatel.com/wp-content/uploads/2017/04/no_image_available_300x300.jpg';
  let { mainPhoto } = item.fields;
  if (mainPhoto != undefined) {
    imgUrl = 'https:' + mainPhoto.fields.file.url;
  }
  return imgUrl;

  // else {
  //   item.fields.imageUrl =
  // }

  // initClient();
  // return client.getAsset(id).then((asset) => {
  //   return asset.fields;
  // }).catch(console.error);
}
