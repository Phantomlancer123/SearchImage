import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
const DetailPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoadig] = useState(false);
  const params = useParams();
  let { searchWord, currentPage, index } = params;
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=2Djqd7S2m47zNdHEvgReBRCqtNDrx8QBKr1n_PlezWo&query=${searchWord}&page=${currentPage}`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        if (data.total !== 0) {
          setData(data);
          setLoadig(true);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [searchWord, currentPage]);
  return (
    <div>
      {loading && (
        <img id="image" src={data.results[index].urls.regular} alt="i" />
      )}
    </div>
  );
};

export default DetailPage;
