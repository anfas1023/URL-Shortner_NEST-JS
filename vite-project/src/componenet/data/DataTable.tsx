import * as React from "react";

interface IDatatableProps {}

const Datatable: React.FunctionComponent<IDatatableProps> = () => {
  return (
    <>
      <div className="container mx-auto pt-2 pb-10">
        <div className="overflow-x-auto shadow-sm sm:rounded-lg">
          <table className="w-full table-fixed text-sm text-left text-gray-500">
            <thead className="text-md uppercase text-gray-50 bg-gray-700">
              <tr>
                <th scope="col" className="px-6 py-3 w-6/12">
                  Full URL
                </th>
                <th scope="col" className="px-6 py-3 w-3/12">
                  Short URL
                </th>
                <th scope="col" className="px-6 py-3 w-1/12">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3 w-2/12">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/another-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/xyz789
                </td>
                <td className="px-6 py-4">120</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b">
                <td className="px-6 py-4 font-medium text-gray-900">
                  https://example.com/some-long-url
                </td>
                <td className="px-6 py-4 text-blue-500">
                  https://short.ly/abc123
                </td>
                <td className="px-6 py-4">50</td>
                <td className="px-6 py-4">
                  <button className="text-white bg-red-500 hover:bg-red-700 px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Datatable;
