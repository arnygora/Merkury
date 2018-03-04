import React from 'react';

const PageNavigation = () => {
  return(
      <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                  <a className="page-link" href=""><span className="fas fa-angle-left"></span></a>
              </li>
              <li className="page-item"><a className="page-link" href="">1</a></li>
              <li className="page-item"><a className="page-link" href="">2</a></li>
              <li className="page-item"><a className="page-link" href="">3</a></li>
              <li className="page-item">
                  <a className="page-link" href=""><span className="fas fa-angle-right"></span></a>
              </li>
          </ul>
      </nav>
  )
};

export default PageNavigation;
