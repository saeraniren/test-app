/* eslint-disable */

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="nav">
        <div className="logo">
          프로젝트 로고
        </div>
      </div>
    </div>
  );
}

export default App;
