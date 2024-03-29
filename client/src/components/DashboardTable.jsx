import { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

function dashboardTable() {
	const [data, setData] = useState([]);

	useEffect(()=>{
		socket.on('process_info_update', ( data )=>{
			console.log('data_updated : ', data);
			setData(response.data);
		  })
	})
	useEffect(() => {
	  const fetchData = async () => {
		try {
		  const response = await axios.get('http://localhost:3000/data');
		  console.log("response", response)
		  setData(response.data);
		  
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  };
  
	  fetchData();
	}, []);
  
	// console.log("data", typeof(data), data);

  return (
    <>
    <div className="container flex justify-center mx-auto h-full overflow-y-scroll no-scrollbar scroll-smooth">
	<div className="flex flex-col">
		<div className="w-full">
			<div className="border-b border-gray-200 shadow">
				<table className="divide-y divide-black border-collapse table-auto overflow-scroll scroll-smooth w-full h-11">
					<thead className="bg-gray-50 sticky top-0 z-10 ">
						<tr>
							<th className="px-6 py-2 text-xs text-gray-500 border-l border-r border-black ">
								S.NO
							</th>
							<th className="px-6 py-2 text-xs text-gray-500 border-l border-r border-black">
								pID
							</th>
							<th className="px-6 py-2 text-xs text-gray-500 border-l border-r border-black">
								Name
							</th>
							<th className="px-6 py-2 text-xs text-gray-500 border-l border-r border-black">
								CPU usage
							</th>
							<th className="px-6 py-2 text-xs text-gray-500 border-l border-r border-black">
								Memory usage
							</th>
							
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-300">
						{ data &&
							data.map((item) =>(
								<>
								{/* {console.log("items: ", item)} */}
								<tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								{item.id}
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									{item.pid}
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">{item.name}</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								{item.cpu_usage}%
							</td>
							<td className="px-6 py-4 table-border">
							<div className="text-sm text-gray-900 ">
									{item.mem_usage}%
								</div>
							</td>
							
						</tr>
						</>
							))
						}
	
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default dashboardTable