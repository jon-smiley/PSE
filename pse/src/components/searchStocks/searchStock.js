import React, { Component } from 'react'
import { Panel, Layout } from 'smiley-design'
import styling from '../searchStocks/searchStyling.css'

class searchStock extends Component {
    render(){
      return(
        <Layout>
          <Panel>
            <div className="search-stock-position">
              <h4>Search Stock</h4>
              <span>
                <input></input>
              </span>
            </div>
          </Panel>
        </Layout>
      )
    }
  }
  
  searchStock.propTypes = {}
  
  export default searchStock