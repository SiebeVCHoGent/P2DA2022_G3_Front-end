import './CodingTree.css'

import Xarrow from 'react-xarrows'
import { useMemo, useRef } from 'react';
import ConnectElements from 'react-connect-elements';


const tree_connections = [
  ['root1', 'root2'],
  ['root1', 'root3'],
  ['root2', 'leave1'],
  ['root2', 'leave2'],
  ['root2', 'leave3'],
  ['root2', 'leave4'],
  ['root2', 'leave5'],
  ['root2', 'leave6'],
  ['root2', 'leave7'],

  ['root3', 'leave8'],
  ['root3', 'leave9'],
  ['root3', 'leave10'],
  ['root3', 'leave11'],
  ['root3', 'leave12'],
  ['root3', 'leave13'],
  ['root3', 'leave14'],
  ['root3', 'leave15'],
]

export default function CodingTree(){


    return <div className="coding-tree-container">
        <div className="coding-tree-grid elements">
                <div className="tree-obj tree-leave1" id="leave1">Gender Gelijkheid</div>
                <div className="tree-obj tree-leave2" id="leave2">Implementatie van (inter)nationale werknemersrechten</div>
                <div className="tree-obj tree-leave3" id="leave3">Sociale relaties op het werk</div>
                <div className="tree-obj tree-leave4" id="leave4">Werkgelegenheid</div>
                <div className="tree-obj tree-leave5" id="leave5">Organisatie op het werk</div>
                <div className="tree-obj tree-leave6" id="leave6">Gezondheid en veiligheid</div>
                <div className="tree-obj tree-leave7" id="leave7">Opleidingsbeleid</div>

                <div className="tree-obj tree-leave8" id="leave8">Gebruik van energiebronnen</div>
                <div className="tree-obj tree-leave9" id="leave9">Gebruik van waterbronnen</div>
                <div className="tree-obj tree-leave10" id="leave10">Emissies van broeikasgassen</div>
                <div className="tree-obj tree-leave11" id="leave11">Vervuilende uitstoot</div>
                <div className="tree-obj tree-leave12" id="leave12">Miliue-impact</div>
                <div className="tree-obj tree-leave13" id="leave13">Impact op gezondheid en veiligheid</div>
                <div className="tree-obj tree-leave14" id="leave14">Verdere eisen over bepaalde onderwerpen</div>
                <div className="tree-obj tree-leave15" id="leave15">Milieubeleid</div>

                <div className="tree-obj tree-root" id='root1' ref={useRef(null)}>Duurzaamheid bij kmo's</div>
                <div className="tree-obj tree-root2" id="root2" ref={useRef(null)}>Menselijk Kapitaal</div>
                <div className="tree-obj tree-root3" id="root3">Natuurlijk Kapitaal</div>

                {
                  tree_connections.map(con => {
                    return <Xarrow key={con[0] + con[1]} start={con[0]} end={con[1]} zIndex={50} showHead={false} strokeWidth={5} color="#000" curveness={0.2}/>
                  })
                }
        </div>

  </div>
}