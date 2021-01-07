import React from 'react'
import './landing.css';

class Landing extends React.Component {

  constructor(props) {
    super(props)

    this.state  = {
      allShopDtl    : this.props.data.allShopInfo.menuDetails,
      shopList      : this.props.data.shopsList,
      selectedShop  : 0, 
      selShopList   : [],
      searchFac     : ''
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      selShopList   : this.state.allShopDtl[this.state.shopList[0]]
    },()  =>  {
      console.log(this.state)
    })
  }

  onSelectShop(index)  {
    this.setState({
      ...this.state,
      selectedShop  : index,
      selShopList   : this.state.allShopDtl[this.state.shopList[index]]
    },()  =>  {
      console.log(this.state)
    })
  }

  onSelectItem(index)  {
    let tmp = this.state.allShopDtl
    tmp[this.state.shopList[this.state.selectedShop]][index].ofs = !tmp[this.state.shopList[this.state.selectedShop]][index].ofs
    this.setState({
      ...this.state,
      allShopDtl  : tmp
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

  unAvail() {
    let tmp = this.state.allShopDtl
    tmp[this.state.shopList[this.state.selectedShop]].forEach((val, index) => {
      tmp[this.state.shopList[this.state.selectedShop]][index].ofs = true
    })
    this.setState({
      ...this.state,
      allShopDtl  : tmp
    })
  }

  avail() {
    let tmp = this.state.allShopDtl
    tmp[this.state.shopList[this.state.selectedShop]].forEach((val, index) => {
      tmp[this.state.shopList[this.state.selectedShop]][index].ofs = false
    })
    this.setState({
      ...this.state,
      allShopDtl  : tmp
    })
  }

  search(event) {
    this.setState({
      ...this.state,
      searchFac : event.target.value
    })
  }

  render()  {

    return (
      <div className="App">
        {/* header */}
        <div  className="header">
          <input type="text" className="search" placeholder="search"  onKeyUp={(event) => this.search(event)}/>
        </div>

        {/* body */}
        <div  className="body">

        {/* side navbar */}
          <div className="nav-bar">
            {
              this.state.shopList.map((data, index) => 
                <div onClick={() => this.onSelectShop(index)} 
                     key={data} 
                     className={this.state.selectedShop === index ? "nav-bar-menu selected-nav" 
                                                                  : "nav-bar-menu"}> {data} </div> 
                )
            }
          </div>
          
          <div className="menu-list">
            {
              this.state.selShopList.map((data, index) => data.ofs || !this.IsItemAvailable(data.servingtime) 
                                    ? data.foodname.toLowerCase().search(this.state.searchFac.toLowerCase()) > -1 ? <div key={data.foodid} onClick={() => this.onSelectItem(index)} className="menu-item-box not-available"> {data.foodname} </div>  : ''            
                                    : data.foodname.toLowerCase().search(this.state.searchFac.toLowerCase()) > -1 ? <div key={data.foodid} onClick={() => this.onSelectItem(index)} className="menu-item-box available"> {data.foodname} </div>  : ''
              )
            }
          </div>
  
        </div>

        <footer className="footer">
          <div onClick={() => this.unAvail()} className="button"> ALL UNAVAILABLE </div>
          <div onClick={() => this.avail()} className="button"> ALL AVAILABLE   </div>
        </footer>
       
      </div>
    )
  }
}

export default Landing;

