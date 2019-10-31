# API-IPA 🍺
- API using Node.js and MongDB
- Information about IPA which is beer 🍺🍻
- Progress @ Oct 27, 2019
  - Selection tool and result
  
  ![](assets/api-ipa-prototype.png)

  - Search beer by beer-name

  ![](assets/api-ipa-search-fn.png)

- Line chart for yearly rating of selected beer
  - Used `d3.js`

  ![](assets/api-ipa-rating-chart.png)

- Things to do next
  - Add more data -- the number of rating so far
  - Add more databases -- brewery and beer-style
  - Axis text -- year, rating
  - ~~Make a new page for API call~~
    - Implement a form and text-GET-call JSON result

- Added routes for API call and rating
  - With `react-router-dom`

  ![](assets/api-ipa-routes.png)