const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvheader = [
    {id: 'name', title: 'Name'},
    {id: 'mbid', title: 'mbid'},
    {id: 'url', title: 'url'},
    {id: 'image_small', title: 'image_small'},
    {id: 'image_medium', title: 'image_medium'},
    {id: 'image_large', title: 'image_large'},
    {id: 'image_extralarge', title: 'image_extralarge'},
    {id: 'image_mega', title: 'image_mega'},
  ]

// > File id is a way to identify the different csv user-supplied files by including the searchterm used 
// > to generate that output file in the end of the filename.
exports.writeData = (data,file_id)=>{
const csvWriter = createCsvWriter({
  path: __basedir + `/outputs/user-supplied-${file_id}.csv`,
  header: csvheader
});
csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
}
