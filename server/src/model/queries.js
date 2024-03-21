const insertRow = "INSERT INTO process_info (pid, name, cpu_usage, mem_usage) VALUES ($1, $2, $3, $4)";
const updateRow = "UPDATE process_info SET pid = $1, name = $2, cpu_usage = $3, mem_usage = $4 WHERE id = $5";
const getProcessInfo = "SELECT * FROM process_info";
const deleteEntries = "DELETE FROM process_info";
const countRows = "SELECT COUNT(*) FROM process_info"



module.exports = {
    insertRow,
    updateRow,
    getProcessInfo,
    deleteEntries,
    countRows
}
