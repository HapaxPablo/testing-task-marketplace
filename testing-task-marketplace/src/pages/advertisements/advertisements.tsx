import { useCallback, useState } from "react";
import Card from "../../components/card/card";
import { Advertisment } from "../../types";
import useFetch from "../../hooks/useFetch";
import { API_URL } from "../../config";
import Pagination from "../../components/pagination/pagination";

export function Advertisements() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const { data, error, loading } = useFetch<Advertisment[]>(`${API_URL}/advertisements`);

  const getTotalPageCount = (rowCount: number): number =>
    Math.ceil(rowCount / limit);

  const paginatedData = data?.slice((currentPage - 1) * limit, currentPage * limit);

  const handleNextPageClick = useCallback(() => {
    const current = currentPage;
    const next = current + 1;
    const total = data ? getTotalPageCount(data.length) : current;

    setCurrentPage(next <= total ? next : current);
  }, [currentPage, data]);

  const handlePrevPageClick = useCallback(() => {
    const current = currentPage;
    const prev = current - 1;

    setCurrentPage(prev > 0 ? prev : current);
  }, [currentPage]);


  return (
    <div style={{ display: "flex", flexDirection: "column", gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", gap: '8px' }}>
        {paginatedData?.length ? (
          paginatedData.map((item: Advertisment) => <Card key={item.id} {...item} />)
        ) : (
          <p>Нет данных для отображения</p>
        )}
      </div>

      {data && (
        <div style={{ display: 'flex', gap: '8px', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Pagination
            onNextPageClick={handleNextPageClick}
            onPrevPageClick={handlePrevPageClick}
            disable={{
              left: currentPage === 1,
              right: currentPage === getTotalPageCount(data.length),
            }}
            nav={{ current: currentPage, total: getTotalPageCount(data.length) }} /><select onChange={(e) => setLimit(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      )
      }
    </div>
  )
}