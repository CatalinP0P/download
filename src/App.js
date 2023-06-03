import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [download, setDownload] = useState();

  const handleInputChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0].name);
    setDownload(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleInputChange}></input>
      <a href={download} > Download: {file?.name}</a>
    </div>
  );
}

export default App;
