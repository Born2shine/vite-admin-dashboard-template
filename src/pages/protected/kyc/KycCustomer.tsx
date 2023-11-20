import { routesPath } from "@/utils"
import { Link } from "react-router-dom"

const KycCustomer = () => {
  const { CASH_REQUEST } = routesPath
  return (
    <section>
      <div className="flex flex-col items-center text-center bg-primary p-4 py-16 text-white">
        <section id="block-8" className="widget widget_block">
          <div className="wpb_text_column wpb_content_element ">
            <div className="wpb_wrapper">
              <h2 className="font-GilroyBold text-4xl">Let’s make magic together</h2>
              <p className="py-6">Whether it’s an innovation or existing product.</p>
              <p>
                <Link to={CASH_REQUEST} className="inline-block bg-secondary p-3 px-8 text-primary font-GilroyMedium rounded-full hover:bg-white hover:text-primary">Build Your Project</Link>
              </p>

            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default KycCustomer