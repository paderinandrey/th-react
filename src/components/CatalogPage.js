import React from 'react';
import Catalog from './Catalog';
// import products from '../constants/Products';
import request from 'superagent';

const accessToken = 'ad1c5e65e8c794862176b5057739f20bcde36343a9c55705984ca2a82a57f2a2';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    request
      .get('https://cdn.contentful.com/spaces/hrunn6o3teke/environments/master/entries')
      // .query({ 'content_type': 'product' })
      .set('Authorization', `Bearer ${accessToken}`)
      .then(({ body: { items } }) => {
        this.setState({ items });
        console.log(items);
      });
  }

  render() {
    return <Catalog products={this.state.items} />;
  }
}
