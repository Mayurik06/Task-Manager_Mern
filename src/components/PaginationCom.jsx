import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function PaginationCom({totalPage, currentPage, handleChange}) {
  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={totalPage}
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
}

export default PaginationCom;
