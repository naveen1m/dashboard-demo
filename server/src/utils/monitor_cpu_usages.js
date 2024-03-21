const si = require('systeminformation');

async function getProcessInfo() {
    const processes = await si.processes();
    return processes.list.map(proc => ({
        pid: proc.pid,
        name: proc.name,
        cpuUsage: proc.cpu.toFixed(2),
        memUsage: proc.mem.toFixed(2)
    }));
}


async function monitorUsage() {
        const processInfo = [];
        const maxProcesses = 50;
        let count = 0;

        const processes = await getProcessInfo();
        
        processes.forEach(proc => {
            if (count < maxProcesses && proc.memUsage > 0) {
              processInfo.push({
                PID: proc.pid,
                Name: proc.name,
                CPU: `${proc.cpuUsage}%`,
                Memory: `${proc.memUsage}%`
              });
              count++;
            }
          });
        //   console.log("processInfo", processInfo);

return processInfo;

}

module.exports = monitorUsage;
