const insertRow = "INSERT INTO process_info (pid, name, cpu_usage, mem_usage) VALUES ($1, $2, $3, $4)"
const getProcessInfo = "SELECT * FROM process_info";
const deleteEntries = "DELETE FROM process_info";
const countRows = "SELECT COUNT(*) FROM process_info"



module.exports = {
    insertRow,
    getProcessInfo,
    deleteEntries,
    countRows
}
