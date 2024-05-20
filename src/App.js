/* eslint-disable */

import React, { useState, useEffect } from 'react';
import './App.css';
import * as Components from './components';

function fetchData() {

  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [error, setError] = usestate(null);

  useEffect(() => {
    // API 엔드포인트와 API키
    const endpoint = 'https://www.bizinfo.go.kr/uss/rss/bizinfoApi.do';
    const apiKey = 'OUR_KEY';

    // 요청을 보낼 파라미터 설정
    const params = {
      id: "bizinfoApi",
      serviceKey: apiKey,
      // 추가적인 파라미터는 기업마당 링크 참조
      // https://www.bizinfo.go.kr/web/lay1/program/S1T175C174/apiDetail.do?id=bizinfoApi
    };

    // API 호출
    axios.get(endpoint, { params })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
}

function App() {

  // API 호출이 완료 되었을 시 밑의 주석을 풀어주시기 바랍니다.
  // const { data, loading, error } = fetchData();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>
  // }

  return (
    <div className="App">
      <div className='nav-area'>
        <div><h1>프로젝트 로고</h1></div>
        <span>사업공고</span>
        <span>커뮤니티</span>
        <span>정책제도</span>
        <span>지원바람</span>
      </div>
      <hr/>
      
      <div className='search-area'>
        <div>
          <input
            type="text"
            placeholder='검색어를 입력하세요.'
            className="search-input"
            />
          <button>검색</button>
        </div>
        <div className='filter-search'>
          <span>지역별</span>
          <span>분야별</span>
          <span>모집기간별</span>
        </div>
      </div>
      <hr/>

      <div className='log-in-area'>
        <form>
          <input
            type='text'
            placeholder='ID'
            className='ID'
            />
          <input
            type='password'
            placeholder='Password'
            className='pwd'
            />
          <button>log in</button>
        </form>
      </div>
      <hr/>

    </div>
  );
}

export default App;
