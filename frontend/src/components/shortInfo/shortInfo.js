import React from "react";

const ShortInfo = ({ shortUrl }) => (
    shortUrl !== "" ?
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "20px auto" }}>
            <h3>Your link now looks like this:</h3>
            <a href={`http://localhost:8000/${shortUrl}`}>{`http://localhost:8000/${shortUrl}`}</a>
        </div> : null
)

export default ShortInfo;