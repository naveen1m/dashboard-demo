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
const { insertRow, updateRow } = require('./queries.js');

// add process info in the rows of the table 'process_info'

async function addRows() {
    const client = await pool.connect();
    // console.log('client : ', client)
    const rowCountResult = await client.query('SELECT COUNT(*) FROM process_info');
    const rowCount = parseInt(rowCountResult.rows[0].count);
    console.log("rows count", rowCount);
    try {
        if (rowCount === 0) {
            monitorUsage().then(async processInfo => {
                for (const proc of processInfo) {
                    const cpuUsage = Number(proc.CPU.replace('%', ''));
                    const memUsage = Number(proc.Memory.replace('%', ''));

                    const queryValues = [proc.PID, proc.Name, cpuUsage, memUsage];
                    await client.query(insertRow, queryValues);

                }
                console.log('Insert successful');

            }).catch(error => {
                console.error('An error occurred while inserting:', error);
            });
        } else {
            console.log(`table is not empty, no new entries inserted, row: ${rowCount}`)
        }
    } catch (err) {
        console.log(err)
    } finally {
        client.release();
    }
}


async function updateRows() {
    const client = await pool.connect();
    const rowCountResult = await client.query('SELECT COUNT(*) FROM process_info');
    const rowCount = parseInt(rowCountResult.rows[0].count);
    try {
        monitorUsage().then(async processInfo => {
            for (let i = 1; i < processInfo.length && rowCount; i++) {
                const proc = processInfo[i];
                const cpuUsage = Number(proc.CPU.replace('%', ''));
                const memUsage = Number(proc.Memory.replace('%', ''));

                const queryValues = [proc.PID, proc.Name, cpuUsage, memUsage, i];
                await client.query(updateRow, queryValues);

            }
            console.log('Update successful');
        }
        ).catch(error => {
            console.error('An error occurred while updating:', error);
        });
    } catch (error) {
        console.log("Error updating row", error);
    } finally {
        client.release();
    }
}

module.exports = { addRows, updateRows };
