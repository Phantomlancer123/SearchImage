import { ImageList, ImageListItem } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const TablePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoadig] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [searchWord, setSearchWord] = useState("lexus");
  const history = useHistory();
  //   let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);
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
          setTotalPages(data.total_pages);
          console.log(data);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [searchWord, currentPage]);

  return (
    <div className="App">
      <header className="App-header">
        <div id="action">
          <input
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                setSearchWord(ev.target.value);
                // console.log("Press Enter", ev.target.value);
              }
            }}
          />
          <button
            onClick={() => {
              setCurrentPage(Math.floor(Math.random() * totalPages));
            }}
          >
            Generate
          </button>
        </div>
        {/* <div>
          {loading && (
            <img id="image" src={data.results[nowUrl].urls.regular} alt="i" />
          )}
        </div> */}
        {loading && (
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {data.results.map((item, index) => (
              <ImageListItem key={item.urls.regular}>
                <img
                  src={`${item.urls.regular}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.urls.regular}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"stress"}
                  loading="lazy"
                  onClick={() =>
                    history.push(`detail/${searchWord}/${currentPage}/${index}`)
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </header>
    </div>
  );
};

export default TablePage;
