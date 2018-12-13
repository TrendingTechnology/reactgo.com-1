---
title: GraphQL intro for the beginners
date: '2018-12-04'
tags: ['graphql','javascript']
image: "graphql-intro-beginners.png"
---

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.we can use graphql with any programming language even with vanilla JavaScript.

Graphql is an alternative to the REST APIS.



### GraphQL vs Rest


- In graphql, we only need single endpoint for the `GET`,`POST`,`PUT` etc requests.

- In Rest API we need separate endpoints for everything.

- In graphql, you can ask what data you need.

- In Rest APIs the data sometimes over-fetched or under -fetched.

- Apps using GraphQL can be quick even on slow mobile network connections.

- GraphQL APIs get all the data your app needs in a single request



**GraphQL is a Type Specific Language where we can easily create GraphQL types by using the Schema Definition Language(SDL).**


for example, consider we have a Person with name and age

### Object types and fields

```gql

type Person{
    name: String,
    age: String
}

```

`Person` is a Graphql object type where the `name and age` are the fields present in the Object type


We can also create the group of persons must look like Person type.


```gql

type Person{
    name: String
    age: String
}


type PersonGroup{
    persons:[Person]

}

```

### Scalar types

- `String` : A UTF‐8 character sequence.
- `Int`: A signed 32‐bit integer.
- `Float`: A signed double-precision floating-point value.
- `Boolean`: true or false
- `ID`: The ID scalar type represents a unique identifier, often used to refetch an object or as the key for a cache. The ID type is serialized in the same way as a String; however, defining it as an ID signifies that it is not intended to be human‐readable.


### Query types

Query types are used to fetch the data  Like how we used the `get` method in `REST API` world.


```
type Query{
 getPerson: Person

}

```


In query type, we defined one Query which is `getPerson` query.

`getPerson` query must return the data which look like `Person` type.


In rest API world we use `api\getperson\` endpoint is used to get the person object.


```gql

query {

 getPerson{
     name
 }

}
```

the output from the graphql endpoint.


```gql

data:{
    getPerson:{
        name: "sim"
    }
}

```

GraphQL doesn't over fetch or under fetch your data it only fetches what we ask Like in the above query we only ask for a name so that it returns only  `name`.

In this below example we ask for both the name and age.

```gql

query {

 getPerson{
     name
     age
 }

}
```

the output from the graphql endpoint.


```gql

data:{
    getPerson:{
        name: "sim",
        age:11
    }
}

```

### Mutation types

Mutation types are used to create or update or delete the data similar to  `POST`,`PUT`,`DELETE` in REST endpoints.

```gql
type Mutation {

  addNewPerson(name:String,age:Number) : Person

}
```


`addNewPerson` mutation which accepts two arguments  `name` and `age` which helps us to add a `new person` to the database and also it returns back the newly created `Person` object.