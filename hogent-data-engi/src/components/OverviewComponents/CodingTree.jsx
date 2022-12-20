import './CodingTree.css'

import { useContext, /*useMemo*/ } from 'react'
import { SearchContext } from '../../contexts/SearchProvider'

export default function CodingTree() {

  const { searchresult: sr } = useContext(SearchContext)

  return <div className="coding-tree-container">
    <div >
      <table className='table-top fa w-100'>
        <thead>
          <tr>
            <th>Term</th>
            <th>Website Score</th>
            <th>Jaarverslag Score</th>
          </tr>
        </thead>
        <tbody>
          {
            !sr?.scores || sr?.scores?.length === 0 ? <tr><td colSpan="3">Geen resultaten</td></tr> :
              sr?.scores?.map((item) => {

                return <tr key={item?.Searchterm?.id} id={item?.Searchterm?.id}>
                  <td>{item?.Searchterm?.term}</td>
                  <td>{Math.round(item?.Score?.website_score * 1000) / 10}/100</td>
                  <td>{Math.round(item?.Score?.jaarverslag_score * 1000) / 10}/100</td>
                </tr>
              })
          }
        </tbody>
      </table>
    </div>
  </div>
} 