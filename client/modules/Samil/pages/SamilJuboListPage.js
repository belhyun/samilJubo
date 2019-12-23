import React from 'react';
import { connect } from 'react-redux';
import Carousel, { Modal, ModalGateway } from 'react-images';


const images = [
  { src: 'https://www.samilchurch.com/files/attach/images/2324/891/642/001/e7f73d3c79fae53864afd84fb2d76eaa.jpg' },
  { src: 'https://www.samilchurch.com/files/attach/images/2324/891/642/001/b785f59ccee7e9f7219ba4c844a7981f.jpg' }];

const SamilJuboListPage = () => {

  return (
    <div>
      <ModalGateway>
          <Modal onClose={false}>
            <Carousel views={images} />
          </Modal>
      </ModalGateway>
    </div>
  );
};

// Actions required to provide data for this component to render in sever side.

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(SamilJuboListPage);
