import PaginationButtons from "@/components/pagination-buttons"
import useDataFetch from "@/components/use-data-fetch"

const CashRequest = () => {
  const {loading, pages, totalPages, currentPage, setCurrentPage} = useDataFetch()
  return (
    <section>
      <div className="p-4 bg-white mb-3">Followers</div>

      <div className="w-full bg-white p-4">
        {
          loading ? 
          <div> Loading... </div> : 
          <>
          <div className="grid grid-cols-2 gap-10 container md:grid-cols-3 xl:grid-cols-5">
            {
              pages.map((page: Record<string, any>) => (
                <div key={page.id} className="flex flex-col items-center justify-center bg-primary/5 rounded-md p-4">
                  <img src={page.avatar_url} alt="follower-image" className="w-24 p-2 border-[2px] border-solid border-primary rounded-full object-cover" />
                  <div>{page.login}</div>
                  <a href={page.html_url} className="outline outline-1 outline-blue-600 mt-2 bg-primar text-primary p-2 px-4 text-sm rounded-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out ">View profile</a>
                </div>
              ))
            }
          </div>
            <PaginationButtons 
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              loading={loading}
            />
          </>
        }
      </div>
    </section>
  )
}

export default CashRequest