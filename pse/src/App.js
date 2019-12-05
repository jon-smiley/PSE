import React from 'react'
import { Main} from 'smiley-design'
import Navbar from './components/Navbar'
import GraphPanel from './components/graphs/graphPanel'
import SearchStock from './components/searchStocks/searchStock'

const App = () => (
  <Main typeContainer="main"> 
  {/* Add component that will allow scrolling stock prices */}
  {/* Add component that is only Navbar/navigation related  */}
  <Navbar></Navbar>
    <Main typeContainer="sub">
      {/* make search stock always available fixed at top */}
      <SearchStock></SearchStock>
      <GraphPanel>Stock Graph</GraphPanel>
      <GraphPanel>Crypto Graph</GraphPanel>
    </Main>
  </Main>
)

export default App