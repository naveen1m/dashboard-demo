/* Table process_info is already created, here i am adding 50 rows and updating it


process_info (
    id SERIAL PRIMARY KEY,
    pid INT,
    name VARCHAR(255),
    cpu_usage FLOAT,
    mem_usage FLOAT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

*/

const pool = require('../database/pgConnection.js');
const monitorUsage = require('../utils/monitor_cpu_usages.js');
const { insertRow } = require('./queries.js');

// add process info in the rows of the table 'process_info'

async function addRows() {
    const client = await pool.connect();
    const rowCountResult = await client.query('SELECT COUNT(*) FROM process_info');
    const rowCount = parseInt(rowCountResult.rows[0].count);
    // console.log("rows count", rowCount);
    if (rowCount === 0) {
        const queryText = insertRow;

        monitorUsage().then(async processInfo => {
            for (const proc of processInfo) {
                const cpuUsage = Number(proc.CPU.replace('%', ''));
                const memUsage = Number(proc.Memory.replace('%', ''));

                const queryValues = [proc.PID, proc.Name, cpuUsage, memUsage];
                await client.query(queryText, queryValues);

            }
        }).catch(error => {
            console.error('An error occurred while monitoring process usage:', error);
        });
    } else {
        console.log(`table is not empty, no new entries inserted, row: ${rowCount}`)
    }
}

module.exports = addRows;
