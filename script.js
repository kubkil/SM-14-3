import PropTypes from 'prop-types';
// metoda createClass, zapis zmiennej nowo tworzonej klasy przez UpperCase
const GalleryItem = React.createClass({
  // określa typy danych dostarczanych do ReactElement w postaci właściwości
  propTypes: {
    // propTypes czy PropTypes?
    image: React.PropTypes.object.isRequired,
  },
  // metoda render musi zwracać obiekt ReactElement
  render: function () {
    return (
      React.createElement('div', {},
        React.createElement('h2', {}, this.props.image.name),
        React.createElement('img', {src: this.props.image.src})
      )
    )
  },
});

const image = {
  name: 'Kotek',
  src: 'http://imgur.com/n8OYCzR.png'
};

const element = React.createElement(GalleryItem, { image: image });

ReactDOM.render(element, document.getElementById('app'));