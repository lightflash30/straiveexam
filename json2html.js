// json2html.js
export default function json2html(data) {
  // Start the table and set the custom attribute
  let table = '<table data-user="julurihariharan30@gmail.com">';

  // Add table headers
  table += '<thead><tr>';
  // Use the keys of the first object to create column headers
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });
  table += '</tr></thead>';

  // Add table body with rows of data
  table += '<tbody>';
  data.forEach(item => {
    table += '<tr>';
    headers.forEach(header => {
      // If the property doesn't exist, leave the cell empty
      table += `<td>${item[header] !== undefined ? item[header] : ''}</td>`;
    });
    table += '</tr>';
  });
  table += '</tbody></table>';

  // Return the generated table as a string
  return table;
}
