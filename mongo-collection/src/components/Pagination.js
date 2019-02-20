import React from 'react';


const Pagination = () => {
    return(
    <div>
        <nav aria-label="Page navigation example" style={{marginTop : 50, marginLeft : 400}}>
            <ul className="pagination">
                <li className="page-item"><a class="page-link" href="">Previous</a></li>
                <li className="page-item"><a class="page-link" href="">1</a></li>
                <li className="page-item"><a class="page-link" href="">2</a></li>
                <li className="page-item"><a class="page-link" href="">3</a></li>
                <li className="page-item"><a class="page-link" href="">Next</a></li>
            </ul>
        </nav>
    </div>
    )
  }

  export default Pagination;