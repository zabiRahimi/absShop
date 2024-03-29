
import { Link, useNavigate  } from 'react-router-dom';
// import {  useNavigate } from 'react-router';

import  "./notFound.css";

const NotFound=()=> {
  const navigate=useNavigate();
    return (
      <div className='continerNotFound'>
        <div className='rounded-circle notFoundDiv1'>
          <h1>خطای 404</h1>
          <i className="far fa-frown fa-10x" ></i>
          <h3 className='notFoundEn'>404 - page not found</h3>
        </div>
          <h3>این صفحه وجود ندارد ، یا اینکه ممکن است برای مدتی در دسترس نباشد
          </h3>
          <div>
            <button className='btn btn-success notFoundBtn1'><Link to='/'>صفحه نخست</Link></button>
            <button className='btn btn-info notFoundBtn2' onClick={()=>{navigate(-1)}} >بازگشت</button>
          </div>
      </div>
    );
  }  
  export default NotFound;