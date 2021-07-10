import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { api } from '../services/api';

function Pagination() {
  const dispatch = useDispatch();
  const info = useSelector(store => store.info);
  const [page, setPage] = React.useState(1);
  const updateStore = ({ info, results }) => {
    dispatch({ type: 'SET_CHARACTERS', characters: results });
    dispatch({ type: 'SET_INFO', info: info });
  }
  const getNewPageFromApi = async () => {
    let { data: { info, results } } = await api.get('/character', {
      params: {
        page
      }
    });

    return { info, results };
  }
  const nextPage = async () => {
    setPage(page + 1);
    updateStore(await getNewPageFromApi(page));
  }

  const previousPage = async () => {
    setPage(page - 1);
    updateStore(await getNewPageFromApi(page));
  }

  const goToPage = async (_page) => {
    setPage(_page);
    updateStore(await getNewPageFromApi(page));
  }


  return (
    <nav aria-label="Page navigation example pb-5 bg-dark ">
      <ul className="pagination justify-content-end bg-dark mt-5">
        {
          info.prev &&
          (<li className="page-item ">
            <button className="page-link bg-dark text-white" href="#" onClick={previousPage}>Previous</button>
          </li>)
        }
        <li className="page-item" >
          <a className="page-link bg-dark text-white" href="#" onClick={() => goToPage(1)}>{1}</a>
        </li>
        <li className="page-item">
          <a className="disabled page-link bg-dark text-white" href="#">...</a>
        </li>

        <li className="page-item">
          <a className="disabled page-link bg-dark text-white" href="#">{page}</a>
        </li>

        <li className="page-item">
          <a className="disabled page-link bg-dark text-white" href="#">...</a>
        </li>
        <li className="page-item">
          <a className="page-link bg-dark text-white" href="#" onClick={() => goToPage(info.pages)}>{info.pages}</a>
        </li>
        {
          info.next &&
          (
            <li className="page-item">
              <a onClick={nextPage} className="page-link bg-dark text-white" href="#">Next</a>
            </li>
          )
        }
      </ul>
    </nav>
  )
}

export default Pagination
