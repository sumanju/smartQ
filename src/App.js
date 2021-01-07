import React from 'react'
import './App.css';
import Landing from './landing/landing';

function App() {
  const shopDetails  =  {
    "menuDetails": {
      "EATORAMA": [
        {
          "foodid": "ABCMAIN:eatorama:0",
          "foodname": "3 Egg Plain Omelette",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:9",
          "foodname": "Bacon and Cheese Croissant",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:8",
          "foodname": "Burrito filled with Scrambled Egg, Kidney Beans, Peppers, Chorizo, Chillies and Tomato",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:4",
          "foodname": "Diced Ham Omelette Filling",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:2",
          "foodname": "Fresh Tomato Omelette Filling",
          "servingtime": "0:0-2:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:12",
          "foodname": "Freshly Made Custard Sauce",
          "servingtime": "18:0-18:15",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:15",
          "foodname": "Green Seasonal Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:10",
          "foodname": "Mushroom and Cheese Croissant",
          "servingtime": "0:0-23:59",
          "ofs": true
        },
        {
          "foodid": "ABCMAIN:eatorama:11",
          "foodname": "Oaty Apple and Blackcurrant Crumbled",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:3",
          "foodname": "Omelette Filling - Peppers",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:16",
          "foodname": "Pasta & Vegetable Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:19",
          "foodname": "Salad  - Potato Salad",
          "servingtime": "0:0-23:59",
          "ofs": true
        },
        {
          "foodid": "ABCMAIN:eatorama:17",
          "foodname": "Salad - Couscous, Lentil And Pesto",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:18",
          "foodname": "Salad - Spicy Noodle Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:14",
          "foodname": "Tiramisu",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:6",
          "foodname": "Topped Bacon, Egg and Tomato Toastie",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:5",
          "foodname": "Topped Sausage, Egg and Tomato Toastie",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:eatorama:7",
          "foodname": "Topped Spinach, Egg and Tomato Toastie",
          "servingtime": "0:0-23:59",
          "ofs": false
        }
      ],
      "STARBUCKS": [
        {
          "foodid": "ABCMAIN:starbucks:13",
          "foodname": "Bean & Egg Salad Bean & Egg Salad Bean & Egg Salad Bean & Egg Salad Bean & Egg Salad Bean & Egg Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:0",
          "foodname": "Black Coffee",
          "servingtime": "0:0-01:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:3",
          "foodname": "Caffe Americano",
          "servingtime": "0:0-19:0",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:6",
          "foodname": "Cappuccino",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:7",
          "foodname": "Chicken Caesar Wrap",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:16",
          "foodname": "Chickpea Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:4",
          "foodname": "Chocolate Mocha",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:15",
          "foodname": "Couscous Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:2",
          "foodname": "Espresso",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:1",
          "foodname": "Filter Coffee",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:9",
          "foodname": "Green Seasonal Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:14",
          "foodname": "Pasta & Cauliflower Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:12",
          "foodname": "Piece of Fruit",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:10",
          "foodname": "Potato Salad",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:11",
          "foodname": "Sweet treat",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:8",
          "foodname": "Tiramisu",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:starbucks:5",
          "foodname": "Triple Mocha Frappuccino",
          "servingtime": "0:0-23:59",
          "ofs": false
        }
      ],
      "SOUP STATION": [
        {
          "foodid": "ABCMAIN:soupstation:1",
          "foodname": "Beef Soup",
          "servingtime": "0:0-03:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:soupstation:0",
          "foodname": "Chicken Soup",
          "servingtime": "0:0-23:59",
          "ofs": false
        },
        {
          "foodid": "ABCMAIN:soupstation:2",
          "foodname": "Veg Soup",
          "servingtime": "0:0-23:59",
          "ofs": false
        }
      ]
    }
  }

  let shopsList = []
  for (let data in shopDetails.menuDetails) {
    shopsList.push(data)
  }

  const shopInfo  = {
    allShopInfo : shopDetails,
    shopsList   : shopsList
  }

  return (
    <Landing data={shopInfo} className="struct" />
  );
}

export default App;

