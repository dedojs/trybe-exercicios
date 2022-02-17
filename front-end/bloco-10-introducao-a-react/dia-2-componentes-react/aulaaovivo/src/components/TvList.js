import React from "react";
import catalog from "../data";
import TvShow from "./TvShow";

class TvList extends React.Component {
    render() {
        return (
            <section>
            {catalog.map((item) => {
                return (
                  <TvShow key={item.id} tvShow={item} />
                )
              })
            }
            </section>      
        )
    }
}

export default TvList;