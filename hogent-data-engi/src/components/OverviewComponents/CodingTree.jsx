import './CodingTree.css'

import React, { /*Children,*/ useEffect } from 'react'


import { useContext, /*useMemo*/ } from 'react'
import { SearchContext } from '../../contexts/SearchProvider'
import ReactTooltip from 'react-tooltip'

const tree_connections = [
  ['duurzaamheid_kmos', 'menselijk'],
  ['duurzaamheid_kmos', 'natuurlijk'],
  ['menselijk', 'gendergelijkheid'],
  ['menselijk', 'werknemersrechten'],
  ['menselijk', 'sociale_relaties'],
  ['menselijk', 'werkgelegenheid'],
  ['menselijk', 'organisatie'],
  ['menselijk', 'gezondheid_en_veiligheid'],
  ['menselijk', 'opleidingsbeleid'],

  ['natuurlijk', 'energiebronnen'],
  ['natuurlijk', 'waterbronnen'],
  ['natuurlijk', 'broeikasgassen'],
  ['natuurlijk', 'vervuilende_uitstoot'],
  ['natuurlijk', 'milieu_impact'],
  ['natuurlijk', 'impact_g_v'],
  ['natuurlijk', 'veobo'],
  ['natuurlijk', 'milieu_beleid'],
]

export default function CodingTree() {

  const { searchresult: sr } = useContext(SearchContext)

  return <div className="coding-tree-container">
    <div >
      <table className='table-top  w-100'>
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