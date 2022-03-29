import './CodingTree.css'

import Xarrow from 'react-xarrows'
import { useContext, useMemo } from 'react'
import { SearchContext } from '../../contexts/SearchProvider'

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
    <div className="coding-tree-grid elements">
      <div className="tree-obj tree-leave1" id="gender_gelijkheid">Gender Gelijkheid</div>
      <div className="tree-obj tree-leave2" id="werknemersrechten">Implementatie van (inter)nationale werknemersrechten</div>
      <div className="tree-obj tree-leave3" id="sociale_relaties">Sociale relaties op het werk</div>
      <div className="tree-obj tree-leave4" id="werkgelegenheid">Werkgelegenheid</div>
      <div className="tree-obj tree-leave5" id="organisaties">Organisatie op het werk</div>
      <div className="tree-obj tree-leave6" id="gezondheid">Gezondheid en veiligheid</div>
      <div className="tree-obj tree-leave7" id="opleiding">Opleidingsbeleid</div>

      <div className="tree-obj tree-leave8" id="energiebronnen">Gebruik van energiebronnen</div>
      <div className="tree-obj tree-leave9" id="waterbronnen">Gebruik van waterbronnen</div>
      <div className="tree-obj tree-leave10" id="broeikasgassen">Emissies van broeikasgassen</div>
      <div className="tree-obj tree-leave11" id="uitstoot">Vervuilende uitstoot</div>
      <div className="tree-obj tree-leave12" id="milieu_impact">Milieu-impact</div>
      <div className="tree-obj tree-leave13" id="impact_gezondheid">Impact op gezondheid en veiligheid</div>
      <div className="tree-obj tree-leave14" id="verdere_eisen">Verdere eisen over bepaalde onderwerpen</div>
      <div className="tree-obj tree-leave15" id="milieubeleid">Milieubeleid</div>

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