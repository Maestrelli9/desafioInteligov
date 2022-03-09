import React, { useRef, useMemo, useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { Heading, Stack, Box, Button } from '@chakra-ui/react';
import RTable from './RTable';


const App = () => {
  const buttonRef = useRef(null);
  const [columnData, setColumnData] = useState([]);
  const [rowData, setRowData] = useState([]);
  const columns  = useMemo(() => columnData, [columnData]);
  const data = useMemo(() =>  rowData, [rowData]);

  const handleOnFileLoad = (data) => {
    console.log(data);

    const columns = data[0].data.map((col, index) =>{
      return {
        Header: col,
        accessor:col.split(" ").join("_").toLowerCase(),
      };
    });
    const rows = data.slice(1).map((row) =>{
      return row.data.reduce((acc,curr,index)=>{
        acc[columns[index].accessor] = curr;
        return acc;
      },{});
    });

    setRowData(rows);
    setColumnData(columns);
  };
  const onErrorHandler = (err, file, inputElem, reason) => {
    console.log(err);
  };
  const handleFileRemove = (data) => {
    console.log(data);
  };
  const handleOpenCSVReader = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e)
    }
  };
  const handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e)
    }

  }
  return (
    <>
    <Heading color="purple" textAlign="center">
      drop your files here
    </Heading>
    <CSVReader
    ref={buttonRef}
    onFileLoad={handleOnFileLoad}
    onError={onErrorHandler}
    onClick
    onRemoveFile={handleFileRemove}
    >
      {({ file }) =>(
    <Stack margin="10">
      <Box>
        {" "}
      <Button onClick={handleOpenCSVReader}>CSV Upload</Button>
      </Box>
      {File && (
      <>
        <Box width="20%" border="2px solid #ccc">
          {file && file.name}
        </Box>
        <Box>
          <Button
          onClick={handleRemoveFile}
          size="small"
          variant="ghost"
          >
            Remove
          </Button>
        </Box>
      </>
      )}
    </Stack>
      )}
    </CSVReader>
     <RTable  columns={columns} data={data} />
    </>
  );
}
export default App;