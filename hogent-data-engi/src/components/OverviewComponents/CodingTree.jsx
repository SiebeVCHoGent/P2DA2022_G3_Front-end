import './CodingTree.css'

import React, { Children } from 'react'

import Xarrow from 'react-xarrows'
import { useContext, useMemo } from 'react'
import { SearchContext } from '../../contexts/SearchProvider'
import ReactTooltip from 'react-tooltip'
import { Link } from 'react-router-dom'

const tree_connections = [
  ['duurzaamheid_kmos', 'menselijk'],
  ['duurzaamheid_kmos', 'natuurlijk'],
  ['menselijk', 'gender_gelijkheid'],
  ['menselijk', 'werknemersrechten'],
  ['menselijk', 'sociale_relaties'],
  ['menselijk', 'werkgelegenheid'],
  ['menselijk', 'organisaties'],
  ['menselijk', 'gezondheid'],
  ['menselijk', 'opleiding'],

  ['natuurlijk', 'energiebronnen'],
  ['natuurlijk', 'waterbronnen'],
  ['natuurlijk', 'broeikasgassen'],
  ['natuurlijk', 'uitstoot'],
  ['natuurlijk', 'milieu_impact'],
  ['natuurlijk', 'impact_gezondheid'],
  ['natuurlijk', 'verdere_eisen'],
  ['natuurlijk', 'milieubeleid'],
]

export default function CodingTree() {

  const { searchresult: sr } = useContext(SearchContext)

  useMemo(() => {
    if (sr?.coding_tree?.menselijk){
      for (const el of sr?.coding_tree?.menselijk) {
        const node = document.querySelector('#' + el.naam)
        node?.classList.add('green')
        node?.setAttribute('data-tip', true)
        node?.setAttribute('data-for', el.naam + '_t')

        const spannode = document.querySelector('#' + el.naam + '_t').querySelector('span')
        spannode.innerText = el.voorkomen //TODO: map naar juiste naam (1-3)
      }
    }

    if (sr?.coding_tree?.natuurlijk){
      for (const el of sr?.coding_tree?.natuurlijk) {
        console.log(el.naam)
        const node = document.querySelector('#' + el.naam)
        console.log(node)
        node?.classList.add('green')
      }
    }
  }, [sr])
  

  return <div className="coding-tree-container">
    <div className="coding-tree-grid elements" id='coding-tree-elements'>
      <Link to={'/dashboard/gender_gelijkheid'} className='tree-obj tree-leave1' id="gender_gelijkheid" data-tip data-for='gender_gelijkheid_t'>Gender Gelijkheid</Link>
      <ReactTooltip id='gender_gelijkheid_t' effect='solid'>
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
      <Link to={'/dashboard/organisaties'}  className="tree-obj tree-leave5" id="organisaties" data-tip data-for='organisaties_t'>Organisatie op het werk</Link>
      <ReactTooltip id='organisaties_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/gezondheid'}  className="tree-obj tree-leave6" id="gezondheid" data-tip data-for='gezondheid_t'>Gezondheid en veiligheid</Link>
      <ReactTooltip id='gezondheid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/opleiding'}  className="tree-obj tree-leave7" id="opleiding" data-tip data-for='opleiding_t'>Opleidingsbeleid</Link>
      <ReactTooltip id='opleiding_t' effect='solid' >
        <span>Niet Gevonden</span>
      </ReactTooltip>

      <Link to={'/dashboard/energiebronnen'}  className="tree-obj tree-leave8" id="energiebronnen" data-tip data-for='energiebronnen_t'>Gebruik van energiebronnen</Link>
      <ReactTooltip id='energiebronnen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/waterbronnen'}  className="tree-obj tree-leave9" id="waterbronnen" data-tip data-for='waterbronnen_t'>Gebruik van waterbronnen</Link>
      <ReactTooltip id='waterbronnen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/broeikasgassen'}  className="tree-obj tree-leave10" id="broeikasgassen" data-tip data-for='broeikasgassen_t'>Emissies van broeikasgassen</Link>
      <ReactTooltip id='broeikasgassen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/uitstoot'}  className="tree-obj tree-leave11" id="uitstoot" data-tip data-for='uitstoot_t'>Vervuilende uitstoot</Link>
      <ReactTooltip id='uitstoot_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/milieu_impact'}  className="tree-obj tree-leave12" id="milieu_impact" data-tip data-for='milieu_impact_t'>Milieu-impact</Link>
      <ReactTooltip id='milieu_impact_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/impact_gezondheid'}  className="tree-obj tree-leave13" id="impact_gezondheid" data-tip data-for='impact_gezondheid_t'>Impact op gezondheid en veiligheid</Link>
      <ReactTooltip id='impact_gezondheid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/verdere_eisen'}  className="tree-obj tree-leave14" id="verdere_eisen" data-tip data-for='verdere_eisen_t'>Verdere eisen over bepaalde onderwerpen</Link>
      <ReactTooltip id='verdere_eisen_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>
      <Link to={'/dashboard/milieubeleid'}  className="tree-obj tree-leave15" id="milieubeleid" data-tip data-for='milieubeleid_t'>Milieubeleid</Link>
      <ReactTooltip id='milieubeleid_t' effect='solid'>
        <span>Niet Gevonden</span>
      </ReactTooltip>

      <div className="tree-obj tree-root" id='duurzaamheid_kmos'>Duurzaamheid bij kmo's</div>
      <div className="tree-obj tree-root2" id="menselijk">Menselijk Kapitaal</div>
      <div className="tree-obj tree-root3" id="natuurlijk">Natuurlijk Kapitaal</div>

      {
        tree_connections.map(con => {
          return <Xarrow key={con[0] + con[1]} start={con[0]} end={con[1]} zIndex={50} showHead={false} strokeWidth={2} color="#000" curveness={0.2} />
        })
      }
    </div>
  </div>
} 