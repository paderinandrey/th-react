import React from 'react';
import Catalog from './Catalog';
import { loadProducts } from '../services/contentfulClient';

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    loadProducts().then((items) => {
      this.setState({ items });
    });
  }

  render() {
    return <Catalog products={this.state.items} />;
  }
}
