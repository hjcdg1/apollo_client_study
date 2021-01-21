import React, { useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import Roles from './components/roles';
import Teams from './components/teams';
import People from './components/people';
import './App.css';

/* 
 * (1) useQuery() API
 *
 * const {
 *   loading,
 *   error,
 *   data,
 *   refetch,
 *   networkStatus
 * } = useQuery(QUERY, {
 *   variables: { },
 *   onCompleted: () => { },
 *   notifyOnNetworkStatusChange: true
 * });
 *
 * 이 Hook은 기본적으로 응답이 도착했을 때 컴포넌트의 리렌더링을 유발한다.
 * 그때 loading의 값은 true로 변경되어 있을 것이고, 결과에 따라 성공이면
 * data가, 실패이면 error가 셋팅이 될 것이다.
 * 
 * refetch는 해당 쿼리를 다른 변수로 다시 요청하기 위한 함수이다.
 * 그런데 기본적으로 컴포넌트의 리렌더링은 응답이 도착했을 때만 이뤄지므로,
 * refetch 함수를 호출해도 응답이 도착할 때까진 컴포넌트가 리렌더링 되지 않는다.
 * 
 * 이때 notifyOnNetworkStatusChange 옵션을 true로 설정해주게 되면,
 * 네트워크 상태의 변화에 따라 컴포넌트의 리렌더링을 유발할 수 있다.
 * 네트워크 상태는 1부터 8까지의 값을 가지며 응답의 networkStatus
 * 프로퍼티에 담기게 된다. 그리고 여기에는 refetch 함수를 호출했을
 * 때 설정 되는 상태 값도 존재한다. 따라서 이 옵션을 true로 설정하면
 * refetch 함수를 호출한 직후에 컴포넌트의 리렌더링이 유발될 것이다.
 * 또한 이 옵션을 true로 설정하는 것읃 networkStatus 값을 직접적으로
 * 사용하지 않더라도 loading 값이 적절히 업데이트 되는 효과를 가져온다.
 */

/*
 * (2) useMutation() API
 *
 * const [mutateFunction, status] = useMutation(MUTATION, {
 *   onCompleted: (data) => { }
 * });
 * 
 * 이 Hook은 useQuery()와 달리 즉시 요청을 전송하지 않는다.
 * 대신 요청 전송을 위한 콜백 함수를 배열의 첫 번째 요소로 반환한다.
 * 따라서 해당 요청 전송이 필요한 때에 그 콜백 함수를 호출하면 된다.
 * 그리고 반환되는 배열의 두 번째 요소는 해당 요청 전송의 현재 상태
 * 를 나타내는 필드들을 가지는 하나의 객체이다.
 */

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

function App() {
  const [menu, setMenu] = useState('Teams');

  let mainComp = {
    Roles: <Roles />,
    Teams: <Teams />,
    People: <People />,
  };

  function NavMenus() {
    return [
      'Roles', 'Teams', 'People'
    ].map((_menu, key) =>
      <li key={key} className={menu === _menu ? 'on' : ''} onClick={() => setMenu(_menu)}>
        {_menu}
      </li>
    );
  }

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <header className="App-header">
          <h1>Company Management</h1>
          <nav>
            <ul>
              {NavMenus()}
            </ul>
          </nav>
        </header>
        <main>
          {mainComp[menu]}
        </main>
      </ApolloProvider>
    </div>
  );
}

export default App;
