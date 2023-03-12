import styled from "@emotion/styled";
import PrintOneImgBoxBottom from "./PrintOneImgBoxForOnlyBottom";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { RelatedProductData } from "../../api/RelatedProduct";
import { useState } from "react";

export const CatalogContentDivForViewCollectionRelated = styled.div`
  width: 100%;

  .view-collection-txt-related {
    color: #c4c4c4;

    span {
      margin-right: 10px;
    }
  }

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;

      ::before {
        position: absolute;
        content: "[";
        left: -5px;
      }
      ::after {
        position: absolute;
        content: "]";
      }
    }
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  .top-div {
    margin-top: 120px;
    padding: 20px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 98.5%;
    margin: auto;
  }

  .dynamic-img-title-container {
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-between;

    li {
      margin-top: unset;
      margin-right: 16px;
    }
  }

  .single-img-container {
    margin-bottom: 30px;
  }
`;

const RelatedViewCollection = () => {
  const [relatedData, setRelatedData] = useState(RelatedProductData);

  return (
    <CatalogContentDivForViewCollectionRelated>
      <div className="top-div">
        <Grid
          container
          spacing={1.3}
          style={{
            padding: "0 10px",
          }}
        >
          <Grid item xs={6} sm={3}>
            <div>
              <h4>RELATED ITEMS</h4>
            </div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              <div>
                <h4>24k 2023</h4>
              </div>
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <div></div>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box
              sx={{
                display: {
                  sm: "none",
                  md: "inherit",
                },
              }}
            >
              <div>
                {/* <h4 className="view-collection-txt-related">
                  <span>PREV</span>
                  <span>NEXT</span>
                </h4> */}
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>

      <div className="img-arr-container">
        <Grid container spacing={1.3}>
          {relatedData.map((obj, i) => {
            return (
              <Grid item sm={6} xs={6} md={3} key={i}>
                <Link to={`/product/${obj.customize}`}>
                  <div className="single-img-container">
                    <PrintOneImgBoxBottom obj={obj} />
                  </div>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </CatalogContentDivForViewCollectionRelated>
  );
};

export default RelatedViewCollection;
