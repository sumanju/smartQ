import React from 'react'
import './landing.css';

class Landing extends React.Component {

  listOfShops = []
  selectedNav

  constructor(props) {
    super(props)

    this.state  = {
      shopItemArr : []
    }
    
    for(let pr in this.props.data.menuDetails)  {
      this.listOfShops.push(pr)
    }
  }

  componentDidMount() {
    if (this.listOfShops.length)  {
      this.selectShop(this.listOfShops[0])
    }
    this.selectedNav  = 0
  }

  selectShop(data, index)  {
    this.selectedNav  = index
    this.setState({
      shopItemArr  :  this.props.data.menuDetails[data]
    })
  }



  isRange(startTime, endTime, currTime)  {

    const [hrsStart , minStart] = startTime.split(':'),
          [hrsEnd   , minEnd]   = endTime.split(':')


    let start = new Date(),
        end = new Date()

    start.setHours(+hrsStart)
    start.setMinutes(+minStart)
    start.setSeconds(0)

    end.setHours(+hrsEnd)
    end.setMinutes(+minEnd)
    end.setSeconds(0)

    if (currTime.getTime() >= start.getTime() && currTime.getTime() <=end.getTime())  {
      return true
    }

    return false
  }

  IsItemAvailable(dateStamp) {
    const currTime  = new Date(),
          setOfTimeSpan = dateStamp.split(',')

    for (let i = 0; i < setOfTimeSpan.length; i++)  {
      const [startTime, endTime]  = setOfTimeSpan[i].split('-')

      if (this.isRange(startTime, endTime, currTime))  {
        return true
      }
    }
    return false
  }



  render()  {

    return (
      <div className="App">
        {/* header */}
        <div  className="header">

        </div>

        {/* body */}
        <div  className="body">

        {/* side navbar */}
          <div className="nav-bar">
            {
              this.listOfShops.map((data, index) => 
                <div onClick={() => this.selectShop(data, index)} key={data} 
                                                                  className={this.selectedNav === index ? "nav-bar-menu button" 
                                                                                                         : "nav-bar-menu"}> {data} </div> 
                )
            }
          </div>
          
          <div className="menu-list">
            {
              this.state.shopItemArr.map(data => data.ofs || !this.IsItemAvailable(data.servingtime) 
                                                            ? <div className="menu-item-box not-available"> {data.foodname} </div>             
                                                            : <div className="menu-item-box available"> {data.foodname} </div>  
              )
            }
          </div>
  
        </div>

        <footer className="footer">
          <button className="button"> ALL UNAVAILABLE </button>
          <button className="button"> ALL AVAILABLE   </button>
        </footer>
       
      </div>
    )

  }
 
}

export default Landing;

