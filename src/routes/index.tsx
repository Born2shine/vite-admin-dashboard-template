import { CashRequest, KycCustomer, Login, Overview } from "@/pages"
import DashboardLayout from "@/pages/protected/layout"
import { routesPath } from "@/utils"
import { Route, Routes } from "react-router-dom"

const AppRoute = () => {
  const { DASHBOARD, CASH_REQUEST, KYC } = routesPath

  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route element={<DashboardLayout/>}>
          <Route path={DASHBOARD} element={<Overview />} />
          <Route path={KYC} element={<KycCustomer />} />
          <Route path={CASH_REQUEST} element={<CashRequest />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute