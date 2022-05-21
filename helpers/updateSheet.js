const SHEET_ID = "1yJV2Qy9442qS2avvR5inK-u59UoU6EcrSVKrAhcU2yI";
const ACCESS_TOKEN =
  "ya29.a0ARrdaM9jGwJlrHP6QZ4onfa4UwHDnTiQMuSRWyvoTMgxU0I5DmVhRDx-oK-tew10cG9U7hWEhKfzaSF6lk4K0r2C23w03eDSmYhuz-xzvNf2QYz6LY46gMs9AOPBIr9sNkJCSCyr25n9W2GMOtxvIaC8P9EZ";

const updateSheetValues = (email) => {
  fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}:batchUpdate`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //update this token with yours.
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        requests: [
          {
            repeatCell: {
              range: {
                startColumnIndex: 0,
                endColumnIndex: 1,
                startRowIndex: 0,
                endRowIndex: 1,
                sheetId: 0,
              },
              cell: {
                userEnteredValue: {
                  numberValue: 3231312,
                },
              },
              fields: "*",
            },
          },
        ],
      }),
    }
  );
};

export default updateSheetValues;
