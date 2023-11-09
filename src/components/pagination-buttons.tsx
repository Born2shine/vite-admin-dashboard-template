import { ChevronLeft, ChevronRight } from "lucide-react"
import ReactPaginate from "react-paginate"

interface PagePaginationButtonsProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (event: any) => void;
    loading?: boolean;
}

const PaginationButtons = ({totalPages, setCurrentPage}: PagePaginationButtonsProps) => {

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected + 1)
    }

    return (
        <div>
            <ReactPaginate
                breakLabel={<span className="mr-3">...</span>}
                nextLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-[4px] ml-3">
                        <ChevronRight className="w-4 h-4" />
                    </span>
                }
                onPageChange={(selected) => handlePageChange(selected.selected)}
                pageRangeDisplayed={5}
                pageCount={totalPages}
                previousLabel={
                    <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-[4px] mr-3">
                        <ChevronLeft className="w-4 h-4" />
                    </span>
                }
                containerClassName="flex items-center justify-center mt-8 mb-4 text-sm"
                pageClassName="transition-all ease-in-out duration-500 block border- border-solid border-gray-100 hover:bg-gray-100 w-10 h-10 flex items-center justify-center cursor-pointer rounded-md mr-3 !rounded-[4px]"
                activeClassName="bg-primary text-white hover:!bg-primary"
            />
        </div>
    )
}

export default PaginationButtons