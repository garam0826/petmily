import React from 'react';
import '../css/paginaion.css'; // 위에서 변환한 CSS 파일을 import 합니다.

function Pagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);

    return (
        <div className="Nav_pagination">
            <button
                className="Button_pagination"
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                &lt;
            </button>
            {Array(numPages)
                .fill()
                .map((_, i) => (
                    <button
                        className="Button_pagination"
                        key={i + 1}
                        onClick={() => setPage(i + 1)}
                        aria-current={page === i + 1 ? "page" : undefined}
                    >
                        {i + 1}
                    </button>
                ))}
            <button
                className="Button_pagination"
                onClick={() => setPage(page + 1)}
                disabled={page === numPages}
            >
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
