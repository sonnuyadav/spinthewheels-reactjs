import React from 'react';
import './index.css';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    
  
    this.state = {
      selectedItem: null,
      name:""
    };
    this.selectItem = this.selectItem.bind(this);
  }

  async selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * this.props.items.length);
      console.log('name========',this.state.name);
      console.log('wheel',this.props);

      let itemArr = this.props.items;
      let foodItem = '';
      itemArr.forEach(function(value, key) {
         if(key === selectedItem){
          foodItem =value;
        }
       });
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
      const res = await fetch('https://formula.itnfd.com/api/postscore', {
        body: JSON.stringify({
          name: this.state.name,
          selectedItem: selectedItem,
          foodItem:foodItem
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
   const result = await res.json();
 console.log("DATA==========",result);
    
    
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }




  render() {
    console.log("=this.state=",this.state);
    const { selectedItem } = this.state;
    const { items } = this.props;
    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';
     console.log("===selectedItem==",selectedItem);
     console.log("==",wheelVars);
    return (
      <div><span><strong>Enter Player Name: </strong></span>
       <input type="text" id="input" value={this.state.name} onChange={ e => this.setState({name: e.target.value})}/>
       <br/>
       <br/>
      <div className="wheel-container">
        <div className={`wheel ${spinning}`} style={wheelVars} onClick={this.selectItem}>
          {items.map((item, index) => (
            <div className="wheel-item" key={index} style={{ '--item-nb': index }}>
              {item}
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
}
