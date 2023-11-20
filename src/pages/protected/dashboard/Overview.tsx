import { Book, CreditCard, DollarSign, ShoppingBag } from "lucide-react"

const Overview = () => {

  return (
    <section className="">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="p-6 bg-white rounded-md border">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="font-GilroyMedium text-lg">$34,000,000</h4>
              <span className="text-sm pb-1">Income</span>
            </div>
            <CreditCard className="w-6 h-6 text-secondary"/>
          </div>
        </div>
        <div className="p-6 bg-white rounded-md border">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="font-GilroyMedium text-lg">$40,000</h4>
              <span className="text-sm pb-1">Revenue</span>
            </div>
            <DollarSign className="w-6 h-6 text-secondary"/>
          </div>
        </div>
        <div className="p-6 bg-white rounded-md border">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="font-GilroyMedium text-lg">$40,000</h4>
              <span className="text-sm pb-1">Sales</span>
            </div>
            <ShoppingBag className="w-6 h-6 text-red-200"/>
          </div>
        </div>
        <div className="p-6 bg-white rounded-md border">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <h4 className="font-GilroyMedium text-lg">40,000</h4>
              <span className="text-sm pb-1">Invoice</span>
            </div>
            <Book className="w-6 h-6 text-red-200"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview