import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './PageNotFound.png';

class NotFoundPage extends React.Component{
  render(){
    return(
    <div className="container">
      <div className="d-flex justify-content-center">
        <img src={PageNotFound}  />
      </div>

      <div className="pt-2 pb-4">
        <Link to="/" className="d-flex justify-content-center btn btn-primary">Về Trang Chủ </Link>
      </div>
    </div>
    )
  }
}
export default NotFoundPage;