import './CodingTree.css'

import React, { /*Children,*/ useEffect } from 'react'


import { useContext, /*useMemo*/ } from 'react'
import { SearchContext } from '../../contexts/SearchProvider'
/*import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'
import Xarrow from 'react-xarrows'*/

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
    <div className="coding-tree-grid elements" id='coding-tree-elements'>
     {/*<><Link to={'/dashboard/gendergelijkheid'} className='tree-obj tree-leave1' id="gendergelijkheid" data-tip data-for='gendergelijkheid_t'>Gender Gelijkheid</Link>
      <ReactTooltip id='gendergelijkheid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/werknemersrechten'} className="tree-obj tree-leave2" id="werknemersrechten" data-tip data-for='werknemersrechten_t'>Implementatie van (inter)nationale werknemersrechten</Link>
      <ReactTooltip id='werknemersrechten_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/sociale_relaties'} className="tree-obj tree-leave3" id="sociale_relaties" data-tip data-for='sociale_relaties_t'>Sociale relaties op het werk</Link>
      <ReactTooltip id='sociale_relaties_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/werkgelegenheid'} className="tree-obj tree-leave4" id="werkgelegenheid" data-tip data-for='werkgelegenheid_t'>Werkgelegenheid</Link>
      <ReactTooltip id='werkgelegenheid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/organisatie'} className="tree-obj tree-leave5" id="organisatie" data-tip data-for='organisatie_t'>Organisatie op het werk</Link>
      <ReactTooltip id='organisatie_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/gezondheid_en_veiligheid'} className="tree-obj tree-leave6" id="gezondheid_en_veiligheid" data-tip data-for='gezondheid_en_veiligheid_t'>Gezondheid en veiligheid</Link>
      <ReactTooltip id='gezondheid_en_veiligheid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/opleidingsbeleid'} className="tree-obj tree-leave7" id="opleidingsbeleid" data-tip data-for='opleidingsbeleid_t'>Opleidingsbeleid</Link>
      <ReactTooltip id='opleidingsbeleid_t' effect='solid' >
        <span>Niet Gevonden</span>
      </ReactTooltip>

      <Link to={'/dashboard/energiebronnen'} className="tree-obj tree-leave8" id="energiebronnen" data-tip data-for='energiebronnen_t'>Gebruik van energiebronnen</Link>
      <ReactTooltip id='energiebronnen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/waterbronnen'} className="tree-obj tree-leave9" id="waterbronnen" data-tip data-for='waterbronnen_t'>Gebruik van waterbronnen</Link>
      <ReactTooltip id='waterbronnen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/broeikasgassen'} className="tree-obj tree-leave10" id="broeikasgassen" data-tip data-for='broeikasgassen_t'>Emissies van broeikasgassen</Link>
      <ReactTooltip id='broeikasgassen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/vervuilende_uitstoot'} className="tree-obj tree-leave11" id="vervuilende_uitstoot" data-tip data-for='vervuilende_uitstoot_t'>Vervuilende uitstoot</Link>
      <ReactTooltip id='vervuilende_uitstoot_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/milieu_impact'} className="tree-obj tree-leave12" id="milieu_impact" data-tip data-for='milieu_impact_t'>Milieu-impact</Link>
      <ReactTooltip id='milieu_impact_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/impact_g_v'} className="tree-obj tree-leave13" id="impact_g_v" data-tip data-for='impact_g_v_t'>Impact op gezondheid en veiligheid</Link>
      <ReactTooltip id='impact_g_v_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/veobo'} className="tree-obj tree-leave14" id="veobo" data-tip data-for='veobo_t'>Verdere eisen over bepaalde onderwerpen</Link>
      <ReactTooltip id='veobo_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/milieu_beleid'} className="tree-obj tree-leave15" id="milieu_beleid" data-tip data-for='milieu_beleid_t'>Milieubeleid</Link>
      <ReactTooltip id='milieu_beleid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>

      <div className="tree-obj tree-root black" id='duurzaamheid_kmos'>Duurzaamheid bij kmo's</div>
      <div className="tree-obj tree-root2 black" id="menselijk">Menselijk Kapitaal</div>
      <div className="tree-obj tree-root3 black" id="natuurlijk">Natuurlijk Kapitaal</div>

      {
        tree_connections.map(con => {
          return <Xarrow key={con[0] + con[1]} start={con[0]} end={con[1]} zIndex={50} showHead={false} strokeWidth={2} color="#000" curveness={0.2} />
        })
      }</>*/}
    </div>
  </div>
} 