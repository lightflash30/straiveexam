// json2html.js
export default function json2html(data) {
  // Create a Set of all unique keys (columns) across all objects
  const columns = Array.from(data.reduce((cols, row) => {
    Object.keys(row).forEach(key => cols.add(key));
    return cols;
  }, new Set()));

  // Generate the HTML for the table
  let html = `<table data-user="julurihariharan30@gmail.com">\n`;
  html += `  <thead>\n    <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>\n  </thead>\n`;
  html += `  <tbody>\n`;

  // Generate rows for each object in the data array
  data.forEach(row => {
    html += `    <tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>\n`;
  });

  html += `  </tbody>\n</table>`;
  return html;
}
