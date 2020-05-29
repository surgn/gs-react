// Booklist.jsx
import React, { useState, useEffect } from 'react';

const Booklist = props => {
  // const result = props.getData?.(props.language);
  // return (
  //   <div>
  //     <p>this is {result} list component</p>
  //   </div>
  // );
  const [bookData, setBookData] = useState(null);   // ここから追加
  useEffect(() => {
    const result = props.getData?.(props.language).then(response => setBookData(response));
  }, [props])                                       // ここまで追加
  return (
    <div>
      {/* <p>this is {JSON.stringify(bookData)} list component</p> */}
      <ul>
        {/* {bookData.data.items.map(x => <li>{x.volumeInfo.title}</li>)} */}
        {     // このあたり編集
          bookData === null
            ? <p>now loading...</p>
            : bookData.data.items.map((x, index) => 
              <li key={index}>
                <p>{x.volumeInfo.title}</p>
                <p>{x.volumeInfo.authors}</p>
              </li>)
            
        }
      </ul>
    </div>
  );
}
export default Booklist;