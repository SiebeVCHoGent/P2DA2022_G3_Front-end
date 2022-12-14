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

  useEffect(() => {
    if (sr?.Tree) {
      const al_ok = new Set()
      for (const location in sr.Tree) {
        for (const subtree in sr.Tree[location]) {
          for (const item in sr.Tree[location][subtree]) {
            for (const opzoekterm in sr.Tree[location][subtree][item]) {
              if (sr.Tree[location][subtree][item][opzoekterm] > 0) {
                if (!al_ok.has(item)) {
                  al_ok.add(item)

                  const node = document?.querySelector('#' + item)
                  node?.classList.add('green')
                  node?.setAttribute('data-for', item + '_t')

                  const spannode = document.querySelector('#' + item + '_t')?.querySelector('span')
                  if (spannode)
                    spannode.innerHTML = 'Gevonden ' + (location === 'pdf' ? 'in het jaarverslag' : 'op de website')
                }
                else {
                  const spannode = document?.querySelector('#' + item + '_t')?.querySelector('span')

                  if (spannode && !spannode.innerHTML.includes((location === 'pdf' ? 'jaarverslag' : 'website')))
                    spannode.innerHTML = spannode.innerHTML + '<br/> Gevonden ' + (location === 'pdf' ? 'in het jaarverslag' : 'op de website')
                }
              }
              else {
                if (!al_ok.has(item)) {
                  const node = document?.querySelector('#' + item)
                  node?.classList.remove('green')
                  node?.setAttribute('data-for', item + '_t')

                  const spannode = document.querySelector('#' + item + '_t')?.querySelector('span')
                  if (spannode)
                    spannode.innerHTML = 'Niet Gevonden'
                }
              }
            }
          }
        }
      }
    }
    else {
      // Delete green when there is no tree
      for (const item of tree_connections) {
        const node = document?.querySelector('#' + item[1])
        node?.classList.remove('green')
        node?.setAttribute('data-for', item[1] + '_t')

        const spannode = document.querySelector('#' + item[1] + '_t')?.querySelector('span')
        if (spannode)
          spannode.innerHTML = 'Niet Gevonden'
      }
    }
  }, [sr])

  
  return <div className="coding-tree-container">
    <div >
    <table className='table-top a w-100'>
      <thead>
        <tr>
          <th>Term</th>
          <th>Website Score</th>
          <th>Jaarverslag Score</th>
        </tr>
      </thead>
      <tbody>
          {
            !sr?.score || sr?.scores?.length === 0 ? <tr><td colSpan="3">Geen resultaten</td></tr> :
             sr?.scores?.map((item) => {

              return <tr key={item?.Searchterm?.id} id={item?.Searchterm?.id}>
                <td>{item?.Searchterm?.term}</td>
                <td>{Math.round(item?.Score?.website_score*1000)/10}/100</td>
                <td>{Math.round(item?.Score?.jaarverslag_score * 1000)/10}/100</td>
              </tr>
            })
          }

          {/* {
            sr?.scores.map((item) => {
              return <ReactTooltip id={item?.Searchterm?.id + '_t'} key={item?.Searchterm?.id + '_t'} place="right" effect="solid" anchorId={item?.Searchterm?.id} content="WOOOO"/>
            })
          } */
          }
      </tbody>
    </table>
      
    </div>
  </div>
} 