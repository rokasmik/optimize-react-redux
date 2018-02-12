# optimize-react-redux
Presentation about optimizing rendering performance with react-redux

# Overview of tools technics used for connection of react & redux
* react-redux API
* react-redux bad practices
* react-redux good practices
* memoization, getters & selectors

# Example of optimization
npm run start -> localhost:9000

The app contains two paths with two differently rendered lists.
To change the list, go to `components/App.js` and

1st list: `import ItemsList from '../containers/items';`

2nd list: `import ItemsList from '../containers/items-list';`


First list: 
* Rendered with one container connected to the store
* Gets items details in props

Second list: 
* Rendered with two containers connected to the store
* First containers connects only a list of items ids
* Second container renders one item, taking it's data by the id from the store

A huge list is connected to be able to see the rendering optimization difference.
# The flow of events after a "love" action:

One container list:
1. Container recalculates mapStateToProps
2. Container rerenders the connected component as the props changes
3. React reconcilation triggers for every component in the list, checking if the components needs to be updated
(in this case, an expensive operation)
4. One of the components is updated

Two containers list:
1. List container recalculates mapStateToProps
2. List does not change as ids did not change. React list component is not rerendered
3. Each item container recalculates mapStateToProps with shallow equal
4. One of the container rerenders because props changes, only one react component rerenders

# Results: 

One container list:

![Screenshot](/screenshots/one-container.png)

Two containers list:

![Screenshot](/screenshots/two-containers.png)
