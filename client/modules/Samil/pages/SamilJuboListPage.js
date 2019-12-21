import React from 'react';
import { connect } from 'react-redux';

const SamilJuboListPage = () => {

  return (
    <div>
      Test2
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(SamilJuboListPage);
