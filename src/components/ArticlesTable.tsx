"use client";
import Link from "next/link";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
// Import your new component
import { IArticle } from "@/types/article";

const ArticlesTable = ({ articles }: { articles: IArticle[] }) => {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "Id",
      },
      {
        accessorKey: "language",
        header: "Language",
      },
      {
        id: "view",
        header: "View",
        cell: (info) => (
          <Link
            href={`/dashboard/view/${info.row.original.id}`}
            className="bg-light-success dark:bg-dark-success px-4 py-1 rounded-md cursor-pointer hover:opacity-95 inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
          </Link>
        ),
      },
      {
        header: "Edit",
        cell: (info) => (
          <Link
            href={`/dashboard/edit/${info.row.original.id}`}
            className="bg-light-warning dark:bg-dark-warning px-4 py-1 rounded-md cursor-pointer hover:opacity-95 inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Link>
        ),
      },
      {
        header: "Delete",
        cell: () => (
          <Link
            href="/"
            className="bg-light-error dark:bg-dark-error px-4 py-1 rounded-md cursor-pointer hover:opacity-95 inline-block"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </Link>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: articles,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
  });

  return (
    <article className="mt-8 overflow-x-auto">
      <table className="min-w-full border-collapser  bg-light-background-layer dark:bg-dark-background-layer">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  className="border border-light-border dark:border-dark-border px-4 py-4 text-left cursor-pointer select-none font-bold text-xl underline"
                >
                  <div className="flex items-center gap-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: "🔼",
                      desc: "🔽",
                    }[header.column.getIsSorted()] ?? ""}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border border-light-border dark:border-dark-border px-4 py-2"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4">
        {/* Page size selector */}
        <div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="px-2 py-1 rounded-md"
          >
            {[10, 20, 50].map((pageSize) => (
              <option
                key={pageSize}
                value={pageSize}
                className="text-dark bg-light dark:text-light dark:bg-dark"
              >
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>

        {/* Pagination buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="px-3 py-1 rounded-md bg-dark text-light dark:bg-light dark:text-dark disabled:opacity-50 cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="px-3 py-1 rounded-md bg-dark text-light dark:bg-light dark:text-dark disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticlesTable;
