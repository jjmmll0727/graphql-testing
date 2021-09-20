# graphql-testing
graphql testing

rest api 와 다른 graphql 을 공부해보기 위함.

##### schema
사용할 데이터와 함수를 정의한다.

##### resolver
사용할 데이터와 함수를 구현한다. 

-> 결국 크게 Query와 Mutation으로 나뉘는데, 
Query는 데이터베이스에서 데이터를 읽는 요청을 하고,
Mutation은 데이터베이스에서 데이터를 수정하는 요청을 한다. 

더 자세한 정리 <https://velog.io/@jaymee/graphql>

### test

`npm start`

```js
import { ApolloServer } from 'apollo-server';
import resolvers from './graphsql-src/resolvers.js'
import typeDefs from './graphsql-src/typeDefs.js';

// ApolloServer는 스키마와 리졸버가 반드시 필요함
const server = new ApolloServer({
  typeDefs,
  resolvers
});c

// listen 함수로 웹 서버 실행
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
```
위 코드를 실행하게 되는데, apollo server 를 실행하면 자동적으로 port 4000 번으로 서버가 열린다. 


