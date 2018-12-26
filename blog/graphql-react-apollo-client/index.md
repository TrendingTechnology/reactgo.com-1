---
title: Getting started with GraphQL, React and apollo client
date: "2018-12-26"
tags: ['react','graphql']
image: "apollo-client-react-tutorial.png"
---

In this tutorial, we will learn about how to fetch and update the data from the GraphQL API in react apps by using the Apollo client.

We are using the  GitHub GraphQL API for learning purposes.


>Note : if you stuck anywhere in this tutorial, then please refer to the  final code repository  on [GitHub](https://github.com/saigowthamr/react-apollo)

## Setup the react app

Let's set up the react app by using the `create-react-app`.


```bash
npx create-react-app react-apollo
```

The above command will download the required files in the "react-apollo" folder to
start the react app.

change your working directory to "react-apollo".

```bash
cd react-apollo
npm start
```
`npm start` command is used to start the local development server.


Now we need to install the Apollo client packages.

### Installing apollo client packages

```js
npm install apollo-boost react-apollo graphql
```

This above command will download the three packages which are apollo-boost,react-apollo and graphql.


### Connecting with GitHub graphql API

Open your GitHub account and navigate to settings then click on developer settings and generate personal access token by selecting the fields.


![github personal access token](./github-personal-access-token.png)

>Note: copy the personal access token and save it in your pc because the token is only visible once.


Now open your `index.js` file in your react app and add the below code with your personal access token.

```js

import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer your-personal-access-token`
            },
        });
    }
});

render(<App />, document.getElementById('root'));
```

Here we import an ApolloClient constructor from the apollo-boost package and instantiate the client.

__uri__: The graphql endpoint we are using to fetch the data.

__request__: For every request, we are sending the authorization header to verify the present user.


let's test our code by running a query.

> In GrapQL, Query means to get the data from the API and Mutation means to update or delete or add data.


```js:title=index.js
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient,{gql} from "apollo-boost";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer your-personal-access-token`
            },
        });
    }
});

client.query({
    query: gql`
  query GetnameandEmail {
     viewer{
       email
       name
    }
  }
`
}).then(res => console.log(res))

render(<App />, document.getElementById('root'));
```

Open your console and you will see an object with your name and email id.

![apollo client query](./apollo-client-query.png)


First, we imported the `gql` tag from the apollo-client package then we invoked the `client.query` method by passing our query and logged the response in the console.


### Connect the Client to React

Instead of the logging the data in the console we are connecting the client to the React.

We need to wrap our `<App/>` component with the `ApolloProvider` component provided by the apollo-boost package its is similar to the react-context provider which allows accessing the client anywhere from our app.


```js:title=index.js
import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    request: operation => {
        operation.setContext({
            headers: {
                authorization: `Bearer your-personal-access-token`
            },
        });
    }
});

render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, document.getElementById('root'));

```


### Fetching the data from the Components

React apollo provides us a `Query`  component which is used to fetch the data straight from the components.

The `Query` component takes the `query` as a prop inside the `Query` component we need to define a function with a parameter so that we can access the result of this query from this parameter which is passed by the Query component.


A parameter is an object which contains three properties loading, error, data.

**loading:**  it is true if the request is still in process.

**error:** it contains error related data in case if the request is failed.

**data:** The result of the query is available in this property.

Open your **app.js** file and add the following data.

```js:title=app.js
import React, { Component } from 'react';
import './App.css';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';

const query = gql` {
    viewer {
     name
     email
   }
}`

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={query}>
          {(result) => {
            if (result.loading) return <p>loading...</p>
            if (result.error) return <p>{result.error.message}</p>;
            return (
              <div>
                <h1>Name: {result.data.viewer.name}</h1>
                <p>Email: {result.data.viewer.email}</p>
              </div>
            )

          }}
        </Query>
      </div>
    );
  }
}

export default App;

```

Now we can see the `Name` and `email`  is rendered on the screen.


![react apollo query output](./react-apollo-query-output.png)


### Apollo client devtools

Let's install Apollo client dev tools from the [chrome web store](https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm).

Once you successfully installed we can access the GraphiQL playground from the dev
tools tab. By using GraphiQL playground we can send queries and mutations to the server.

Now open your chrome dev tools and click on apollo tab you will see a GraphiQL playground.

![apollo client devtools](./apollo-client-devtools.png)

The left side data on the image is the query and right side data is the result.

### Passing arguments to the Queries

We can also filter the queries by passing the arguments.

create a new file called `my-repostiories.js` in your `src` folder and add the following code.

```js:title=my-repostiories.js
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';

const reposQuery = gql` {
   viewer {
    repositories(first: 10) {
      edges {
        node {
          name
        }
      }
    }
  }
}`

class Myrepositories extends Component {

    render() {
        return (
            <Query query={reposQuery}>
                {({ data, loading, error }) => {
                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>;
                    return (
                        <ul>
                            <h2>First 10 repositories</h2>
                            {data.viewer.repositories.
                             edges.map(({ node }) =>
                             <li key={node.name}>{node.name}</li>)}
                        </ul>
                    )
                }}
            </Query>
        );
    }
}

export default Myrepositories;
```

In the above code, we first created a `reposQuery` by passing an argument `first:10` so that we can only get first 10 repositories.

![react apollo query arguments](./react-apollo-query-arguments.png)



### Passing arguments using Query variables

So far we are passing the static values to the arguments let's replace the static values with the dynamic values by using query variables.

```js
const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          name
        }
      }
    }
  }
}`
```

The query variable names are always preceding by a `$` character.

The static value is replaced by a $first variable name so that we can pass the value to query dynamically by using a $first variable.




```js:title=my-repostiories.js
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';

const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          name
        }
      }
    }
  }
}

`
class Myrepositories extends Component {
    render() {
        return (
            <Query query={reposQuery} variables={{ first: 10 }}>
                {({ data, loading, error}) => {
                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>;
                    return (
                        <div>
                            <ul>
                                <h2>First 10 repositories</h2>
                                {data.viewer.repositories.
                                edges.map(({ node }) =>
                                <li key={node.name}>{node.name}</li>)}
                            </ul>
                        </div>
                    )
                }}
            </Query>
        );
    }
}
export default Myrepositories;
```

The Query Component has prop `variables` object containing the variable we want to pass to our GraphQL query.


### Fetch more data

Let's add a `Load more` button inside our `Myrepositories` component which helps us to fetch the more
repositories from the GitHub.

We are using the `fecthMore` function provided by the `Query` Component to load the more data.

```js
 <Query query={reposQuery} variables={{ first: 10 }}>
         {({ data, loading, error, fetchMore }) => {

                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>;

                    let current = data.
                        viewer.repositories
                        .edges.length;

                    return (
                        <div>
                          <ul>
                            <h2>First {current}repositories</h2>
                                {data.viewer.repositories
                                .edges.map(({ node }) =>
                            <li key={node.name}>{node.name}</li>)}
                         </ul>

                    <button onClick={() => {
                          fetchMore({
                             variables: { first: current + 10 },
                             updateQuery: (prev, { fetchMoreResult })
                              => {
                                   if (!fetchMoreResult) {
                                     return prev
                                  }
                                  return Object.
                                    assign(prev,fetchMoreResult);
                                }
                            })
                        }}
                            >Load more</button>
                        </div>
                 )
         }}
 </Query>

```
The `fetchMore` function takes the object with two properties variables and updateQuery.

__variables__: The variables we need to pass to the GraphQL query.

__updateQuery__: The updateQuery function is used to merge the data with the new data and re-render the component with the updated data.


Let's refactor the above code by creating a `handleMore` method.


```js:title=my-repositories.js
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost';

const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          name
        }
      }
    }
  }
}
`

class Myrepositories extends Component {

    handleMore = (data, fetchMore,current) => {
        fetchMore({
            variables: { first: current + 10 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev
                }
                return Object.
                    assign(prev, fetchMoreResult);
            }
        })
    }

    render() {
        return (
            <Query query={reposQuery} variables={{ first: 10 }}>
                {({ data, loading, error, fetchMore }) => {

                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>;

                    let current = data.
                        viewer.repositories.
                        edges.length;

                    return (
                        <div>
                            <ul>
                                <h2>First {current} repositories</h2>
                                {data.viewer.repositories.
                                    edges.map(({ node }) =>
                                        <li key={node.name}>
                                            {node.name}</li>)}
                            </ul>

                            <button onClick={() =>
                                this.handleMore(data, fetchMore,current)}
                            >Load more</button>
                        </div>
                    )
                }}
            </Query>
        );
    }

}

export default Myrepositories;
```

It's time to test does our `Load more` button.

![fetchmore data using react apollo client](./fetchmore-react-apollo-client.gif)



### Code refactoring

If you look into `Myrepositories` component it's already getting big so that first we are removing all queries from the React components and place in the separate file called `queries.js`.


```js:title=queries.js
import { gql } from 'apollo-boost'

const reposQuery = gql`

query Myrepositories($first:Int!){
     viewer {
    repositories(first: $first) {
      edges {
        node {
          id
          name
          stargazers{
          totalCount
         }
          viewerHasStarred
        }
      }
    }
  }
}
`
const userQuery = gql` {
    viewer {
     name
     email
   }
}`

export { reposQuery, userQuery }
```

Now we can import the required queries from this `queries.js` file.


Let's create a new file called `display-repos.js` and add the below code.


```js:title=display-repos.js
import React from 'react';

function Displayrepos(props) {

    const { current, data, refetch } = props

    return (
        <div>
            <h2>First {current} repositories</h2>
            {data.viewer.repositories
                .edges.map(({ node }) =>
                    <ul className="list" key={node.id}>
                        <li>{node.name}</li>
                        <li>stars {node.stargazers.totalCount}</li>
                    </ul>
                )}
            <button onClick={props.handleMore}
            >Load more</button>
        </div>
    )
}

export default Displayrepos;
```

Update the  `Myrepositories` component by adding a `Displayrepos` child component.


```js:title=my-repositories.js
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import Displayrepos from './display-repos'
import { reposQuery } from './queries'


class Myrepositories extends Component {

    handleMore = (data, fetchMore, current) => {
        fetchMore({
            variables: { first: current + 10 },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev
                }
                return Object
                    .assign(prev, fetchMoreResult);
            }
        })
    }

    render() {
        return (
            <Query query={reposQuery} variables={{ first: 10 }}>
                {({ data, loading, error, fetchMore, refetch }) => {

                    if (loading) return <p>loading...</p>
                    if (error) return <p>{error.message}</p>;

                    let current = data
                        .viewer.repositories
                        .edges.length;

                    return <Displayrepos current={current}
                        refetch={refetch}
                        data={data}
                        handleMore={() =>
                       this.handleMore(data,
                        fetchMore, current)}
                    />
                }}
            </Query>
        );
    }

}

export default Myrepositories;

```


### Mutations

To modify the data in graphql we need to send mutations instead of queries because queries are used to get the data from the backend.

Mutations purpose is to add or remove or update the data that’s currently stored in the backend.

Mutations start with a keyword `mutation`.

Example for the adding a star to your GitHub repository.

```js
mutation AddStar($repoid:ID!){
   addStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}
```

once the mutation is completed it returns the data back from the backend.

the output from the backend

```js
{
  "data": {
    "addStar": {
      "starrable": {
        "stargazers": {
          "totalCount": 1
        },
        "viewerHasStarred": true
      }
    }
  }
}
```

Let's create a new called `addstar.js` file.

Now we are implementing the `Addstar` component which helps us to add the star to your repositories.

React apollo package is also Provides the `Mutation` component which is used to send the mutations to the graphql api.

In the Mutation component, we need to pass the function as children it's also using render props pattern
same as the Queries component.

The first parameter of the function is the mutate function and a second parameter is an object containing the data from the backend.

```js:title=addstar.js
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';


const addStarquery = gql`
mutation AddStar($repoid:ID!){
   addStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}`


class AddStar extends Component {


  render() {
    return (

      <Mutation mutation={addStarquery} >

        {(addStar, { data, loading, error }) => {

          return (
            <div>
              <button onClick={() => {
                addStar({ variables: { repoid: this.props.id } })
                  .then(res => {
                    this.props.refetch()
                  })

              }}
              > Addstar</button>

              {loading && <p>loading...</p>}
              {error && <p>{error.message}</p>}
            </div>
          )

        }}

      </Mutation>
    )
  }

}

export default AddStar;
```

The Mutation component takes the mutations as a `mutation` prop once the `addStar` mutation is finished we are chained it with `then` method and invoking the `refetch` method so that we can see the updated data in the UI.

Let's create a new component called RemoveStar which is used to remove the star.

```js:title=removestar.js
import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost';


const removeStarquery = gql`
mutation RemoveStar($repoid:ID!){
   removeStar(input:{starrableId:$repoid}){
    starrable{
      stargazers{
        totalCount
      }
      viewerHasStarred
    }
  }
}`


class RemoveStar extends Component {

    render() {
        return (

            <Mutation mutation={removeStarquery} >
                {(removeStar, { data, loading, error }) => {
                    return (
                        <div>
                            <button onClick={() => {
                                removeStar({
                                    variables:
                                { repoid: this.props.id }
                                }).then(res => {
                                    this.props.refetch();
                                })
                            }}
                            > remove star</button>
                            {loading && <p>processing...</p>}
                            {error && <p>{error.message}</p>}

                        </div>
                    )

                }}

            </Mutation>
        )
    }

}

export default RemoveStar;
```

In the `RemoveStar` component we are invoking the  `removeStar` mutation by passing
the variables repository `id`.

Update the `display-repos.js` file with the below code.

```js:title=display-repos.js
import React from 'react';
import AddStar from './addstar'
import RemoveStar from './removestar'

function Displayrepos(props) {

    const { current, data, refetch } = props

    return (
        <div>
            <h2>First {current} repositories</h2>
            {data.viewer.repositories
                .edges.map(({ node }) =>
                    <ul className="list" key={node.id}>
                        <li>{node.name}

                        {node.viewerHasStarred ?
                          <RemoveStar id={node.id} refetch={refetch} /> :
                          <AddStar id={node.id} refetch={refetch} />
                        }

                        </li>
                        <li>stars {node.stargazers.totalCount}</li>
                    </ul>
                )}
             <button onClick={props.handleMore}
            >Load more</button>
        </div>
    )
}


export default Displayrepos;
```

In the above code first, we imported the `AddStar` and `RemoveStar` components then we added to our
component to render conditionally it means if you already added a star to your repository, we only render the `RemoveStar` component otherwise we render the `AddStar` component.

Let's test it now.

![ react apollo mutations tutorial](./mutation-react-apollo-tutorial.gif)


### Search bar

The Final app contains a search bar to search the public GitHub repositories.


![React-apollo graphql github-search implementation](./github-search-react-apollo.gif)


[Code repository](https://github.com/saigowthamr/react-apollo)