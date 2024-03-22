import React from 'react'

function dashboardTable() {
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
						<tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr>
						
						<tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr><tr className="whitespace-nowrap">
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								1
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-900 ">
									Jon doe
								</div>
							</td>
							<td className="px-6 py-4 table-border">
								<div className="text-sm text-gray-500">jhondoe@example.com</div>
							</td>
							<td className="px-6 py-4 text-sm text-gray-500 table-border">
								2021-1-12
							</td>
							<td className="px-6 py-4 table-border">
								<a href="#" className="px-4 py-1 text-sm text-indigo-600 bg-indigo-200 rounded-full">Edit</a>
							</td>
							
						</tr>
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