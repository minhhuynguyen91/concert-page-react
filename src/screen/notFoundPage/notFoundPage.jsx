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

      <div>
        <Link to="/" className="d-flex justify-content-center">Go to Home </Link>
      </div>
    </div>
    )
  }
}
export default NotFoundPage;